import { useFetch } from "./hooks/use-fetch";
import { useFetchV2 } from "./hooks/use-fetch-v2";

export default function About() {
  // const { response, isLoading } = useFetch();

  const { data, isLoading, isError } = useFetchV2();

  console.log("response", data);

  if (isLoading) return <h1>Loading, please wait...</h1>;

  // if (isError) return <h1 className="text-red-500">Something went wrong!</h1>

  return <h1>About</h1>;
}
