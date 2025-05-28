import { useState } from 'react';
import { getAssetPath } from '@/lib/utils';

interface ImageGalleryProps {
  type: 'personal' | 'training';
  title: string;
  description: string;
}

const ImageGallery = ({ type, title, description }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to get all images from the specified folder
  const getImages = () => {
    const images = [];
    // For now, we'll use placeholder numbers. You can replace these with actual image imports
    const imageCount = type === 'personal' ? 6 : 6; // Adjust these numbers based on your actual image count
    for (let i = 1; i <= imageCount; i++) {
      images.push(getAssetPath(`images/${type}/${i}.jpg`));
    }
    return images;
  };

  const images = getImages();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">{title}</h2>
        <p className="section-subtitle text-center">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${type} image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-coach-red transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
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
            <img
              src={selectedImage}
              alt="Selected image"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 