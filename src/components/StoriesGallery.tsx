import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { ref, get } from 'firebase/database';
import { db } from '../firebaseClient'; // adjust path if needed

interface Story {
  id: string;
  title: string;
  content: string;
  authorName?: string;
  photos?: string[];
}

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const StoriesGallery = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [expandedContent, setExpandedContent] = useState<{ [id: string]: boolean }>({});
  const [expandedPhotos, setExpandedPhotos] = useState<{ [id: string]: boolean }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const storiesRef = ref(db, 'stories');
        const snapshot = await get(storiesRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const fetchedStories: Story[] = Object.entries(data).map(([id, value]) => ({
            id,
            ...(value as Omit<Story, 'id'>),
          }));
          setStories(fetchedStories);
        } else {
          setStories([]);
        }
      } catch (error) {
        console.error('Error fetching stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const toggleContent = (id: string) => {
    setExpandedContent((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const togglePhotos = (id: string) => {
    setExpandedPhotos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {loading ? (
        <div className="text-center py-20 text-gray-500 text-lg">Loading stories...</div>
      ) : stories.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-xl">No stories shared yet.</div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {stories.map((story) => {
            const isContentExpanded = expandedContent[story.id];
            const isPhotosExpanded = expandedPhotos[story.id];
            const content = story.content?.trim() || 'No content available';
            const shouldTruncateContent = content.length > 200 && !isContentExpanded;
            const displayedContent = shouldTruncateContent
              ? content.slice(0, 200) + '...'
              : content;

            // Photos to show: all if expanded, else max 2
            const photosToShow = isPhotosExpanded ? story.photos || [] : (story.photos?.slice(0, 2) || []);

            return (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition-shadow cursor-pointer mb-6"
              >
                {/* Photo gallery */}
                {photosToShow.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {photosToShow.map((photoUrl, index) => (
                      <div key={index} className="relative">
                        <img
                          src={photoUrl}
                          alt={`${story.title} photo ${index + 1}`}
                          className="w-full h-48 object-cover rounded-tl-xl rounded-tr-xl"
                          loading="lazy"
                        />
                        {/* Overlay with toggle for more photos */}
                        {!isPhotosExpanded && index === 1 && (story.photos!.length > 2) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // prevent card click if any
                              togglePhotos(story.id);
                            }}
                            className="absolute inset-0 bg-black bg-opacity-50 rounded-tl-xl rounded-tr-xl flex items-center justify-center text-white text-lg font-semibold"
                            aria-label={`Show ${story.photos!.length - 2} more photos`}
                          >
                            +{story.photos!.length - 2} more
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-1">{story.title}</h2>
                  {story.authorName && (
                    <p className="text-gray-500 text-sm mb-2">By {story.authorName}</p>
                  )}
                  <p className="text-gray-700 text-sm whitespace-pre-wrap">
                    {displayedContent}
                  </p>
                  {content.length > 200 && (
                    <button
                      onClick={() => toggleContent(story.id)}
                      className="text-blue-600 hover:underline text-sm mt-2"
                      aria-expanded={isContentExpanded}
                    >
                      {isContentExpanded ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </Masonry>
      )}
    </div>
  );
};

export default StoriesGallery;
