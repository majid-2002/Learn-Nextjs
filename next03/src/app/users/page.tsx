import type { Metadata } from "next";
import Link from "next/link";
import getAllUsers from "../../../lib/getAllUsers";




export const metadata: Metadata = {
    title: "Users",
    description: "Users page",
}

export default async function UsersPage() {

    const usersData: Promise<UserType[]> = getAllUsers(); //? get all users data as promise from lib/getAllUsers.ts
    const users = await usersData; //? await for usersData promise to resolve

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                    </>
                )
            })}
        </section>
    )

    return content;
}
