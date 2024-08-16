import { motion as m } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

const Popup = ({ className, children }: Props) => {
  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 250,
        delay: 1,
        damping: 50,
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default Popup;
