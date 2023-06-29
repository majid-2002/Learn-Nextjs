import { Suspense } from "react"
import getUser from "../../../../lib/getUser"
import getUserPosts from "../../../../lib/getUserPosts"
import getAllUsers from "../../../../lib/getAllUsers"
import UserPosts from "./components/UserPosts"
import type { Metadata } from "next"

import { notFound } from "next/navigation"


type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<UserType> = getUser(userId);
    const user = await userData;

    if (!user) {
        return {
            title: "User not found",
        }
    }
        
    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}


export default async function UserPage({ params: { userId } }: Params) { //? destructure params.userId from params object
    const userData: Promise<UserType> = getUser(userId); //? get user data as promise from lib/getUser.tsx
    const userPostsData: Promise<PostType[]> = getUserPosts(userId); //? get user posts data as promise from lib/getUserPosts.tsx

    // const [user, userPosts] = await Promise.all([userData, userPostsData]); //? await for both promises to resolve

    const user = await userData;

    if (!user) notFound();


    return (
        <div>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </div>
    )
}

export async function generateStaticParams() {
    const usersData: Promise<UserType[]> = getAllUsers(); //? get all users data as promise from lib/getAllUsers.ts
    const users = await usersData;

    return users.map(user => {
        return {
            params: {
                userId: user.id
            }
        }
    })
}