import Image from 'next/image'
import logo from "../../public/logo1.svg"
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="px-2 md:px-10 w-full h-[70px] flex justify-between align-middle items-center">
        <div className="flex justify-between align-middle items-center gap-2 h-[36px]">
            <Image src={logo} width={36} height={36} alt='logo'/>
            <h1 className="text-2xl font-bold">VAgency</h1>
        </div>
        <div className="hidden md:flex gap-2 ">
            <Link href="/"><Button variant={"ghost"}  className="font-medium text-md text-muted-foreground">Home</Button></Link>
            <Link href="/dashboard"><Button variant={"ghost"} className="font-medium text-md text-muted-foreground">Dashboard</Button></Link>
            <Button variant={"ghost"} className="font-medium text-md text-muted-foreground">Research</Button>
            <Button variant={"ghost"} className="font-medium text-md text-muted-foreground">About</Button>
            <Button variant={"ghost"} className="font-medium text-md text-muted-foreground">Contact</Button>
        </div>
        <div className="flex gap-2">
            <ModeToggle/>
            <div className="md:flex hidden">
            <Button variant={"secondary"}>Sign In</Button></div>
            <Button>Log In</Button>
        </div>
    </div>
  )
}

export default Navbar