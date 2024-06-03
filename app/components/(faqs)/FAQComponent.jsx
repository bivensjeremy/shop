import { faqData } from "@/app/database/faqData";

const FAQComponent = () => {

    return (
        <div className="join join-vertical w-full shadow-lg bg-neutral text-accent">
            {faqData.map(({ question, answer, id }) => (
                <div key={id} className="collapse collapse-arrow join-item border">
                    <input type="radio" name="faqAccordion" defaultChecked /> 
                    <div className="collapse-title text-lg font-medium">
                        {question}
                    </div>
                    <div className="collapse-content"> 
                        <p>{answer}</p>
                    </div>
                </div>
            ))}
        </div>            

    );
}

export default FAQComponent;