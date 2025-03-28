export default function Tabbar() {
  return (
    <div className="flex flex-row gap-4">
        <div className="rounded-md border-2 p-4 select-none cursor-pointer">
            <p>Flights</p>
        </div>
        <div className="rounded-md border-2 p-4 select-none cursor-pointer">
            <p>Hotels</p>
        </div>
        <div className="rounded-md border-2 p-4 select-none cursor-pointer">
            <p>Holidays</p>
        </div>
        <div className="rounded-md border-2 p-4 select-none cursor-pointer">
            <p>Visa</p>
        </div>
        <div className="rounded-md border-2 p-4 select-none cursor-pointer">
            <p>Cabs</p>
        </div>
    </div>
  )
}
