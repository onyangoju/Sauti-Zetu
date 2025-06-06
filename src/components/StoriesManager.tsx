import { useEffect, useState } from "react";
import { db } from "../firebaseClient";  // adjust path if needed
import { ref, onValue } from "firebase/database";
import { Story } from "../pages/Index";

export const StoriesManager = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storiesRef = ref(db, "stories"); // "stories" is the node in RTDB

    const unsubscribe = onValue(
      storiesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Firebase RTDB stores data as an object with keys, convert to array
          const storiesArray = Object.entries(data).map(([id, storyData]) => ({
            id,
            ...storyData,
          })) as Story[];
          setStories(storiesArray);
        } else {
          setStories([]);
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading stories...</p>;
  if (error) return <p>Error loading stories: {error}</p>;
  if (stories.length === 0) return <p>No stories found.</p>;

  return (
    <div className="space-y-8 p-4 max-w-4xl mx-auto">
      {stories.map((story) => (
        <div key={story.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{story.title}</h3>
          <p className="mb-2">{story.content}</p>
          <p className="text-sm text-gray-500 mb-1">
            <strong>Category:</strong> {story.category}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <strong>Location:</strong> {story.location || "N/A"}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <strong>Date:</strong> {story.date || "N/A"}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <strong>Author:</strong> {story.isAnonymous ? "Anonymous" : story.authorName}
          </p>
          {/* Render photos if exist */}
          {story.photos && story.photos.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {story.photos.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Photo ${i + 1}`}
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
