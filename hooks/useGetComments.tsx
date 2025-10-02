import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useGetComments = () => {
  const getComment = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/comments"
    );
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["comments"],
    queryFn: getComment,
    
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetComments;
