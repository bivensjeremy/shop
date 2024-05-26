'use client'
import { faqData } from "@/app/data/faqData";
import {Accordion, AccordionItem} from "@nextui-org/react";

const FAQComponent = () => {

    return (
        <Accordion variant="shadow">
            {faqData.map(({ question, answer, id }) => (
                <AccordionItem key={id} aria-label={question} title={question}>
                    {answer}
                </AccordionItem>
            ))}
        
        </Accordion>
    );
}

export default FAQComponent;