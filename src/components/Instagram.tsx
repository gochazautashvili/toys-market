import { Button } from "./ui/button";

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

const Instagram = () => {
  return (
    <section className="container my-16 flex flex-col items-center lg:my-[120px]">
      <p className="mb-4 text-center font-semibold text-primary">
        @ElasticThemes
      </p>
      <h1 className="text-center font-Round text-3xl">We're on Instagram!</h1>
      <div className="mb-16 mt-20 grid grid-cols-3 gap-6 lg:grid-cols-6">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            width={150}
            height={150}
            alt="instagram"
            className="h-auto w-full max-w-[150px] flex-1 basis-[110px] rounded-[16px] object-cover shadow hover:scale-110 transition"
          />
        ))}
      </div>
      <Button
        className="h-12 px-7"
        onClick={() => alert("ჯერჯერობით ინსტაგრამის ლინკი არ არის")}
      >
        See More Photos
      </Button>
    </section>
  );
};

export default Instagram;
