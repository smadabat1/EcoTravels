import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function NewsLetter() {
  return (
    <div className="flex flex-row items-center justify-between py-14">
        <div>
            <p className="font-bold text-2xl">Ready for a dose of </p>
            <p className="font-bold text-2xl">exclusive deals and news?</p>
        </div>
        <div className="flex flex-row items-center gap-x-4">
            <Input className="rounded-xl h-12 w-96" placeholder="john.doe@email.com"/>
            <Button className="rounded-xl h-12 w-48">Subscribe</Button>
        </div>
    </div>
  )
}
