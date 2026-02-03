import PhotoGrid from "@/components/about/PhotoGrid";
import AboutIntro from "@/components/about/AboutIntro";

export default function GalleryPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] px-6 pt-[50px] pb-20">
      <div className="max-w-7xl mx-auto ml-[87px] mr-[87px]">
        <AboutIntro />

        <div className="mt-100">
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
}
