import { architects_font } from "@/app/lib/fonts";

const Quote = () => {
    return (
        <section id="quote" className="flex flex-col h-96 bg-neutral text-accent">
            <p className={`${architects_font.className} sm:w-1/2 px-2 text-xl text-center m-auto`}>
                Bivens&apos;s Boutique is a concept store built solely for design. Although production-ready versions of this inventory exists for purchase, this store was built as a project for a web development portfolio and skill growth.
            </p>
        </section>
    );
}

export default Quote;