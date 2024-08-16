import NavLocation from "@/components/NavLocation";
import Introducing from "./Introducing";
import Webflow from "@/components/Webflow";
import Responsive from "./Responsive";
import WatchStory from "@/components/WatchStory";

const About = () => {
  return (
    <>
      <div className="container">
        <NavLocation />
      </div>
      <Introducing />
      <Webflow />
      <Responsive />
      <div className="mb-[60px] lg:mb-[120px]">
        <WatchStory />
      </div>
    </>
  );
};

export default About;
