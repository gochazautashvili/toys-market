import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Form = () => {
  return (
    <form className="flex flex-col gap-6">
      <h1 className="mt-5 text-2xl">Leave a Message</h1>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold" htmlFor="name">
          Full Name
        </label>
        <Input
          required
          id="name"
          className="h-12 rounded-[16px]"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold" htmlFor="email">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          required
          className="h-12 rounded-[16px]"
          placeholder="Your contact email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold" htmlFor="message">
          Message
        </label>
        <Textarea
          required
          id="message"
          className="h-28 rounded-[16px]"
          placeholder="Message text..."
        />
      </div>
      <Button className="h-12 w-[151px]" type="submit">
        Send Message
      </Button>
    </form>
  );
};

export default Form;
