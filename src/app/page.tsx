import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Book, BookDashed, BookText, CircleDot, Dot, Library, Rocket, Sparkles, UploadCloud } from "lucide-react";
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex justify-center align-middle items-center flex-col px-4 md:px-20 md:pt-4 w-full"> 
      <div className="flex gap-2 mt-20">
        <Badge variant={"outline"} className="flex gap-1"><span>AI Powered</span><Sparkles width={16}/></Badge>
        {/* <Badge variant={"outline"} className="flex gap-1"><span>Upload Photos</span><UploadCloud width={16}/></Badge> */}
      </div>
      <h1 className="flex mt-1 md:w-full lg:w-2/3 font-bold text-3xl sm:text-4xl md:text-6xl text-center"><span className="bg-gradient-to-r dark:from-blue-500 dark:via-purple-600 dark:to-red-500  from-blue-500 via-purple-600 to-red-500  text-transparent bg-clip-text p-2">The Art of Design, Perfected!</span></h1>
      <p className="flex mt-4 font-medium text-muted-foreground md:text-xl text-sm md:w-full lg:w-2/3 px-2 text-center">Vagency's designs are crafted to perfection, ensuring that every element is thoughtfully considered and flawlessly executed. </p>
      <div className="hidden mt-6 md:flex md:gap-4 gap-2"><Button size={"default"} className="flex gap-2"><span>Get Started</span><Sparkles size={22}/></Button><Button variant={"outline"} size={"default"} className="flex gap-2"><span>Documentation</span><BookText width={22}/></Button></div>
      <div className="hidden mt-6 max-md:flex md:gap-4 gap-2"><Button size={"sm"} className="flex gap-2"><span>Get Started</span><Sparkles size={22}/></Button><Button variant={"secondary"} size={"sm"} className="flex gap-2"><span>Docs</span><BookText width={22}/></Button></div>
      
      
      <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full sm:w-1/2 md:w-1/4 p-2">
        <img src="example1.png" alt="Image 1" className="w-full h-auto" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-2">
        <img src="example2.png" alt="Image 2" className="w-full h-auto" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-2">
        <img src="example3.png" alt="Image 3" className="w-full h-auto" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-2">
        <img src="example4.png" alt="Image 4" className="w-full h-auto" />
      </div>
    </div>
    <div className="backdrop-blur-lg mt-2 shadow-lg ">
        <Image src="/example.png" width={1400} height={400} alt="logo" className=" p-2 border rounded-sm"/>
      </div>
      
      
      <div>
        <h2 className="text-6xl mt-8 flex justify-center">Pricing Plans</h2>
        <p className="text-xl text-muted-foreground mt-4 flex justify-center">Our pricing plans are designed to be affordable,flexible, and tailored to your unique needs.</p>
        <div>
        <div className="flex mt-4 justify-center">
          <button className="py-2 px-4 bg-primary/80 rounded-sm font-semibold focus:outline-none">Monthly</button>
          <button className="py-2 px-4  font-semibold focus:outline-none">Yearly</button>
        </div>
        {/* --------------------- */}
      <div className="flex flex-row gap-8">
        <div className="flex mt-8">
          <div className="flex justify-center -mx-4">
          <div className="w-full md:w-full px-4 mb-8">
            <div className="bg-secondary rounded-lg shadow-md p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Basic</h3>
              <p className="text-muted-foreground mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-2xl font-semibold text-foreg mb-4">$9.99/mo</p>
              <Button className="w-full text-lg text-foreground font-medium">Choose Plan</Button>
            </div>
          </div>
          </div>
        </div>
        
        <div className="flex mt-8">
          <div className="flex justify-center -mx-4">
          <div className="w-full md:w-full px-4 mb-8">
            <div className="bg-secondary rounded-lg shadow-md p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Standard</h3>
              <p className="text-muted-foreground mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-2xl font-semibold text-foreg mb-4">$9.99/mo</p>
              
              <Button className="w-full text-lg text-foreground font-medium">Choose Plan</Button>
            </div>
          </div>
          </div>
        </div>

        <div className="flex mt-8">
          <div className="flex justify-center -mx-4">
          <div className="w-full md:w-full px-4 mb-8">
            <div className="bg-secondary rounded-lg shadow-md p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Premium</h3>
              <p className="text-muted-foreground mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-2xl font-semibold text-foreg mb-4">$9.99/mo</p>
              <Button className="w-full text-lg text-foreground font-medium">Choose Plan</Button>
            </div>
          </div>
          </div>
        </div>
        </div>

        </div>
      </div>
    </div>
  );
}
