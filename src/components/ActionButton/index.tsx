import Image from "next/image";
import "./styles.css"

type ActionButtonProps = {
    text?: string;
    icon?: string;
    classProps?: string
    iconProps?: string
}

export default function ActionButton({ text, icon, classProps, iconProps }: ActionButtonProps) {
    const iconStyle = iconProps ? iconProps : '';
    const imageSrc = icon ? icon : '/images/icon-chevron-right-double.svg';

    return (
        <button className={classProps}>
            <div className="flex flex-row justify-center items-center">
                <div className="mr-1">
                    {text}
                </div>
                <div className="mt-[2px]">
                    <img className="text-secondary-on" src={imageSrc} alt="" />
                </div>
            </div>
        </button >
    )
}