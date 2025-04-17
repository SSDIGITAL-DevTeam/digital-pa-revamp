import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Header from "./Header";

type FAQ = {
    title: string;
    desc: string;
}
const faqValue: FAQ[] = [
    {
        title: "What is SEM?",
        desc: "SEM stands for Search Engine Marketing, which involves promoting websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising"
    },
    {
        title: "What is the difference between SEO and SEM?",
        desc: "SEO (Search Engine Optimization) focuses on optimizing websites to rank higher in organic (non-paid) search results, while SEM includes both organic optimization and paid strategies, such as pay-per-click (PPC) advertising."
    },
    {
        title: "How do you measure SEM results?",
        desc: "SEM results are measured using key performance indicators (KPIs) such as click-through rate (CTR), conversion rate, cost per click (CPC), return on ad spend (ROAS), and overall return on investment (ROI)."
    },
    {
        title: "Why is SEM Important?",
        desc: "SEM is important because it drives targeted traffic to websites, increases brand visibility, and provides measurable results. It allows businesses to reach potential customers actively searching for their products or services."
    },
    {
        title: "How do I start an SEM campaign?",
        desc: "To start an SEM campaign, define your goals, conduct keyword research, create compelling ad copy, set a budget, choose the right platform (e.g., Google Ads), and continuously monitor and optimize your campaigns based on performance data."
    },
    {
        title: "How do you choose the right SEM company?",
        desc: "Choose the right SEM company by evaluating their experience, transparency in reporting, and their ability to tailor strategies to your specific business needs and goals."
    },
]

export default function FAQ() {
    return (
        <div className="lg:max-w-5xl px-10 lg:px-0 flex flex-col justify-center items-center gap-8 lg:gap-16 lg:mx-auto">
            <Header title="Frequently Asked Questions"/>
            <Accordion type="single" collapsible className="w-full max-w-2xl">
                {
                    faqValue.map((d, i) => (
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
