import Image from "next/image";
import ActionButton from "../ActionButton";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center gap-[52px] px-4 py-16">

            <div className="flex flex-col justify-center items-center">

                <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center justify-center gap-[2px] text-white">
                        <div className="flex items-center w-[42px] h-[42px] bg-slate-800 rounded-full p-[9px]">
                            <Image
                                src={'/images/icon-mail.svg'}
                                alt="Block Funds icon."
                                width={12}
                                height={12}
                                className="w-6 h-6 text-white mt-[2px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                            <span className="text-base font-medium text-block-funds-white font-hubot-sans">Atendimento por Email</span>
                            <span className="text-base font-medium text-block-funds-white-sub font-fira-sans">Suporte@BlockFunds.com</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[2px] text-white">
                        <div className="flex items-center w-[42px] h-[42px] bg-slate-800 rounded-full p-[9px]">
                            <Image
                                src={'/images/icon-phone.svg'}
                                alt="Block Funds icon."
                                width={12}
                                height={12}
                                className="w-6 h-6 text-white mt-[2px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                            <span className="text-base font-medium text-block-funds-white font-hubot-sans">Atendimento por Telefone</span>
                            <span className="text-base font-medium text-block-funds-white-sub font-fira-sans">(00) 00000-0000</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[2px] text-white">
                        <div className="flex items-center w-[42px] h-[42px] bg-slate-800 rounded-full p-[9px]">
                            <Image
                                src={'/images/icon-clock-refresh.svg'}
                                alt="Block Funds icon."
                                width={12}
                                height={12}
                                className="w-6 h-6 text-white mt-[2px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                            <span className="text-base font-medium text-block-funds-white font-hubot-sans">Horário de funcionamento</span>
                            <span className="text-base font-medium text-block-funds-white-sub font-fira-sans">6h às 20h de seg. à sexta-feira</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-[2px] text-white">
                        <div className="flex items-center w-[42px] h-[42px] bg-slate-800 rounded-full p-[9px]">
                            <Image
                                src={'/images/icon-wallet.svg'}
                                alt="Block Funds icon."
                                width={12}
                                height={12}
                                className="w-6 h-6 text-white mt-[2px]"
                            />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                            <span className="text-base font-medium text-block-funds-white font-hubot-sans">Trabalhe conosco</span>
                            <span className="text-base font-medium text-block-funds-white-sub font-fira-sans">Tornse-se um colaborador</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full h-[0px] border border-slate-600"></div>

            <div className="flex flex-col justify-start items-center gap-5">
                <div>
                    <Image src='/images/block-funds-logo.svg' width={202} height={33} alt='Block Funds.' />
                </div>

                <div className="pt-2 flex-col justify-center items-center gap-10 inline-flex">

                    <div className="flex-col justify-end items-start gap-6 inline-flex">
                        <div className="text-white text-sm font-medium font-hubot-sans">Plataforma e soluções</div>
                        <div className="text-white text-sm font-medium font-hubot-sans">Recursos Educacionais</div>
                        <div className="text-white text-sm font-medium font-hubot-sans">Investimentos</div>
                        <div className="text-white text-sm font-medium font-hubot-sans">Quem somos</div>
                        <div className="text-white text-sm font-medium font-hubot-sans">Termos e Privacidade</div>
                    </div>

                    <div className="justify-center items-center gap-6 inline-flex text-block-funds-white">
                        <div>
                            <Image
                                src={'/images/icon-whatsapp.svg'}
                                alt="Block Funds icon."
                                width={24}
                                height={24}
                                className="w-6 h-6 text-white"
                            />
                        </div>
                        <div>
                            <Image
                                src={'/images/icon-instagram.svg'}
                                alt="Block Funds icon."
                                width={24}
                                height={24}
                                className="w-6 h-6 text-white"
                            />
                        </div>
                        <div>
                            <Image
                                src={'/images/icon-twitter.svg'}
                                alt="Block Funds icon."
                                width={24}
                                height={24}
                                className="w-6 h-6 text-white"
                            />
                        </div>
                        <div>
                            <Image
                                src={'/images/icon-linkedin.svg'}
                                alt="Block Funds icon."
                                width={24}
                                height={24}
                                className="w-6 h-6 text-white"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full h-[0px] border border-slate-600"></div>

            <div className="justify-between items-center inline-flex gap-5">
                <div className="text-zinc-500 text-sm font-medium font-hubot-sans">
                    <p>BlockFunds© 2023</p>
                    <p>Todos os direitos reservados</p>
                </div>
                <div className="flex justify-start items-center">
                    <div className="text-zinc-500 text-base font-medium font-hubot-sans"></div>
                    <div className="min-w-[133px]">
                        <ActionButton classProps="text-zinc-500 text-base font-medium font-hubot-sans py-2" icon="/images/icon-arrow-up-thin.svg" iconProps="text-zinc-500 w-6 h-6" text="Ir para o topo" />
                    </div>
                </div>
            </div>

        </div>

    )
}