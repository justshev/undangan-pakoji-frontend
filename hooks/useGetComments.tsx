import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useGetComments = () => {
  const getComment = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/guests/comments"
    );
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["comment"],
    queryFn: getComment,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetComments;
