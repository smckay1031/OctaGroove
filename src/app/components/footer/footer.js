import Image from "next/image";
import Github from "../../../../public/images/github.svg";
import Link from "next/link";
import { signIn, signOut } from "../../../auth";


export default async function Footer() {
  return (
    <footer className="max-w-full font-Inter pt-20 bg-[#00000092] rounded-xl ">
      <div className="flex flex-wrap justify-around lg:gap-8 gap-1 items-center px-2 xl:px-96 md:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          <div className="flex flex-col opacity-90">
            <h4 className="pb-4 lg:text-xl">Navigation</h4>
            <Link className="text-xs lg:text-base font-light hover:font-bold" href={'/'}>Home</Link>
            <Link className="text-xs lg:text-base font-light hover:font-bold" href={'/dashboard/range_short'}>Dashboard</Link>
            <Link className="text-xs lg:text-base font-light hover:font-bold" href={'/login'}>Login</Link>
          </div>
          <div className="flex flex-col opacity-90">
            <h4 className="pb-4 lg:text-xl">Auth</h4>
            <form action={ async ()=>{
                'use server'
                await signIn('spotify')
            }}>
                <button type="submit"className="text-xs lg:text-base font-light hover:font-bold">Sign In</button>
             </form>
             <form action={async ()=> {
                'use server'
                await signOut();
             }}>
                <button type="submit" className="text-xs lg:text-base font-light hover:font-bold">Sign Out</button>
             </form>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 rounded-2xl lg:p-10 opacity-90">
          <h4 className="text-2xl font-bold p-5 w-full text-center">
            Contact Us
          </h4>
          <form
            action={"https://formsubmit.co/octagroove.contact@gmail.com"}
            method="POST"
            className="flex flex-col justify-center items-center gap-2 p-2 w-full"
          >
            <div className="flex flex-col gap-2 flex-wrap px-2 w-full">
              <label className="text-sm">Name:</label>
              <input
                type="text"
                name="name"
                required
                className="rounded-xl text-black text-sm bg-[#ffffffe5] p-1 sm:flex-grow"
              />
              <label className="text-sm">Email:</label>
              <input
                type="email"
                name="email"
                required
                className="rounded-xl text-black text-sm bg-[#ffffffe5] p-1 sm:flex-grow"
              />
            </div>
            <label className="text-sm w-full">Comment/Questions:</label>
            <textarea
              name="message"
              rows={"5"}
              className="rounded-xl text-black text-sm bg-[#ffffffe5] p-1 flex-grow w-full"
            />
            <button
              type="submit"
              className="bg-[#1ac336] p-2 rounded-2xl md:w-24 2-14 text-xs md:text-sm text-black font-semibold border border-[#ffffff63] hover:scale-110 duration-300"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 px-5">
        <p className="pb-1 lg:text-sm text-xs"> Created By Sean McKay</p>
        <div className="flex justify-center gap-4">
          <Link
            href={"/terms"}
            className=" lg:text-sm text-xs font-thin lg:font-normal hover:font-bold pb-1 text-center"
          >
            {" "}
            Terms and Conditions
          </Link>
          <Link
            href={"/privacy"}
            className="lg:text-sm text-xs font-thin lg:font-normal hover:font-bold text-center"
          >
            {" "}
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center pb-2">
          <a href="https://github.com/smckay1031/OctaGroove" target="_blank">
            <Image src={Github} alt="Github" height={28} width={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
