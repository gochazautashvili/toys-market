export interface ToyDataType {
  id: string;
  name: string;
  image: string;
  imageId: string;
  description: string;
  price: number;

  width: string;
  height: string;
  length: string;
  weight: string;
  type: "WOODEN" | "STUFFED";
  slug: string;
}

export interface UserType {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
}

export interface CartType {
  id: string;
  quantity: number;
  toyId: string;
  userId: string;
  toy: ToyDataType;
}
