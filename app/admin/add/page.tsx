"use client";

import useAddGuest from "@/hooks/useAddGuest";

export default function AddGuestPage() {
  const { formik, isPending } = useAddGuest();

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Tambah Guest Baru</h1>
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={formik.values.name}
          name="name"
          onChange={formik.handleChange}
          required
          className="w-full border p-2"
        />

        <input
          type="number"
          min={1}
          name="totalInvited"
          placeholder="Total Undangan"
          value={formik.values.totalInvited}
          onChange={formik.handleChange}
          required
          className="w-full border p-2"
        />
        <button
          type="submit"
          disabled={isPending}
          className={`w-full bg-blue-600 ${isPending && 'opacity-70'} text-white py-2 rounded`}
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
