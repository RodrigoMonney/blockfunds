import Image from "next/image";
import "./styles.css"

type ActionButtonProps = {
    text?: string;
    icon?: string;
    classProps?: string
}

export default function ActionButton({ text, icon, classProps }: ActionButtonProps) {
    let imageSrc = '/images/icon-chevron-right-double.svg';
    if (icon) {
        imageSrc = icon;
    }

    return (
        <button className={classProps}>
            <div className="flex flex-row justify-center items-center w-96">
                <div className="mr-1">
                    {text}
                </div>
                <div className="mt-[2px]">
                    <img src="/images/icon-chevron-right-double.svg" alt="" />
                </div>
            </div>
        </button >
    )
}