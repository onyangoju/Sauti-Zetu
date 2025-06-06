
import { Story } from "@/pages/Index";
import { Calendar, MapPin, User, Tag, Image } from "lucide-react";

interface StoriesGalleryProps {
  stories: Story[];
}

export const StoriesGallery = ({ stories }: StoriesGalleryProps) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      kidnapping: 'bg-red-100 text-red-800',
      abduction: 'bg-red-100 text-red-800',
      harassment: 'bg-yellow-100 text-yellow-800',
      intimidation: 'bg-orange-100 text-orange-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Courage</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These are the voices of brave individuals who chose to speak their truth. 
          Each story represents resilience in the face of adversity.
        </p>
        <div className="mt-6 text-lg font-semibold text-blue-900">
          {stories.length} {stories.length === 1 ? 'Story' : 'Stories'} Shared
        </div>
      </div>

      {stories.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 text-xl mb-4">No stories have been shared yet.</div>
          <p className="text-gray-600">Be the first to share your experience and inspire others.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight flex-1 mr-4">
                    {story.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(story.category)} flex items-center gap-1`}>
                    <Tag size={12} />
                    {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{story.authorName}</span>
                  </div>
                  {story.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{story.location}</span>
                    </div>
                  )}
                  {story.date && (
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(story.date)}</span>
                    </div>
                  )}
                </div>

                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {story.content.length > 300 
                      ? `${story.content.substring(0, 300)}...` 
                      : story.content
                    }
                  </p>
                </div>

                {/* Photo Gallery */}
                {story.photos && story.photos.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Image size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600 font-medium">
                        Supporting Photos ({story.photos.length})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {story.photos.slice(0, 4).map((photo, index) => (
                        <div key={index} className="relative">
                          <img
                            src={photo}
                            alt={`Story photo ${index + 1}`}
                            className="w-full h-20 object-cover rounded-lg border border-gray-200"
                          />
                          {index === 3 && story.photos!.length > 4 && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                +{story.photos!.length - 4} more
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {story.content.length > 300 && (
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Read more
                  </button>
                )}
              </div>

              <div className="bg-gray-50 px-6 py-3">
                <div className="text-xs text-gray-500">
                  Story shared to help raise awareness and support fellow activists
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
