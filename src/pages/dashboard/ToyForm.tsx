import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToySchema, ToyValuesType } from "./validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "./ImageUpload";
import API from "@/lib/api";
import LoadingButton from "@/components/LoadingButton";
import { ToyDataType } from "@/types";

interface Props {
  toy?: ToyDataType;
}

const ToyForm = ({ toy }: Props) => {
  const form = useForm<ToyValuesType>({
    resolver: zodResolver(ToySchema),
    defaultValues: toy || {
      imageId: "",
      description: "",
      height: "",
      image: "",
      length: "",
      width: "",
      weight: "",
      name: "",
      price: 1,
      slug: "",
      type: undefined,
    },
  });

  const handleSetImage = (image: string, imageId: string) => {
    form.setValue("image", image);
    form.setValue("imageId", imageId);
  };

  const onSubmit = async (values: ToyValuesType) => {
    if (toy) {
      await API.patch(`/toys/admin/update/${toy.id}`, values);
    } else {
      await API.post("/toys/admin/create", values);
    }

    window.location.reload();
  };

  return (
    <Form {...form}>
      <form
        className="my-10 flex flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h1 className="mb-6 text-center text-3xl font-semibold">
          {toy ? "Update Toy" : "Create Toy"}
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Toy name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter toy name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Toy description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter toy description"
                      className="max-h-[180px]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toy width</FormLabel>
                    <FormControl>
                      <Input placeholder="38 in ..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toy height</FormLabel>
                    <FormControl>
                      <Input placeholder="32 in ..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toy length</FormLabel>
                    <FormControl>
                      <Input placeholder="22 in ..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toy weight</FormLabel>
                    <FormControl>
                      <Input placeholder="24 oz ..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Toy image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      initialImage={toy?.image}
                      initialImageId={toy?.imageId}
                      handleSetImage={handleSetImage}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toy price</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter toy price"
                        type="number"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toy slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter toy slug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a toy type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="WOODEN">Wooden</SelectItem>
                      <SelectItem value="STUFFED">Stuffed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <LoadingButton
          loading={form.formState.isSubmitting}
          disabled={!form.formState.isValid}
          className="ml-auto mt-5 w-full rounded text-base font-semibold lg:w-[200px]"
          type="submit"
        >
          Submit
        </LoadingButton>
      </form>
    </Form>
  );
};

export default ToyForm;
