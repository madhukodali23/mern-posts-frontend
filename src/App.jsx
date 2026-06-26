import { useEffect, useState } from "react";
import api from "./services/api";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { ThreeDots } from "react-loader-spinner";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response =
          await api.get("/posts");

        setPosts(response.data);
      } catch {
        setError(
          "Failed to fetch posts"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (
    formData
  ) => {
    try {
      const response =
        await api.post(
          "/posts",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      setPosts((prev) => [
        response.data,
        ...prev,
      ]);
    } catch (error) {
      console.error(error);
      setError(
        "Failed to create post"
      );
    }
  };

  const deletePost = async (
    id
  ) => {
    try {
      await api.delete(
        `/posts/${id}`
      );

      setPosts((prev) =>
        prev.filter(
          (post) =>
            post._id !== id
        )
      );
    } catch {
      setError(
        "Failed to delete post"
      );
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <ThreeDots
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="three-dots"
          visible={loading}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>
        Posts Application
      </h1>

      {error && <p>{error}</p>}

      <PostForm
        addPost={addPost}
      />

      <hr />

      <PostList
        posts={posts}
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;