import { useState } from "react";

interface CopyButtonProps {
  link: string;
  idx: number;
}

const CopyButton = ({ link, idx }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyClick() {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1200);
    } catch (err) {
      // fallback untuk browser lama
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
