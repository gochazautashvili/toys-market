import { IKContext, IKUpload } from "imagekitio-react";
import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import DeleteButton from "./DeleteButton";

interface Props {
  handleSetImage: (image: string, imageId: string) => void;
  initialImage: string | undefined;
  initialImageId: string | undefined;
}

const ImageUpload = ({
  handleSetImage,
  initialImage,
  initialImageId,
}: Props) => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [progress, setProgress] = useState<number>();
  const [disabled, setDisabled] = useState<boolean>();
  const [image, setImage] = useState<string>(initialImage || "");
  const [imageId, setImageId] = useState<string>(initialImageId || "");
  const { toast } = useToast();

  const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
  const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;

  const authenticator = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/toys/admin/upload-image-auth",
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`,
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  const onError = () => {
    toast({
      variant: "destructive",
      description: "Something went wrong try again!",
    });
  };

  const onSuccess = (res: any) => {
    setDisabled(false);
    setProgress(undefined);
    setImage(res.url);
    setImageId(res.fileId);

    handleSetImage(res.url, res.fileId);

    toast({
      description: "Image uploaded successfully :)",
    });
  };

  const onUploadProgress = (progress: any) => {
    setProgress(progress.loaded);
  };

  const onUploadStart = () => {
    setDisabled(true);
    setImage("");
  };

  const onImageDelete = () => {
    setImage("");
    setImageId("");
  };

  return (
    <div className="relative h-[170px] w-full">
      {image && (
        <DeleteButton imageId={imageId} onImageDelete={onImageDelete} />
      )}
      <Button
        disabled={disabled || !!image}
        onClick={() => imageRef.current?.click()}
        className="h-full w-full cursor-default rounded border-2 border-dashed border-primary bg-transparent p-0 transition hover:border-dotted hover:bg-transparent disabled:opacity-80"
        type="button"
      >
        <IKContext
          publicKey={publicKey}
          urlEndpoint={urlEndpoint}
          authenticator={authenticator}
        >
          <IKUpload
            fileName="toy-store.png"
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUploadProgress}
            onUploadStart={onUploadStart}
            useUniqueFileName={true}
            className="hidden"
            ref={imageRef}
          />
        </IKContext>
        {!progress && image && (
          <img
            src={image}
            alt="uploaded image"
            className="h-full w-full rounded bg-black/40 object-contain"
            loading="eager"
          />
        )}
        {!progress && !image && (
          <Upload className="size-full stroke-slate-500 p-5" />
        )}
        {progress && !image && (
          <span className="text-center text-3xl font-semibold text-black">
            {progress} KB
          </span>
        )}
      </Button>
    </div>
  );
};

export default ImageUpload;
