import { useToast } from "@/components/ui/use-toast";
import API from "@/lib/api";
import { Loader2, X } from "lucide-react";
import { useState } from "react";

interface Props {
  onImageDelete: () => void;
  imageId: string;
}

const DeleteButton = ({ imageId, onImageDelete }: Props) => {
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const deleteUploadedImage = () => {
    setIsPending(true);

    API.delete(`/toys/admin/delete-uploaded-image/${imageId}`)
      .then(() => {
        onImageDelete();
      })
      .catch(() => {
        toast({
          variant: "destructive",
          description: "Something went wrong try again!",
        });
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return (
    <>
      {!isPending ? (
        <X
          onClick={deleteUploadedImage}
          className="absolute right-2 top-2 z-10 cursor-pointer stroke-black"
        />
      ) : (
        <Loader2 className="absolute right-2 top-2 z-10 animate-spin cursor-pointer" />
      )}
    </>
  );
};

export default DeleteButton;
