import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"; // For error handling with toast

const Browse = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/browse`
        ); // Send a GET request to the backend to grab posts
        const updatedPosts = response.data.map((post) => ({
          ...post,
          image: post.image.startsWith("/uploads/")
            ? `${import.meta.env.VITE_BACKEND_URL}${post.image}`
            : post.image,
        }));
        setPosts(updatedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to load charity posts"); // Show an error with toast if something goes wrong
      } finally {
        setLoading(false); // when the req is done the loading is stopped
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Browse Charity Posts</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.length === 0 ? (
            <p>No charity posts available.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-white p-4 rounded-lg shadow-md transform hover:scale-110 hover:rotate-3 transition-transform duration-300 ease-in-out"
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                ) : (
                  <div className="h-48 bg-gray-200 rounded-md mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Category:</strong> {post.category}
                </p>
                <p className="text-gray-500">{post.summary}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Browse;
