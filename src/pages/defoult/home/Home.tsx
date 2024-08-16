import WatchStory from "@/components/WatchStory";
import Category from "./Category";
import Hero from "./Hero";
import StuffedAnimals from "./StuffedAnimals";
import WoodenToys from "./WoodenToys";
import Webflow from "@/components/Webflow";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <StuffedAnimals />
      <WoodenToys />
      <WatchStory />
      <Webflow />
    </>
  );
};

export default Home;
