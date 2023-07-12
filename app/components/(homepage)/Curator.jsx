import Image from "next/image"
import { chonburi_font } from "@/app/lib/fonts"
import JeremyProfile from "../../../public/IMG_6248.jpg"
import NavLink from "../NavLink";

const Curator = () => {
    return (
        <section id="Curator">
            <div className="flex flex-col lg:flex-row gap-5 h-screen w-3/4 mx-auto">
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center">
                    <h2 className={`${chonburi_font.className} text-4xl pb-5`}>
                        The Curator
                    </h2>

                        <p className=' text-lg pb-5'>
                            One part designer. One part collector. One part <span className="italic">visionary</span>. With a taste for urban clothing and a desire to produce a worthy product, Bivens is more than a retailor, he has carefully procured and maintained a unique collection of clothing to represent the fashion of an era. Each item was handpicked. As such, no duplicates are available and each item is the only available.
                        </p>

                    <div>
                        <NavLink href="https://bivensblueprint.com/aboutbivens" className="btnCSS">
                            More About Bivens
                        </NavLink>
                    </div>
                    
                        
                </div>

                <div className="flex w-full lg:w-1/2 h-screen relative">
                    <Image
                        src={JeremyProfile}
                        alt="Jeremy Image"
                        fill
                        priority
                        sizes='50vw'
                        className="object-contain py-0 lg:py-10"
                    />
                </div>
            </div>
        </section>
    );
}

export default Curator;