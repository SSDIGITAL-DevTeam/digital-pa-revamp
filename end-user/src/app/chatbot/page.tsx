import RobotSVG from "@/assets/services/svg/robot.svg";
import GradientRightSVG from "@/assets/services/svg/gradient-chatbot-01.svg";
import GradientLeftSVG from "@/assets/services/svg/gradient-chatbot-02.svg";
import Image from "next/image";
export default function ChatBot() {
  return (
    <main className="w-full min-h-screen flex justify-center items-start bg-white relative overflow-hidden">
      <div className="flex flex-col gap-4 items-center justify-center z-[10] mt-[50%] md:mt-28">
          <Image
            src={RobotSVG}
            alt="robot"
            width={400}
            height={400}
            className="w-[40vw] md:max-w-[300px] object-contain"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-center !leading-snug">Welcome to <span className="text-primary">DPA Leads <br />AI Chatbot</span> 👋</h1>
            <p className="trext-sm md:text-base text-center px-5">Start chatting with DPA AI Chatbot by clicking the button below</p>
            </div>
          <div>
            <Image src={GradientRightSVG} alt="" width={1920} height={1080} className="absolute top-0 -right-[50%] scale-[200%] md:top-[-100vh] md:-right-[56vw] opacity-80 -rotate-90"/>
          </div>
          <div>
            <Image src={GradientLeftSVG} alt="" width={1920} height={1080} className="absolute md:-bottom-[100vh] scale-[200%] bottom-0 -left-[40%] md:-left-[50vw]  opacity-80"/>
          </div>
    </main>
  )
}