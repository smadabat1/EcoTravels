import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function NewsLetter() {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between md:py-14">
        <div>
            <p className="font-bold text-2xl">Ready for a dose of </p>
            <p className="font-bold text-2xl">exclusive deals and news?</p>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row md:items-center gap-x-4">
            <Input className="rounded-xl h-12 md:w-96" placeholder="john.doe@email.com"/>
            <Button className="rounded-xl h-12 w-48">Subscribe</Button>
        </div>
    </div>
  )
}
