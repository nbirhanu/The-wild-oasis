import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";
export const useUpdateSetting = function () {
  const queryClint = useQueryClient();
  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("settings successfully updated");
      queryClint.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateSettings, isUpdating };
};
