import Image from "next/image"
import { chonburi_font } from "@/app/lib/fonts"
import JeremyProfile from "../../../public/IMG_6248.jpg"
import Link from "next/link";

const Curator = () => {
    return (
        <section id="Curator" className="bg-accent text-neutral py-12">
            <div className="flex flex-col sm:flex-row gap-5 sm:w-3/4 mx-auto">
                <div className="w-full sm:w-1/2 flex flex-col justify-center text-center md:px-14 px-3">
                    <h2 className={`${chonburi_font.className} text-4xl pb-5`}>
                        The Curator
                    </h2>

                    <p className='text-sm md:text-lg pb-5 text-justify'>
                        One part designer. One part collector. One part <span className="italic">visionary</span>. With a taste for urban clothing and a desire to produce a worthy product, Bivens is more than a retailor, he has carefully procured and maintained a unique collection of clothing to represent the fashion of an era. Each item was handpicked. As such, no duplicates are available and each item is the only available.
                    </p>

                    <div>
                        <Link
                            role="button"
                            className="btn btn-primary"
                            rel="noreferrer noopener" 
                            target="_blank"
                            href="https://blueprintwebdev.com/aboutbivens"
                        >
                            More About Bivens
                        </Link>
                    </div>
                </div>
                
                <div className="order-first sm:order-none flex w-full h-96 sm:h-auto sm:w-1/2 relative bg-black rounded-lg">
                    <Image
                        src={JeremyProfile}
                        alt="Jeremy Image"
                        fill
                        priority
                        sizes='(max-width: 640px) 100vw, 50vw'
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default Curator;