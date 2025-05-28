import ImageGallery from '@/components/ImageGallery';
import VideoGallery from '@/components/VideoGallery';
import GalleryCard from '@/components/GalleryCard';
import { getAssetPath } from '@/lib/utils';

const galleryImages = [
  'images/gallery/1.jpg',
  'images/gallery/2.jpg',
  'images/gallery/3.jpg',
  'images/gallery/4.jpg',
  'images/gallery/5.jpg',
  'images/gallery/6.jpg',
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getAssetPath('/src/assets/images/hero/gallery.jpg')})`,
        }}
      >
        <div className="pt-24">
          <ImageGallery
            type="personal"
            title="Personal Gallery"
            description="A collection of my personal journey and achievements in martial arts"
          />

          <div className="bg-gray-100 dark:bg-coach-dark-card py-12">
            <ImageGallery
              type="training"
              title="Training Gallery"
              description="Showcasing the progress and achievements of our young champions"
            />
          </div>

          <div className="py-12">
            <VideoGallery
              title="Video Highlights"
              description="Watch our best moments and training sessions"
            />
          </div>
        </div>
      </div>

      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={index}
              index={index}
              image={getAssetPath(image)}
              title={`Gallery Image ${index + 1}`}
              description="Training session moments"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
