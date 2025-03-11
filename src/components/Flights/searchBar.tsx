import { cn } from "@/lib/utils";
import SearchInput from "./searchInput";
import { useSearchBarStore } from "@/lib/store";

export default function SearchBar() {
  const mode = useSearchBarStore((state) => state.mode);
  const setMode = useSearchBarStore((state) => state.setMode);
  
  return (
    <div className="bg-card shadow-xl rounded-xl p-4 md:min-h-48 w-full flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-4">
            <div className={cn("px-4 py-2 rounded-full border-2 transition-all duration-200 ease-in-out cursor-pointer", mode === "oneway" ? "border-primary": "")} onClick={() => setMode("oneway")}>
                <p>One Way</p>
            </div>
            <div className={cn("px-4 py-2 rounded-full border-2 transition-all duration-200 ease-in-out cursor-pointer", mode === "roundtrip" ? "border-primary": "")} onClick={() => setMode("roundtrip")}>
                <p>Round Trip</p>
            </div>
        </div>
        <SearchInput />
    </div>
  )
}
