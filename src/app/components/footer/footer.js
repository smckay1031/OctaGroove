import Image from "next/image"
import Github from "../../../../public/images/github.svg"

export default function Footer() {

    return(
        <footer className="w-full font-Inter">
            <div className="flex justify-between items-end px-5">
                <p className=""> Created By Sean McKay</p>
                <div className="flex flex-col items-center justify-center pb-2">
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