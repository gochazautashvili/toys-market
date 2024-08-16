import { Loader2, Play } from "lucide-react";
import { Button } from "./ui/button";
import { lazy, Suspense, useState } from "react";
const VideoDialog = lazy(() => import("./VideoDialog"));

const WatchStory = () => {
  const [video, setVideo] = useState(false);

  const handleOpenVideo = () => {
    setVideo(!video);
  };

  return (
    <>
      <section className="flex w-full items-center justify-center bg-parallax-cover bg-cover bg-fixed bg-center text-white">
        <div className="flex h-full w-full flex-col items-center gap-4 bg-black/30 md:py-[120px] px-5 py-[70px]">
          <p className="font-semibold">About The Shop</p>
          <h1 className="text-4xl font-semibold">Watch Our Story</h1>
          <p className="text-center">
            There is no magic formula to write perfect ad copy. It is based on a
            number of factors, including ad placement, demographic, even the
            consumer&apos;s mood.
          </p>
          <Button
            onClick={handleOpenVideo}
            className="size-16 rounded-full transition duration-500 hover:scale-110"
            size="icon"
          >
            <Play className="fill-white" />
          </Button>
        </div>
      </section>
      {video && (
        <Suspense
          fallback={
            <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-black/60">
              <Loader2 className="animate-spin stroke-white size-8" />
            </div>
          }
        >
          <VideoDialog openChange={handleOpenVideo} open={video} />
        </Suspense>
      )}
    </>
  );
};

export default WatchStory;
