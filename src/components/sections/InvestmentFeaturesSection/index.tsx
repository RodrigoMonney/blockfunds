import ActionButton from "@/components/ActionButton";
import InvestmentFeaturesCard from "@/components/InvestmentFeaturesCard";

export default function InvestmentFeaturesSection() {
    return (
        <div className="bg-primary-black text-block-funds-white flex flex-col justify-center py-[68px] px-[16px] text-center">
            <h1 className="text-xl font-medium leading-[22px]"><span className="font-bold">Transparência e Segurança</span> para seus investimentos</h1>
            <div className="flex flex-col gap-[52px]">
                <InvestmentFeaturesCard title="Ativos ilimitados e inovadores" description="Uma nova dimensão de investimentos com uma ampla gama de ativos financeiros que impulsionam o crescimento." />
                <InvestmentFeaturesCard title="Crescimento exponencial" description="Aproveite o potencial de crescimento de investimentos estratégicos em setores emergentes e disruptivos." />
                <InvestmentFeaturesCard title="Tecnologia de vanguarda" description="Experimente uma plataforma com tecnologia avançada e obtenha insights valiosos sobre tendências e oportunidades de investimento.." />
            </div>

            <div className="flex flex-col items-center justify-center mt-16">
                <div className="relative">
                    <img className="mx-auto w-full max-w-[300px] h-auto" src="/images/bg-dashboard.svg" />
                    <img className="absolute right-[5px] top-[-19px]" src="/images/bg-bitcoin.svg" />
                    <img className="absolute left-[7.5px] bottom-[-8px]" src="/images/bg-ethereum.svg" />
                    <div className="absolute bg-primary-black w-6 h-2 bottom-[-2px] left-[64px]" />
                </div>
            </div>

            <div className="flex justify-center mt-[12px]">
                <ActionButton classProps="button-primary mt-14" text="Abra sua conta agora" />
            </div>
        </div>
    )
}