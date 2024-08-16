import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";

interface Props extends ButtonProps {
  loading: boolean;
}

const LoadingButton = ({ loading, disabled, className, ...props }: Props) => {
  return (
    <Button className={className} disabled={loading || disabled} {...props}>
      {loading && <Loader2 className="mr-2 size-5 animate-spin" />}
      {props.children}
    </Button>
  );
};

export default LoadingButton;
