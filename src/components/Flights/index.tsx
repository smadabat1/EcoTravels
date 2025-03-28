import SearchBar from "./searchBar";
import Tabbar from "./Tabbar";

export default function FlightIndex() {
  return (
    <div className="p-4 md:p-8 pt-4">
      <div className="h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-12">
        <Tabbar />
        <SearchBar />
      </div>
    </div>
  );
}
