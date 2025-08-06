import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useAxios(token = null) {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  return axiosInstance;
}

const useFetchDataWithToken = (url, token = null) => {
  const axiosInstance = useAxios(token);

  const fetchData = async () => {
    const response = await axiosInstance.get(url);
    return response.data;
  };

  const { data, error, isError, isPending } = useQuery({
    queryKey: [url],
    queryFn: fetchData,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  return { data, error, isError, isPending };
};

export default useFetchDataWithToken;
