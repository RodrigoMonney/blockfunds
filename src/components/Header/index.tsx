import Image from 'next/image';

export default function HeaderHome() {
    return (
        <div className='fixed top-0 w-full z-10 bg-primary-black flex justify-between h-16 items-center px-4 py-[28px] xl:pl-[160px]'>
            <div>
                <Image src='/images/block-funds-logo.svg' className='h-5' width={123} height={20} alt='Block Funds.' />
            </div>
            <div>
                <Image className='h-[14px] lg:hidden' src='/images/menu-icon.svg' width={21} height={14} alt='Block Funds.' />
                <div className="justify-end items-center gap-6 lg:inline-flex hidden">
                    <div className="justify-start items-start gap-2 flex">
                        <div className="text-block-funds-white-sub text-sm font-medium font-fira-sans">Plataforma e soluções</div>
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                        <div className="text-block-funds-white-sub text-sm font-medium font-fira-sans">Recursos educacionais</div>
                        <Image className='h-[16px] w-[16px] mt-[4px]' src='/images/icon-green-chevron-down.svg' width={21} height={14} alt='Block Funds.' />

                    </div>
                    <div className="justify-start items-center gap-1 flex">
                        <div className="text-block-funds-white-sub text-sm font-medium font-fira-sans">Investimento</div>
                        <Image className='h-[16px] w-[16px] mt-[4px]' src='/images/icon-green-chevron-down.svg' width={21} height={14} alt='Block Funds.' />

                    </div>
                    <div className="justify-start items-center gap-1 flex">
                        <div className="text-block-funds-white-sub text-sm font-medium font-fira-sans">Quem somos</div>
                        <Image className='h-[16px] w-[16px] mt-[4px]' src='/images/icon-green-chevron-down.svg' width={21} height={14} alt='Block Funds.' />

                    </div>
                    <div className="justify-start items-center gap-2 flex">
                        <div className="h-[42px] px-7 py-4 bg-primary-green rounded justify-center items-center gap-2 flex">
                            <div className="text-block-funds-white text-sm font-medium font-fira-sans">Abrir conta</div>
                        </div>
                        <div className="h-[42px] px-7 py-4 rounded border border-slate-800 justify-center items-center gap-2 flex">
                            <div className="text-block-funds-white text-sm font-medium font-fira-sans">Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}