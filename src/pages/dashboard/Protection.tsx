import useUser from "@/data/useUser";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Protection = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();

  if (isLoading) return <Loader2 className="mx-auto my-10 animate-spin" />;

  return user?.role === "ADMIN" ? children : <Navigate to="/" replace />;
};

export default Protection;
