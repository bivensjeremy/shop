const Video = () => {
  return (
    <video 
        playsInline 
        autoPlay 
        loop 
        muted
        className="object-cover top-0 left-0 fixed z-[-1] h-screen w-full"
    >
        <source src="/stock/clothingStore.mp4" 
        
        poster="/images/timelapseStillImage.png"  />
    </video>
  );
};

export default Video;