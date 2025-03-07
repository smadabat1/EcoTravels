import plane4 from "@/assets/plane4.png";

export default function Main() {
  return (
    <div className="flex flex-row py-14 justify-between items-center">
        <div className="flex flex-col gap-y-4">
            <img src={plane4} className="h-12 w-12"/>
            <p className="font-bold text-2xl">Eco Travels</p>
            <div className="flex flex-col gap-y-1">
                <p className="font-light text-sm">Discover new horizons</p>
                <p className="font-light text-sm">with our personalized travel planning!</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-y-4">
                <p className="font-bold">Quick Links</p>
                <div className="flex flex-col gap-y-2">
                    <p className="font-light text-sm cursor-pointer">Home</p>
                    <p className="font-light text-sm cursor-pointer">About us</p>
                    <p className="font-light text-sm cursor-pointer">Tours & Packages</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <p className="font-bold">Company</p>
                <div className="flex flex-col gap-y-2">
                    <p className="font-light text-sm cursor-pointer">Blog</p>
                    <p className="font-light text-sm cursor-pointer">News</p>
                    <p className="font-light text-sm cursor-pointer">Contact Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}
