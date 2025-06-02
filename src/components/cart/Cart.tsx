'use client';
/* eslint-disable @next/next/no-img-element */

import { useContext } from "react"
import ContextSale from "../contextSale/contextSale"
import SaleButton from "../buttons/SaleButton";
import { saleProps } from "../sale/saleType";
import { Trash2 } from "lucide-react";


const Cart = () => {

    const contexto = useContext(ContextSale)

    const aoClicarLimpar = (produto: saleProps) => {
        contexto?.setCarrinho(
            contexto.carrinho.filter((novaLista) => novaLista.nome !== produto.nome)   
        )
    }

    const MudarQuantidade = (nome:string, evento: saleProps) =>{
        const novaQuantidade = evento.target!.value

        contexto?.setCarrinho(contexto.carrinho.map((produto) =>
            produto.nome === nome ? {...produto, quantidade: novaQuantidade} : produto
        ),
    )
    }



    return (

        <main className="drawer drawer-end w-fit xl:pr-[50px] z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <figure className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer hover:opacity-50">
                    <div className="flex">
                        <img src="/images/sacola.png" alt="icone carrinho de compras" />
                        <div className={`bg-red-500 text-[12px] text-center w-[17px] h-[17px] text-white rounded-full ml-[-22px]
                            ${contexto?.carrinho.length === 0 ? 'hidden' : 'static'}`}>
                            {contexto?.carrinho.length}
                        </div>
                    </div>
                </label>
            </figure>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                <article className="bg-white h-full w-[380px] flex flex-col gap-[30px] text-black p-4">
                    <div className="flex gap-[70px] items-center">
                        <label
                            htmlFor="my-drawer-4"
                            className="xl:text-[30px] text-[40px] text-ouroSecundaria font-fontePrimaria font-bold cursor-pointer"
                        >
                            ×
                        </label>
                        <h1 className="flex font-fontePrimaria font-bold text-ouroSecundaria xl:text-[18px] text-[24px]">
                            MEU CARRINHO
                        </h1>
                    </div>
                    <ul className="flex flex-col items-center h-[570px] overflow-auto">
                        
                        {contexto?.carrinho.length === 0 ? 
                        (<h1 className="my-auto text-[16px] font-fontePrimaria">
                            SEU CARRINHO ESTÁ VAZIO!
                        </h1>) 
                        : 
                        (contexto?.carrinho?.map((produto) =>
                            <li
                                key={produto.nome}
                                className="flex justify-evenly w-full border-y-[1px] border-ouroPrimaria py-[7px]">
                                <img src={`/images/produtos/${produto.nome}.png`} alt="imagem do produto" className="w-[120px] h-auto" />
                                <article className="flex flex-col gap-[5px] font-fontePrimaria">
                                    <h2 className="text-[20px]">{produto.nome}</h2>
                                    <div>
                                        <p>{produto.preco}</p>
                                    </div>
                                    <div className="flex text-[14px] gap-[5px] opacity-50">
                                        <p>Tamanho:</p>
                                        <p>{produto.tamanhoSelecionado}</p>
                                    </div>
                                    <div className="flex text-[14px] gap-[5px] opacity-50">
                                        <p>Quantidade:</p>
                                        <select defaultValue={produto.quantidade} onChange={(evento) => MudarQuantidade(produto.nome!, evento)}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </select>
                                    </div>
                                </article>
                                <button onClick={() => aoClicarLimpar(produto)} className="text-black flex justify-start">
                                    <Trash2 className="w-[20px] cursor-pointer"/>
                                </button>
                            </li>
                        ))}

                    </ul>
                    <SaleButton className={`${contexto?.carrinho.length === 0 ? 'hidden' : 'static'}`}/>
                </article>
            </div>
        </main>

    )
}

export default Cart