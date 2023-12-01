import ActionButton from "@/components/ActionButton"
import CardInvestment from "@/components/CardInvestment"

export default function InvestmentSection() {
    return (
        <div className="pt-11 px-4 mb-[68px]">
            <div className="text-block-funds-white text-center">
                <h1 className="font-medium text-xl leading-[22px]">Descubra a diversidade de Investimentos disponíveis para <span className="font-bold">Alavancar seu Patrimônio</span></h1>
                <p className="text-block-funds-white-sub font-normal text-base mt-5 mb-[53px]">
                    Oferecemos uma seleção criteriosa de investimentos rentáveis para garantir tranquilidade ao planejar o seu futuro financeiro.
                </p>

                <div className="flex flex-col gap-10">
                    <CardInvestment
                        title="Diversificação Inteligente"
                        description="Escolha investimentos estratégicos para maximizar seus lucros e minimizar os riscos"
                        iconSrc="/images/icon-balance-justice.svg"
                    />
                    <CardInvestment
                        title="Investimentos em Criptomoedas"
                        description="Descubra as oportunidades de alto rendimento nas criptomoedas e amplie seus retornos"
                        iconSrc="/images/icon-bitcoin.svg"
                    />
                    <CardInvestment
                        title="Renda Fixa"
                        description="Investimentos de renda fixa com retornos estáveis e previsíveis, proporcionando segurança e tranquilidade."
                        iconSrc="/images/icon-fixed-income.svg"
                    />
                    <CardInvestment
                        title="Fundos de Investimento"
                        description="Conte com a diversificação dos fundos de investimento para atingir seus objetivos financeiros"
                        iconSrc="/images/icon-investment-fund.svg"
                    />
                    <CardInvestment
                        title="Oportunidades em Web3"
                        description="Explore as vantagens das finanças descentralizadas e aproveite todo o potencial da tecnologia Web3"
                        iconSrc="/images/icon-web3-opportunity.svg"
                    />
                    <CardInvestment
                        title="Recompensas por Staking"
                        description="Lucre mais ao fazer staking de criptomoedas e fortalecer as redes digitais."
                        iconSrc="/images/icon-staking-reward.svg"
                    />

                    <div className="flex justify-center mt-[12px]">
                        <ActionButton classProps="button-primary mt-0" text="Abra sua conta agora" />
                    </div>
                </div>
            </div>
        </div >
    )
}