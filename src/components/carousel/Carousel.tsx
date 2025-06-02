'use client';

/* eslint-disable @next/next/no-img-element */
import dados from "@/json/carousel.json"
import { CarouselProps } from "./carouselType"
import { useEffect, useState } from "react";
import ButtonCarouselLeft from "../buttons/ButtonCarouselLeft";
import ButtonCarouselRight from "../buttons/ButtonCarouselRight";


const Carousel = () => {

    // RECEBENDO OS DADOS IMAGEM DO JSON
    const imagens = dados.carousel.map((carousel: CarouselProps) => carousel.imagem)

    // ESTADO PRA ARMAZENAR O INDICE ATUAL DO ARRAY
    const [indiceAtual, setIndiceAtual] = useState(0)


    useEffect(() => {

        // CRIA UMA TRANSIÇAO COM INTERVALO DE 4 SEGUNDOS DAS IMAGENS DO ARRAY PELO INDEX DELE ATE O LIMITE DO ARRAY (%)
        const intervalo = setInterval(() => {
            setIndiceAtual((indice) => (indice + 1) % imagens.length)
        }, 4000)

        // QUANDO CHEGAR NO LIMITE ZERA E INICIA NOVAMENTE
        return () => clearInterval(intervalo)
    }, [imagens.length])


    // BOTOES PARA TROCAR AS IMAGENS MANUALMENTE
    const slideAnterior = () => {
        setIndiceAtual((indice) => (indice - 1 + imagens.length) % imagens.length)
    }

    const slideProximo = () => {
        setIndiceAtual((indice) => (indice + 1) % imagens.length)
    }


    return (

        //o overflow-hidden para esconder o scroll e a fileira de imagens
        <div className="relative w-full overflow-hidden z-40">

            <div className="w-full flex items-center">

                <ButtonCarouselLeft 
                className="absolute left-[20px] xl:top-[140px] top-[40px] translate-y-1/2 transform z-50" slideAnterior={slideAnterior}/>               

                {/* o style com transform e dentro o translate do eixo x -100%(manda o slide atual todo para trás e troca pelo novo) */}
                <div
                    className="flex transition-transform duration-1500 ease-in-out z-40"
                    style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
                >
                    {imagens.map((imagem, index) => (
                        <img
                            key={index}
                            src={`/images/carrossel/${imagem}.png`}
                            alt={`Imagem ${index + 1}`}
                            className="xl:flex hidden w-full flex-shrink-0"
                        />
                    ))}
                    {imagens.map((imagem, index) => (
                        <img
                            key={index}
                            src={`/images/carrossel/responsividade/${imagem}.png`}
                            alt={`Imagem ${index + 1}`}
                            className="xl:hidden flex w-full flex-shrink-0 overflow-x-auto scrollbar-hide"
                        />
                    ))}
                </div>

                <ButtonCarouselRight
                 className="absolute right-[20px] xl:top-[140px] top-[40px] translate-y-1/2 transform z-50" slideProximo={slideProximo}/>
            </div>

        </div>
    )
}

export default Carousel