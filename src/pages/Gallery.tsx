import ImageGallery from '@/components/ImageGallery';
import VideoGallery from '@/components/VideoGallery';

const Gallery = () => {
  return (
    <>
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
    </>
  );
};

export default Gallery;
