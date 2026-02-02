import PhotoGrid from "@/components/about/PhotoGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] px-6 pt-[50px] pb-20">
      <div className="max-w-7xl mx-auto ml-[87px] mr-[87px]">
        <h1 className="text-4xl font-black text-white tracking-tighter mb-11 pl-2" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          ARCHIVE
        </h1>

        <PhotoGrid />
      </div>
    </div>
  );
}
