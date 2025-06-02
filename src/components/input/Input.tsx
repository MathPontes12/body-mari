'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import dados from "@/json/carousel.json"
import Link from "next/link";


const Input = () => {

    const [lista, setLista] = useState('')

    const listaProdutos = lista ? dados.productscard.filter((produto) => produto.nome.toLowerCase().includes(lista.toLocaleLowerCase())) : []
    return (

        <div className="flex flex-col items-center">
            <div className="relative flex items-center z-40">
                <img src="/images/lupa.png" alt="icone de lupa" className="absolute ml-[5px] w-[30px] h-auto" />
                <input
                    value={lista}
                    onChange={(evento) => setLista(evento.target.value)}
                    type="text"
                    placeholder="O que você está procurando?"
                    className="text-[18px] text-ouroSecundaria w-[300px] pl-[43px] pr-[9px] py-[9px] bg-[#f6f5f5] rounded-[70px]"
                />
            </div>
            <ul
                className={`bg-[#f6f5f5] absolute flex-col w-[300px] 
                    ${listaProdutos.length === 0 ? ' h-fit' : 'h-[420px]'} ${lista ? 'flex' : 'hidden'} 
                    overflow-y-auto pt-[40px] text-black font-fontePrimaria border-b-[1px] border-[#f6f5f5] rounded-[20px] z-30`}>

                {listaProdutos.length === 0

                    ? <p className="text-ouroSecundaria font-fontePrimaria text-center py-[20px]">Produto não encontrado</p>

                    : listaProdutos.map((produto) =>
                        <Link href={`/body/${produto.nome}`}  key={produto.id}>
                            <li
                                className="flex w-full border-b-[2px] border-ouroPrimaria gap-[20px] 
                                px-[15px] pb-[15px] mt-[15px] cursor-pointer hover:opacity-80"
                                >
                                <img src={`/images/produtos/${produto.nome}.png`} alt="imagem do produto" className="w-[90px] h-auto" />
                                <div className="flex flex-col justify-center gap-[10px]">
                                    <h1>{produto.nome}</h1>
                                    <p>{produto.preco}</p>
                                </div>
                            </li>
                        </Link>

                    )}
            </ul>
        </div>

    )
}

export default Input