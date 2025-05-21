import { useState } from 'react';
import { getAssetPath } from '@/lib/utils';

interface VideoGalleryProps {
  title: string;
  description: string;
}

const VideoGallery = ({ title, description }: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Function to get all videos
  const getVideos = () => {
    const videos = [];
    for (let i = 1; i <= 3; i++) {
      videos.push(`/src/assets/videos/${i}.mp4`);
    }
    return videos;
  };

  const videos = getVideos();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{title}</h2>
        <p className="section-subtitle text-center">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedVideo(video)}
            >
              <video
                src={getAssetPath(video)}
                className="w-full h-64 object-cover"
                poster={getAssetPath(`/src/assets/videos/${index + 1}.jpg`)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-coach-red"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-coach-red transition-colors"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <video
              src={getAssetPath(selectedVideo)}
              controls
              className="w-full h-auto rounded-lg"
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery; 