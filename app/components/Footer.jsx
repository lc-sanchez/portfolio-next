import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="font-mono 
         my-8 py-8 flex flex-col">
            <div className=" flex flex-col items-center py-4">
                <span className="md:text-xl py-3 font-bold " id="contactame">
                    Contactame
                </span>
                    <div className="socials flex flex-row gap-4">
                        <Link className="hover:scale-125 "
                        href="https://github.com/lc-sanchez">
                            <Image src={GithubIcon} alt="Github Icon"/>
                        </Link>
                        <Link className="hover:scale-125"
                        href="https://www.linkedin.com/in/camilasanchez-/">
                            <Image src={LinkedinIcon} alt="LinkedIn Icon"/>
                        </Link>
                    </div>
                </div>
                <span className="border-t z-10 border-t-[#33353F]
                mt-10
                py-6 flex justify-center text-[#ADB7BE]">
                ✨✦ Gracias por la visita! ✦✨
                </span>
        </footer>
    )
}