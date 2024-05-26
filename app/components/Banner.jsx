import { badScript_font, parisienne_font } from "@/app/lib/fonts";
import Tagline from "./Tagline";
import { Card, CardHeader } from "@nextui-org/react";
import Transition from "../lib/Transition";

const Banner = ({ title }) => {
    const bannerTitle = (title === undefined) ? 'Shop Our Collection' : title

    return (
        <Card className="bg-secondary h-60" radius="none">
            <CardHeader className="absolute flex-col m-auto h-full flex justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <Tagline text={bannerTitle} />
            </CardHeader>

            <Transition durationTime={0.9}>
                <p className={`${parisienne_font.className} text-[15rem] text-foreground/50 text-nowrap flex-col text-center m-auto h-full flex justify-center`}>
                            {bannerTitle}
                        </p>
            </Transition>
            
        </Card>
    );
}

export default Banner;