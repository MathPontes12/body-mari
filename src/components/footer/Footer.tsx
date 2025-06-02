/* eslint-disable @next/next/no-img-element */


const Footer = () => {
    return (

        <div className="flex justify-evenly xl:pt-[45px] xl:pb-[25px] p-[20px] xl:text-[20px] text-[12px]
         bg-ouroFooter font-fontePrimaria">
            <div className="hidden xl:flex flex-col items-center gap-[20px]">
                <p className="text-letraFooter">FORMAS DE PAGAMENTO</p>
                <div className="flex gap-[10px]">
                    <img src="/images/cartao.png" alt="icones de pagamento" className="w-auto h-[30px]" />
                    <img src="/images/pix.png" alt="icones de pagamento" className="w-auto h-[30px]" />
                </div>
            </div>
            <div className="flex flex-col text-white items-center xl:text-[20px] text-[12px]">
                <p>© 2025 BodyMari</p>
                <p>Todos os direitos reservados</p>
            </div>
            <div className="hidden xl:flex flex-col items-center gap-[20px]">
                <p className="text-letraFooter">SIGA A BODY NAS REDES</p>
                <div className="flex gap-[20px]">
                    <img src="/images/instagram.png" alt="icone Instagram" className="w-[30px] h-auto" />
                    <img src="/images/youtube.png" alt="icone Youtube" className="w-[35px] h-auto" />
                    <img src="/images/facebook.png" alt="icone Facebook" className="w-[30px] h-auto" />
                </div>
            </div>

        </div>

    )
}

export default Footer