import NavLocation from "@/components/NavLocation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <section className="container mb-[60px] lg:mb-[120px]">
      <NavLocation />
      <div className="flex flex-col gap-10 rounded-[16px] bg-white p-10 shadow lg:flex-row">
        <div>
          <h1 className="mb-4 text-3xl font-semibold">Delivery Info</h1>
          <p className="mb-7 text-sm">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy; it is based on a
            number of factors, including ad placement, demographic, even the
            consumer&apos;s mood when they see your ad.
          </p>
          <h1 className="mb-4 text-3xl font-semibold">
            What&apos;s a Rich Text element?
          </h1>
          <p className="mb-7 text-sm">
            The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content.
          </p>
          <h1 className="mb-4 text-3xl font-semibold">
            Static and dynamic content editing
          </h1>
          <p className="mb-7 text-sm">
            A rich text element can be used with static or dynamic content. For
            static content, just drop it into any page and begin editing.
            Beautifully Designed 100% Responsive CMS Content Smooth Animations
            For dynamic content, add a rich text field to any collection and
            then connect a rich text element to that field in the settings
            panel. Voila!
          </p>
        </div>
        <div className="flex max-h-[190px] min-w-[270px] flex-col items-center gap-3 rounded-[16px] border border-[#e5e5e5] p-10">
          <h1 className="text-center">
            Can't Find the Answer to Your Question?
          </h1>
          <Button className="h-10 w-[120px]" asChild>
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
