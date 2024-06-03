import FAQComponent from "../components/(faqs)/FAQComponent";
import Banner from "../components/(store)/Banner";
import { faqData } from "../database/faqData";

const page = () => {
    return (
        <div id="FAQQuestions">
            <FAQComponent />
        </div>
    );
}

export default page;