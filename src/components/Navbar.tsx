import Image from 'next/image'
import logo from "../../public/logo1.svg"
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <div className=" px-10 w-full h-[70px] flex justify-between align-middle items-center">
        <div className="flex justify-between align-middle items-center gap-2 h-[36px]">
            <Image src={logo} width={36} height={36} alt='logo'/>
            <h1 className="text-2xl font-bold">VAgency</h1>
        </div>
        <div className="flex gap-2 ">
            <Button variant={"ghost"}  className="font-medium text-md text-muted-foreground">Home</Button>
            <Button variant={"ghost"} className="font-medium text-md text-muted-foreground">About</Button>
            <Button variant={"ghost"} className="font-medium text-md text-muted-foreground">News</Button>
            <Button variant={"ghost"} className="font-medium text-md text-muted-foreground">Careers</Button>
            <Button variant={"ghost"} className="font-medium text-md text-muted-foreground">Contact</Button>
        </div>
        <div className="flex gap-2">
            <ModeToggle/>
            <Button variant={"secondary"}>Sign In</Button>
            <Button>Log In</Button>
        </div>
    </div>
  )
}

export default Navbar