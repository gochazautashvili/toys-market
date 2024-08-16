import { z } from "zod";

const required = z.string().min(1);

export const ToySchema = z.object({
  name: required,
  image: required,
  imageId: required,
  description: required,
  price: z.number().min(1),

  width: required,
  height: required,
  length: required,
  weight: required,

  type: z.enum(["WOODEN", "STUFFED"]),
  slug: required,
});

export type ToyValuesType = z.infer<typeof ToySchema>;
