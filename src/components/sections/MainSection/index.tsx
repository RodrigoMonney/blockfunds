import Image from "next/image";
import ActionButton from "@/components/ActionButton";

export default function MainSection() {
    return (
        <div className="bg-block-funds-background lg:bg-lg-block-funds-background bg-no-repeat bg-cover h-[776px] relative lg:max-h-[937px] lg:min-h-[873px] lg:grid lg:grid-cols-12 xl:pl-[160px]">

            <div className="lg:col-span-5 px-4 py-6 h-[390px] lg:py-0 lg:flex lg:items-start lg:justify-center lg:h-full lg:flex-col lg:p-0">

                <h1 className="lg:text-left lg:text-[54px] text-[28px] leading-block-funds-line-height-sub text-block-funds-white text-center font-bold lg:leading-[56px]">Explore a Vanguarda das Finanças</h1>
                <p className="lg:text-left lg:text-base mt-4 lg:mt-5 text-center text-sm leading-4 text-block-funds-white-sub">Descubra estratégias avançadas de investimento, um crescimento financeiro acelerado em um ambiente descentralizado e transparente.</p>

                <div className="lg:justify-start flex justify-center mt-[28px] lg:mb-24 lg:mt-9">
                    <ActionButton classProps="button-primary w-[200px]" text="Abra sua conta agora" />
                </div>

                <div className="flex items-center justify-between text-white py-5 mt-9 md:px-14 lg:mt-0 lg:px-2 lg:py-5 lg:gap-5">
                    <div className="flex flex-col items-center">
                        <span className="text-xl lg:text-4xl font-bold">10K+</span>
                        <span className="text-xs lg:text-lg lg:mt-5">Ativos digitais</span>
                    </div>

                    <div className="w-[2px] bg-neutral-stroke h-11"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-xl lg:text-4xl font-bold">5K+</span>
                        <span className="text-xs lg:text-lg lg:mt-5">Investidores</span>
                    </div>

                    <div className="w-[2px] bg-neutral-stroke h-11"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-xl lg:text-4xl font-bold">1 Bilhão</span>
                        <span className="text-xs lg:text-lg lg:mt-5">Volume de negociação</span>
                    </div>
                </div>

            </div>

            <div className="flex justify-center lg:hidden">
                <Image src="/images/block-funds-ceo.png" width={239} height={348} quality={100} alt="Block Funds CEO." />
            </div>

            <div className="hidden lg:flex lg:items-center flex-col justify-end absolute inset-x-0 bottom-[-28px] mx-auto">
                <img className="mb-2 p-2 border-spacing-4 bg-primary-black border-neutral-stroke border-2 rounded-xl" src="/images/icon-mouse.svg" alt="Block Funds." />
                <img className="bg-gradient-to-t from-primary-black to-transparent" src="/images/icon-line.svg" alt="Block Funds." />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-black to-transparent" />
        </div>


    )
}
