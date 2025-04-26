import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Header from "./Header";
import { Faq } from "@/constants/our-services/faq";


export default function FAQ({value}: {value: Faq}) {
    return (
        <div className="lg:max-w-5xl px-10 lg:px-0 flex flex-col justify-center items-center gap-8 lg:gap-16 lg:mx-auto">
            <Header title="Frequently Asked Questions"/>
            <Accordion type="single" collapsible className="w-full max-w-2xl">
                {
                    value?.map((d, i) => (
                        <AccordionItem key={`FAQ-${i + 1}`}value={`items-${i + 1}`}>
                            <AccordionTrigger>
                                <h2 className="font-semibold text-base  transition-colors duration-300 flex  gap-2">
                                    <span className="text-primary hover:none">0{i + 1}</span>
                                    <span className="mr-3 hover:text-primary text-base lg:text-lg">{d.title}</span>
                                </h2>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="ml-8">{d.desc}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }

            </Accordion>
        </div>
    )
}
