import { useContext, useState } from "react"
import ButtonSize from "../buttons/ButtonSize"
import ContextSale from "../contextSale/contextSale"
import { saleProps } from "./saleType"
import Link from "next/link"



const Sale = ({ nome, preco }: saleProps) => {

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('')
    const [quantidade, setQuantidade] = useState('1')

    const contexto = useContext(ContextSale)

    const novoItem = { tamanhoSelecionado, quantidade, nome, preco }

    return (
        <>
            <section className="flex flex-col my-[50px] gap-[10px]">
                <p className="text-[16px] opacity-60">Tamanho</p>
                <div className="flex gap-[20px]">
                    <ButtonSize tamanhoSelecionado={tamanhoSelecionado} setTamanhoSelecionado={setTamanhoSelecionado} />
                </div>
            </section>
            <div className="flex font-fontePrimaria gap-[10px]">
                <select
                    value={quantidade} onChange={(evento) => setQuantidade(evento.target.value)}
                    className="px-[14px] xl:text-[16px] text-[18px] border-[1px] border-black w-[80px] cursor-pointer">
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <button
                    onClick={() => contexto?.adicionarItem(novoItem)}
                    className="bg-[rgba(184,157,19,0.7)] w-full text-white xl:text-[20px] text-[16px] p-[14px] cursor-pointer hover:opacity-80">
                    Adicionar ao Carrinho
                </button>
            </div>
            <Link href="/" className="bg-[rgb(245,245,245)] xl:text-[16px] text-[12px] p-[14px] text-ouroSecundaria text-center hover:opacity-80">
                Confira os outros produtos
            </Link>
        </>
    )
}

export default Sale