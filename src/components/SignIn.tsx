import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "./LoadingButton";
import API from "@/lib/api";
import { Button } from "./ui/button";

const sign_in_schema = z.object({
  email: z.string().email(),
});

const SignIn = () => {
  const form = useForm<z.infer<typeof sign_in_schema>>({
    resolver: zodResolver(sign_in_schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof sign_in_schema>) {
    await API.post("/users", values).then((res) => {
      localStorage.setItem("user-token", res.data);
      window.location.reload();
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded">Sign in</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Sign in</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription className="hidden" />
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton
              disabled={!form.formState.isValid}
              loading={form.formState.isSubmitting}
              className="w-full rounded"
              type="submit"
            >
              Submit
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
