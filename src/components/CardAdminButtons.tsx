import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Delete, Plus } from "lucide-react";
import LoadingButton from "./LoadingButton";
import useUser from "@/data/useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/lib/api";

interface Props {
  toyId: string;
  toySlug: string;
}

const CardAdminButtons = ({ toyId, toySlug }: Props) => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const params = useParams();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => API.delete(`/toys/admin/delete/${toyId}`),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["toys", "all"] });

      if (params.slug === toySlug) {
        navigate("/dashboard");
      }
    },
  });

  return (
    <>
      {user?.role === "ADMIN" && (
        <div className="flex w-full items-center justify-between px-4 pt-3">
          <Button className="rounded" size="icon" asChild>
            <Link to={`/dashboard/update-toy/${toySlug}`}>
              <Plus />
            </Link>
          </Button>
          <LoadingButton
            onClick={() => mutation.mutate()}
            loading={mutation.isPending}
            className="relative rounded bg-red-500"
            size="icon"
          >
            <Delete />
          </LoadingButton>
        </div>
      )}
    </>
  );
};

export default CardAdminButtons;
