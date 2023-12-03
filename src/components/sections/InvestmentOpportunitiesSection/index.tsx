import ActionButton from "@/components/ActionButton";

export default function InvestmentOpportunities() {
    const Title = () => (
        <h1 className="text-xl font-medium leading-[22px] pb-5 font-hubot-sans">
            Oportunidades únicas para <span className="font-bold">clientes exclusivos</span>
        </h1>
    );

    const Description = () => (
        <p className="font-normal text-base leading-5 text-block-funds-white-sub pb-10">
            Descubra um Investimento Personalizado e Diversificado na BlockFunds, a plataforma líder no mundo das criptomoedas!
        </p>
    );

    const DetailedInfo = () => (
        <p className="text-base font-medium font-fira-sans leading-6 text-[#CDCDCD]">
            Seja parte de um seleto grupo de investidores que têm acesso a uma solução 100% personalizada na Web3. Na BlockFunds, entendemos que cada cliente é único, por isso, nossos especialistas alinham seus investimentos de acordo com seu perfil de risco e objetivos financeiros.
        </p>
    );

    return (
        <div className="bg-deep-space text-block-funds-white flex flex-col justify-top py-16 px-4 text-center bg-block-funds-cfo-background bg-no-repeat bg-contain bg-bottom">
            <div>
                <Title />
                <Description />
                <DetailedInfo />
                <div className="flex justify-center pt-9 mb-[46px]">
                    <ActionButton classProps="flex justify-center items-center gap-1 py-5 px-10 border-2 border-neutre-stroke rounded-xl border-spacing-3 text-secondary-on text-base font-medium" iconProps="text-secondary-on" text="Abra sua conta agora" icon="/images/chevron-right-double-secondary.svg" />
                </div>
                <div className="min-h-[347px]" />
            </div>
        </div>
    );
}
