import Footer from "./footer";
import Main from "./main";
import NewsLetter from "./newsLetter";
import { Separator } from "@/components/ui/separator"


export default function FooterIndex() {
  return (
    <div className="p-8 px-24">
        <NewsLetter />
        <Separator />
        <Main />
        <Separator />
        <Footer />
    </div>
  )
}
