export default function GetData({ posts }) {
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.user_id}>
          <h2>
            {post.user_id}
            {post.first_name} {post.last_name}
          </h2>
          <p>
            <strong>Login:</strong> {post.login}
          </p>
          <p>
            <strong>Password:</strong> {post.password}
          </p>
        </div>
      ))}
    </div>
  );
}
