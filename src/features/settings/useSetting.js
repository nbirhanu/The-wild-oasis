import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export const useSettings = function () {
  const {
    data: settings,
    error,
    isLoading,
  } = useQuery({
    querykey: ["settings"],
    queryFn: getSettings,
  });
  return { settings, error, isLoading };
};
