/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from "react"

const Whatsapp = () => {

    const [balaoAparece, SetBalaoAparece] = useState(false)

    useEffect(() => {
        setTimeout(() => SetBalaoAparece(true), 7000)
        const tempo = setTimeout(() => SetBalaoAparece(false), 17000);
        return () => clearTimeout(tempo);
    }, []);

    const aoClicarWhatsapp = () => {
    
         // poe na variavel o encode com a frase
        const mensagem = encodeURIComponent(`Olá, gostaria de tirar uma dúvida sobre os produtos.`)
        // numero do celular
        const numero = '5521975140670'

        // acessa a url do whatsapp no numero e com a mensagem
        const url = `https://wa.me/${numero}?text=${mensagem}`;
        //quando clicar abre uma nova janela
        window.open(url, '_blank');
    }
    

    return (

        <div className="flex fixed  bottom-0 left-0 z-50">

            <button onClick={aoClicarWhatsapp}>
                <img className="w-fit xl:h-[60px] h-[50px]  
                xl:ml-[50px] ml-[20px] xl:mb-[60px] mb-[20px]
                xl:cursor-pointer xl:hover:opacity-50"
                    src="/images/WhatsappLogo.png" alt="logo do whatsapp" />
            </button>
            {balaoAparece && (
                
                <p className="rounded-t-[70px] rounded-br-[70px] bg-ouroFooter text-white font-fontePrimaria
                 h-fit p-[9px] mt-[-35px] text-[17px]"> 
                Precisa de ajuda?
                </p>
                
                )}
        </div>
    )
}

export default Whatsapp