import SearchBar from "./searchBar";

export default function FlightIndex() {
  return (
    <div className="p-4 md:p-8 pt-36">
      <div className="h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-12">
        <SearchBar />
      </div>
    </div>
  );
}
