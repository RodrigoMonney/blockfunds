import ActionButton from "@/components/ActionButton";
import Image from "next/image";

export default function MarketsSection() {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-primary-black text-block-funds-white py-16 px-4">
            <h1 className="text-xl font-medium leading-[22px] font-hubot-sans mb-6">Mercados <span className="font-bold">além das Fronteiras</span> à sua disposição</h1>
            <p className="text-center font-fira-sans text-block-funds-white-sub font-normal self-stretch">Nossa empresa está presente no Brasil, Canadá, Estados Unidos, Alemanha, Suiça e China</p>
            <div className="my-[52px] relative">
                <Image className="md:min-w-[620px]" src={'/images/bg-market-map.svg'} width={328} height={174} alt="Block Funds." />
                <img className="absolute w-[32px] h-[32px] right-[58px] top-[59px] md:w-[96px] md:h-[96px] md:right-[70px] md:top-[66px]" src="/images/icon-circle-glow.svg" />
                <img className="absolute w-[32px] h-[32px] right-[125px] top-[36px] md:w-[96px] md:h-[96px] md:right-[227px] md:top-[56px]" src="/images/icon-circle-glow.svg" />
                <img className="absolute w-[32px] h-[32px] left-[47px] top-[37px] md:w-[96px] md:h-[96px] md:left-[48px] md:top-[30px]" src="/images/icon-circle-glow.svg" />
                <img className="absolute w-[32px] h-[32px] left-[52px] top-[57px] md:w-[96px] md:h-[96px] md:left-[58px] md:top-[68px]" src="/images/icon-circle-glow.svg" />
                <img className="absolute w-[32px] h-[32px] left-[97px] bottom-[37px] md:w-[96px] md:h-[96px] md:left-[168px] md:bottom-[50px]" src="/images/icon-circle-glow.svg" />
                <img className="absolute w-[32px] h-[32px] left-[97px] bottom-[37px] md:w-[96px] md:h-[96px] md:left-[330px] md:top-[27px]" src="/images/icon-circle-glow.svg" />

            </div>
            <div>
                <ActionButton classProps="button-primary mt-0" text="Abra sua conta agora" />
            </div>
        </div>
    )
}
