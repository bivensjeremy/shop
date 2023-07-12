import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FAQComponent = ({ id, question, answer }) => {
    return (
        <div className="border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white">
            <h2 id={`header${id}`}>
                <button className="group relative flex w-full items-center  bg-white p-5 py-4 text-left  text-[#3C486B] transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-[#f45050] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target={`#flush-collapse${id}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${id}`}>
                        {question}
                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
                        <ChevronDownIcon />
                    </span>
                </button>
            </h2>

            <div
                id={`flush-collapse${id}`}
                className="!visible hidden border-0"
                data-te-collapse-item
                aria-labelledby={`header${id}`}
                data-te-parent="#FAQQuestions">
                <div className="px-7 py-4 text-[#3C486B]">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default FAQComponent;