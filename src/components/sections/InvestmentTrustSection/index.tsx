import InvestmentTrustCard from "@/components/InvestmentTrustCard";

export default function InvestmentTrustSection() {
    return (
        <div className="bg-midnight text-block-funds-white flex flex-col justify-center items-center py-[68px] px-[16px] text-center">
            <h1 className="text-xl font-medium leading-[22px]"><span className="font-bold">Transparência e Segurança</span> para seus investimentos</h1>

            <div className="flex flex-col gap-[52px]">
                <InvestmentTrustCard icon="/images/icon-eye.svg" title="Transparência" description="Acompanhe movimentos financeiros com registro imutável na blockchain, confiança nas decisões de investimento." />
                <InvestmentTrustCard icon="/images/icon-shield.svg" title="Segurança" description="Proteção máxima para ativos digitais, tecnologia de ponta e protocolos rigorosos garantem tranquilidade." />
                <InvestmentTrustCard icon="/images/icon-coins.svg" title="Controle de Ativos" description="Você está no comando dos investimentos. Explore oportunidades únicas com autonomia financeira e independência." />
            </div>
            <div>
                <h1 className="text-xl font-medium mb-3 leading-[22px] mt-24">Trabalhamos com a maiores <span className="font-bold">corretoras do mundo.</span></h1>
                <div className="flex flex-row gap-x-6 items-center justify-center mt-14">
                    <img className="h-[18px]" src="/images/icon-kraken.svg" alt="Block Funds." />
                    <img className="h-[18px]" src="/images/icon-coinbase.svg" alt="Block Funds." />
                    <img className="h-[18px]" src="/images/icon-huobi.svg" alt="Block Funds." />
                </div>
            </div>
        </div >
    );
}