
type Props = {
    promise: Promise<PostType[]>
}
async function UserPosts({ promise }: Props) {
    const posts = await promise;
    const content = posts.map(post => {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <br />
            </div>
        )
    })
    return content;

}
export default UserPosts;