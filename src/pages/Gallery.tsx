import ImageGallery from '@/components/ImageGallery';
import VideoGallery from '@/components/VideoGallery';
import { getAssetPath } from '@/lib/utils';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero/Banner Section */}
      <div
        className="relative w-full h-64 md:h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getAssetPath('images/hero/gallery.jpg')})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Gallery</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full">
        <section className="container-custom py-12">
          <ImageGallery
            type="personal"
            title="Personal Gallery"
            description="A collection of my personal journey and achievements in martial arts"
          />
        </section>

        <section className="bg-gray-100 dark:bg-coach-dark-card py-12">
          <ImageGallery
            type="training"
            title="Training Gallery"
            description="Showcasing the progress and achievements of our young champions"
          />
        </section>

        <section className="py-12">
          <VideoGallery
            title="Video Highlights"
            description="Watch our best moments and training sessions"
          />
        </section>
      </div>
    </div>
  );
};

export default Gallery;
