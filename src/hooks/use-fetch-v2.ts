import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchV2() {
  return useQuery({
    queryKey: ["get-users"],
    queryFn: () => axios.get("http://localhost:5173/issues")
  });
}
