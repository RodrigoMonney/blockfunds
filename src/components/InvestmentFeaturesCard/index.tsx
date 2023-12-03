type CardProps = {
    title: string;
    description: string;
}

export default function InvestmentTrustCard({ title, description }: CardProps) {
    return (
        <div className="p-6 pt-6 pb-10 font-semibold text-base rounded-l-xl border-solid border-neutre-stroke border-b-[1px]">
            <div className="mb-4 flex flex-row justify-center items-center">
                <div>
                    <h1 className="font-semibold text-lg">{title}</h1>
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