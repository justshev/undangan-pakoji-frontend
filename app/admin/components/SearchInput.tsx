"use client";

import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (nextValue: string) => void;
  placeholder?: string;
};

const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => onChange("");

  return (
    <div className="w-full md:w-[360px] flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={value}
          onChange={handleChange}
          placeholder={placeholder ?? "Cari..."}
          className="pl-9"
        />
      </div>
      {value ? (
        <Button variant="outline" onClick={handleClear}>
          Clear
        </Button>
      ) : null}
    </div>
  );
};

export default SearchInput;
