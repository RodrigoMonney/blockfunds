import Image from 'next/image';

export default function HeaderHome() {
    return (
        <div className='flex justify-between h-16 bg-primary-black items-center px-4 py-[28px]'>
            <div>
                <Image src='/images/block-funds-logo.svg' className='h-5' width={123} height={20} alt='Block Funds.' />
            </div>
            <div>
                <Image src='/images/menu-icon.svg' className='h-[14px]' width={21} height={14} alt='Block Funds.' />
            </div>
        </div>
    )
}