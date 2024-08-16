import { motion as m } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const PopupOnScroll = ({ className, children }: Props) => {
  return (
    <m.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default PopupOnScroll;
