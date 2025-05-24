import RobotSVG from "@/assets/services/svg/robot.svg";
import GradientRightSVG from "@/assets/services/svg/gradient-chatbot-01.svg";
import GradientLeftSVG from "@/assets/services/svg/gradient-chatbot-02.svg";
import Image from "next/image";
import Script from "next/script";
export default function ChatBot() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-white relative overflow-hidden">
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="68319911619d7c547d1806bc"
        strategy="afterInteractive"
      />
      <div className="flex flex-col gap-4 items-center justify-center z-[10]">
        <Image
          src={RobotSVG}
          alt="robot"
          width={400}
          height={400}
          className="w-[40vw] max-w-[230px] object-contain wiggle"
        />
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-center !leading-snug">DPA Tuition Centre<br />
        <span className="text-primary">AI Chatbot Demo</span></h1>
      </div>
      <div>
        <Image src={GradientRightSVG} alt="" width={1920} height={1080} className="absolute top-0 -right-[50%] scale-[200%] lg:top-[-100vh] lg:-right-[56vw] opacity-80 -rotate-90" />
      </div>
      <div>
        <Image src={GradientLeftSVG} alt="" width={1920} height={1080} className="absolute lg:-bottom-[100vh] scale-[200%] bottom-0 -left-[40%] lg:-left-[50vw]  opacity-80" />
      </div>
    </main>
  )
}