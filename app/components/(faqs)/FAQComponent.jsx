'use client'

import { faqData } from "@/app/database/faqData";
import { Accordion } from "flowbite-react";

const FAQComponent = () => {

    return (
        <Accordion collapseAll>
            {faqData.map((data) => (
                <Accordion.Panel key={data.id}>
                    <Accordion.Title className="bg-[#F0F0F0]  focus:text-[#d6bb3f]">
                        {data.question}
                    </Accordion.Title>

                    <Accordion.Content className="">
                        {data.answer}
                    </Accordion.Content>
                </Accordion.Panel>
            ))}
        </Accordion>
    );
}

export default FAQComponent;