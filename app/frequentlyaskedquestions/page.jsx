import FAQComponent from "../components/(faqs)/FAQComponent";
import Banner from "../components/(store)/Banner";
import { faqData } from "../database/faqData";

const page = () => {
    return (
        <div>
            <Banner
                props="Frequently Asked Questions"
            />

            <div className="py-10 w-2/3 m-auto">
                <div id="FAQQuestions">
                        <FAQComponent />
                    
                </div>
            </div>
        </div>
    );
}

export default page;