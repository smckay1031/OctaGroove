import Image from "next/image"
import Github from "../../../../public/images/github.svg"
import Link from "next/link"

export default function Footer() {

    return(
        <footer className="max-w-full font-Inter mt-10 bg-black rounded-lg">
            <div className="flex justify-between items-end p-5">
                <p className="pb-1"> Created By Sean McKay</p>
                <div className="flex flex-col items-center justify-center pb-4">
                    <p className="text-lg font-semibold py-4">Navigation</p>
                        <Link href={'/'} className="text-sm hover:font-bold">Home</Link>
                        <Link href={'/dashboard/range_short'} className="text-sm hover:font-bold">Dashboard</Link>
                </div>
                <div className="flex flex-col items-center justify-center pb-4">
                    <p className="text-lg font-semibold py-4">Legal</p>
                        <Link href={'/terms'} className="text-sm hover:font-bold"> Terms and Conditions</Link>
                        <Link href={'/privacy'} className="text-sm hover:font-bold"> Privacy Policy</Link>
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