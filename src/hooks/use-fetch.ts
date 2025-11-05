import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setResponse(response.data);
      setIsLoading(false);
    }
    fetch();
  }, []);

  return {
    response,
    isLoading,
  };
}
