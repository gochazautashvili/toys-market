import NavLocation from "@/components/NavLocation";
import Map from "./Map";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="container mb-[60px] lg:mb-[120px]">
      <NavLocation />
      <div className="flex flex-col bg-white p-10 shadow rounded-[16px]">
        <Map />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
