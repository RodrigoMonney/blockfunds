import Image from "next/image";
import ActionButton from "@/components/ActionButton";

export default function MainSection() {
    return (
        <div className="bg-block-funds-background bg-no-repeat bg-cover h-[776px]">
            <div className="px-4 py-6 h-[390px]">
                <h1 className="text-[28px] leading-block-funds-line-height-sub text-block-funds-white text-center">Explore a Vanguarda das Finanças</h1>
                <p className="mt-4 text-center text-sm leading-4 text-block-funds-white-sub">Descubra estratégias avançadas de investimento, um crescimento financeiro acelerado em um ambiente descentralizado e transparente.</p>

                <div className="flex justify-center">
                    <ActionButton classProps="button-primary w-[200px]" text="Abra sua conta agora" />
                </div>

                <div className="text-white py-5 flex items-center justify-between mt-9">
                    {/* Coluna 1 */}
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">10K+</span>
                        <span className="text-xs">Ativos digitais</span>
                    </div>

                    {/* Separador */}
                    <div className="w-[2px] bg-neutral-stroke h-11"></div>

                    {/* Coluna 2 */}
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">5K+</span>
                        <span className="text-xs">Investidores</span>
                    </div>

                    {/* Separador */}
                    <div className="w-[2px] bg-neutral-stroke h-11"></div>

                    {/* Coluna 3 */}
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">1 Bilhão</span>
                        <span className="text-xs">Volume de negociação</span>
                    </div>
                </div>


            </div>

            <div className="flex justify-center">
                <Image src="/images/block-funds-ceo.svg" width={239} height={348} alt="Block Funds CEO." />
            </div>
        </div>
    )
}
