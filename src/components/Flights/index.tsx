import SearchBar from "./searchBar";

export default function FlightIndex() {
  return (
    <div className="p-4 md:p-8 pt-4">
      <div className="h-[calc(100vh-6rem)] pt-4 md:pt-24">
        <SearchBar />
      </div>
    </div>
  );
}
