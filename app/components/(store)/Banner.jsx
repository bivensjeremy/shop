import { badScript_font } from "@/app/lib/fonts";
import Video from "../(homepage)/Video";

const Banner = ({ props }) => {
    var header = (props === undefined) ? 'Shop Our Collection' : props

    return (
        <div className="h-96 bg-[#F0F0F0]">
            <div className="flex flex-col justify-center text-center container m-auto h-full relative">
                <div >
                    <h1 className={`${badScript_font.className} text-6xl justify-center my-5 text-[#3C486B]`}>
                        { header }
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Banner;