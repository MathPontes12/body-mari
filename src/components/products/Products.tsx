'use client';

import { useState } from "react"
import SmallCard from "../cards/SmallCard"
import Title from "../titles/Title"
import dados from "@/json/carousel.json"
import { productsProps } from "./productsType";
import Link from "next/link";
import ButtonCarouselRight from "../buttons/ButtonCarouselRight";
import ButtonCarouselLeft from "../buttons/ButtonCarouselLeft";

const Products = ({ novidade, titulo, valorTranslate }: productsProps) => {

    const imagens = dados.productscard.filter((produto) => produto.novidade === novidade)

    const [indiceAtual, setIndiceAtual] = useState(0)

    // É O NUMERO DE PULOS ATE CHEGAR NO MAXIMO DO ARRAY, AO PRESSIONAR O BOTAO
    // ALIADO AO TRANSLATE X DA DIV QUE MOSTRA O TOTAL DO CONTEUDO EM CADA VEZ Q O BOTAO É PRESSIONADO
    const ArraysPorBotao = 3

    const slideAnterior = () => {
        setIndiceAtual((indice) => (indice - ArraysPorBotao) % imagens.length)
    }

    const slideProximo = () => {
        setIndiceAtual((indice) => (indice + ArraysPorBotao) % imagens.length)
    }

    return (

        <div className="relative flex flex-col items-center overflow-hidden z-40">
            <Title>{titulo}</Title>
            <div className="w-full flex items-center px-[40px]">
                <ButtonCarouselLeft className="absolute left-[20px] flex -translate-y-1/2 transform z-50" slideAnterior={slideAnterior}/>
                <div
                    className="flex justify-evenly transition-transform duration-800 ease-in-out z-40 xl:px-[20px] xl:mx-0 mx-[-20px]
                    xl:overflow-visible overflow-x-auto scrollbar-hide"
                    style={{ transform: `translateX(-${indiceAtual * valorTranslate}%)` }}
                >
                    {imagens.map((card) => (
                        <Link href={`/body/${card.nome}`} key={card.id}>
                            <SmallCard 
                            cardNew={`${card.novidade === true ? 'flex' : 'hidden'}`} 
                            urlImagem={`/images/produtos/${card.nome}.png`} 
                            preco={card.preco} 
                            />
                        </Link>
                    ))}
                </div>
                <ButtonCarouselRight className="absolute right-[20px] flex -translate-y-1/2 transform z-50" slideProximo={slideProximo}/>
            </div>
        </div>

    )
}

export default Products