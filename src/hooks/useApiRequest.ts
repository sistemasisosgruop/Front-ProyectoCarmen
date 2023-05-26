import type { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import axios from "axios";

interface ApiResponse {
  id: number;
  name: string;
  email: string;
}

export const useApiRequest = ({ url }: { url: string }) => {
  const [data, setData] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const requestApi = async (): Promise<AxiosResponse> => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
  }, [url]);

  return { data, isLoading };
};
