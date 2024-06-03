import { oswald_font } from "../lib/fonts";

const Tagline = ({text}) => {
    return (
        <div className=''>
                <h4 className={`${oswald_font.className} text-neutral text-5xl font-bold uppercase text-center`}>
                    {text}
                </h4>
            </div>
    );
}

export default Tagline;