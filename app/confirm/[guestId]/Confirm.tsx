"use client";

import { Card } from "@/components/ui/card";
import useGetGuest from "@/hooks/useGetGuest";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useAddConfirmedGuest from "@/hooks/useAddInvited";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmPage() {
  const router = useRouter();

  const {
    formik,
    readyToRedirect,
    data: confirmData,
    guestId,
  } = useAddConfirmedGuest();

  useEffect(() => {
    if (readyToRedirect) {
      router.push(`/qrcode/${guestId}?token=${confirmData.qrCodeToken}`);
    }
  }, [readyToRedirect]);
  const { data } = useGetGuest();

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <Card className="text-center p-6 bg-card/80 font-description">
        <h1 className="text-xl font-bold text-black">Konfirmasi Kehadiran</h1>
        <p className="text-sm text-gray-500">
          *Notes: 1 Tiket hanya untuk maksimal 2 orang
        </p>
        <p className="text-sm text-gray-500">Atas nama: {data?.name}</p>

        <form className="mt-2" onSubmit={formik.handleSubmit}>
          <h1 className="text-start mb-2">Masukkan Jumlah Kehadiran</h1>
          <Tabs
            defaultValue="1"
            onValueChange={(value) =>
              formik.setFieldValue("confirmedGuests", value)
            }
            value={formik.values.confirmedGuests}
          >
            <TabsList className="w-full bg-neutral-100 p-1 rounded-lg">
              <TabsTrigger
                value="1"
                className="px-3 py-1.5 rounded-md transition-colors text-gray-600 hover:bg-red-400 hover:text-white
                   data-[state=active]:!bg-red-800 data-[state=active]:!text-white"
              >
                1
              </TabsTrigger>
              <TabsTrigger
                value="2"
                className="px-3 py-1.5 rounded-md transition-colors text-gray-600 hover:bg-red-400 hover:text-white
                   data-[state=active]:!bg-red-800 data-[state=active]:!text-white"
              >
                2
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <button
            // onClick={handleSubmit}
            className="mt-4 bg-primary text-white px-4 py-2 rounded w-full"
            type="submit"
          >
            Konfirmasi
          </button>
        </form>
      </Card>
    </div>
  );
}
