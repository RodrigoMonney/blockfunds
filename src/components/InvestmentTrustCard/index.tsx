type CardProps = {
    icon: string;
    title: string;
    description: string;
}

export default function InvestmentTrustCard({ icon, title, description }: CardProps) {
    return (
        <div className="pt-6 pl-3 pr-6 pb-10 font-semibold text-base rounded-l-xl border-solid border-neutre-stroke border-b-[1px]">
            <div className="mb-5 flex flex-row justify-center items-center">
                <div>
                    <img className="w-9 h-9 items-center pr-2" src={icon} alt={title} />
                </div>
                <div>
                    <h1 className="font-semibold text-base">{title}</h1>
                </div>
            </div>
            <div>
                <p className="text-sm font-medium leading-4 text-block-funds-white-sub self-stretch">
                    {description}
                </p>
            </div>
        </div>
    )
}