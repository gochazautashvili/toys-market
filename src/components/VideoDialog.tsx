import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface Props {
  open: boolean;
  openChange: () => void;
}

const VideoDialog = ({ openChange, open }: Props) => {
  return (
    <Dialog open={open} onOpenChange={openChange}>
      <DialogContent className="h-[520px] w-[95%] max-w-[920px] gap-0 rounded-2xl p-0 outline-none">
        <DialogHeader className="hidden">
          <DialogTitle className="hidden" />
          <DialogDescription className="hidden" />
        </DialogHeader>
        <iframe
          className="h-full w-full"
          width="940"
          height="528"
          title="youtube video"
          src="https://www.youtube.com/embed/lnYZXAIWU8M"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
