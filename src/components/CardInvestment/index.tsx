import Image from 'next/image';

type CardProps = {
    title: string;
    description: string;
    iconSrc: string;
}

export default function CardInvestment({ title, description, iconSrc }: CardProps) {
    return (
        <div className="bg-card-gray rounded-2xl pt-[76px] pb-16 px-6 flex items-center text-white relative">
            <div className="bg-card-gray-icon rounded-full p-2 w-16 h-16 items-center justify-between gap-2 absolute left-6 top-[-8px]">
                {/* Utilizando o componente Image do Next.js para otimização */}
                <Image
                    src={iconSrc}
                    alt=""
                    width={44} // O tamanho real em pixels do ícone
                    height={44} // O tamanho real em pixels do ícone
                    className="grid place-items-center mx-auto flex-shrink-0 relative"
                />
            </div>
            <div className="flex flex-col text-left">
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="text-sm pt-4 font-medium text-block-funds-white-sub">{description}</p>
            </div>
        </div>
    );
}
