import Image from "next/image"
import Github from "../../../../public/images/github.svg"
import Link from "next/link"

export default function Footer() {

    return(
        <footer className="max-w-full font-Inter mt-10 bg-black rounded-lg">
            <div className="flex justify-between items-end p-5">
                <p className="pb-1 lg:text-sm text-xs"> Created By Sean McKay</p>
                    <div className="flex justify-center gap-4">
                        <Link href={'/terms'} className=" lg:text-sm text-xs font-thin lg:font-normal hover:font-bold pb-1 text-center"> Terms and Conditions</Link>
                        <Link href={'/privacy'} className="lg:text-sm text-xs font-thin lg:font-normal hover:font-bold text-center"> Privacy Policy</Link>
                    </div>
                <div className="flex flex-col items-center justify-center pb-2">
                    <a href="https://github.com/smckay1031/OctaGroove" target="_blank">
                    <Image
                    src={Github}
                    alt="Github"
                    height={28}
                    width={28} />
                    </a>
                </div>
            </div>
        </footer>
    )
}