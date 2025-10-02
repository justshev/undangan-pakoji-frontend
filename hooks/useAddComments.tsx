import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef } from "react";

const useAddComments = () => {
  const queryClient = useQueryClient();

  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const storeData = async (e: React.FormEvent) => {
    e.preventDefault();

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const name = nameRef.current?.value;
    const message = messageRef.current?.value;
    const response = await axios.post(`${BACKEND_URL}/api/comment`, {
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
      queryClient.invalidateQueries({ queryKey: ["comments"] });
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
