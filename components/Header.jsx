import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Rocío<span className="text-accent">.</span></h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8"></div>
            <Nav/>
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
            </div>
            <div className="xl:hideen">
              <MobileNav />
            </div>
        </header>
  )
}

export default Header