import Image from "next/image"
import Github from "../../../../public/images/github.svg"

export default function Footer() {

    return(
        <footer className="w-full mt-5 font-Inter relative">
            <div className="flex justify-between px-5 py-2">
                <p className=""> Created By Sean McKay</p>
                <div className="flex flex-col items-center justify-center">
                    <p>Socials</p>
                    <a href="">
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