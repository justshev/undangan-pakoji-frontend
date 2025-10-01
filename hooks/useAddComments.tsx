import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef } from "react";

const useAddComments = () => {
  const queryClient = useQueryClient();

  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const storeData = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const message = messageRef.current?.value;

    const response = await axios.post("http://localhost:3001/api/comment", {
      name,
      message,
    });

    if (name?.trim() === "" || message?.trim() === "") {
      return alert("Nama atau pesan tidak bisa kosong!");
    }

    if (!response) {
      return alert("Gagal menambahkan pesan");
    }

    return response.data;
  };

  const { data, isPending } = useMutation({
    mutationFn: storeData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
  });

  return {
    nameRef,
    messageRef,
    data,
    isPending,
    storeData,
  };
};

export default useAddComments;
