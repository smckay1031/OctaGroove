import Image from "next/image"
import Github from "../../../../public/images/github.svg"
import Link from "next/link"

export default function Footer() {

    return(
        <footer className="max-w-full font-Inter mt-10 bg-black rounded-lg">
            <div className="flex justify-between items-end p-5 gap-1">
                <p className="pb-1 lg:text-base text-xs"> Created By Sean McKay</p>
                <div className="flex flex-col items-center justify-center pb-4 px-1">
                    <p className="lg:text-lg text-sm font-semibold py-4">Navigation</p>
                        <Link href={'/'} className="lg:text-sm text-xs hover:font-bold">Home</Link>
                        <Link href={'/dashboard/range_short'} className="lg:text-sm text-xs hover:font-bold">Dashboard</Link>
                </div>
                <div className="flex flex-col items-center justify-center pb-4 px-1">
                    <p className="md:text-lg text-sm font-semibold py-4">Legal</p>
                        <Link href={'/terms'} className="lg:text-sm text-xs hover:font-bold"> Terms and Conditions</Link>
                        <Link href={'/privacy'} className="lg:text-sm text-xs hover:font-bold"> Privacy Policy</Link>
                </div>
                <div className="flex flex-col items-center justify-center pb-2">
                    <a href="https://github.com/smckay1031/OctaGroove" target="_blank">
                    <Image
                    src={Github}
                    alt="Github"
                    height={36}
                    width={36} />
                    </a>
                </div>
            </div>
        </footer>
    )
}