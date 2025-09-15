import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { JSX } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="relative w-64">
      <Input
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
      />
      <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500" />
    </div>
  );

