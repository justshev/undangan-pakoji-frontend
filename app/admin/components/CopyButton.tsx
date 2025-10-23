import { useState } from "react";

interface CopyButtonProps {
  link: string;
  idx: number;
  name: string;
}

const CopyButton = ({ link, name, idx }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyClick() {
    try {
      await navigator.clipboard.writeText(`Assalamu’alaikum, ${name} 🤍

Dengan penuh rasa syukur, kami bermaksud mengundang ${name} untuk hadir dan memberikan doa restu pada hari bahagia kami:

Hana & Rozi

🗓️ Sabtu, 8 November 2025
📍 Gedung Manterawu Telkom University, Bandung

Merupakan kebahagiaan besar bagi kami apabila ${name} berkenan hadir dalam acara kami.

Undangan lengkap dapat dilihat melalui tautan berikut:
👉 ${link}

Terima kasih atas doa dan perhatiannya 🌷

Wassalamu’alaikum Warahmatullahi Wabarakatuh.

Hormat kami,
Hana & Rozi`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1200);
    } catch (err) {
      const fallbackTextarea = document.createElement("textarea");
      fallbackTextarea.value = link;
      document.body.appendChild(fallbackTextarea);
      fallbackTextarea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1200);
      } catch (err2) {
        console.error("Copy failed:", err2);
        alert("Gagal menyalin ke clipboard");
      }
      document.body.removeChild(fallbackTextarea);
    }
  }

  return (
    <div className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={handleCopyClick}
        className={`px-4 py-2 rounded-md ${
          idx % 2 === 0 ? "bg-muted/50" : "bg-muted/30"
        } text-white focus:outline-none focus:ring-2 focus:ring-green-400`}
        aria-live="polite"
        aria-pressed={isCopied}
      >
        {isCopied ? "Tersalin ✓" : "Salin"}
      </button>
    </div>
  );
};

export default CopyButton;
