function PostList({
  posts,
  deletePost,
}) {
  return (
    <div>
      <h2>All Posts</h2>

      {posts.length === 0 ? (
        <p>No Posts Available</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >

            <img src = {post.image} alt="image not found"/>

            <h3>{post.title}</h3>

            <p>{post.content}</p>

            <button
              onClick={() =>
                deletePost(post._id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;