export default function InvestmentSection() {
    return (
        <div className="pt-11 px-4">
            <div className="text-block-funds-white text-center">
                <h1 className="font-medium text-xl leading-[22px]">Descubra a diversidade de Investimentos disponíveis para <span className="font-bold">Alavancar seu Patrimônio</span></h1>
                <p className="text-block-funds-white-sub font-normal text-base mt-5 mb-[53px]">
                    Oferecemos uma seleção criteriosa de investimentos rentáveis para garantir tranquilidade ao planejar o seu futuro financeiro.
                </p>

                <div>
                    <div className="bg-card-gray rounded-2xl pt-[76px] pb-16 px-6 flex items-center text-white relative mb-10">
                        <div className="bg-card-gray-icon rounded-full p-2 w-16 h-16 items-center justify-between gap-2 absolute left-6 top-[-8px]">
                            <img className="w-11 h-11 grid place-items-center mx-auto flex-shrink-0 relative" src="/images/icon-balance-justice.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className="font-semibold text-base">Diversificação Inteligente</h3>
                            <p className="text-sm pt-4 font-medium text-block-funds-white-sub">Escolha investimentos estratégicos para maximizar seus lucros e minimizar os riscos</p>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}