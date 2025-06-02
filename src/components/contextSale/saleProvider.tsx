'use client';
import { useEffect, useState } from "react"
import ContextSale from "./contextSale"
import { saleProps } from "../sale/saleType"



const SaleProvider = ({ children }: saleProps) => {

    const [carrinho, setCarrinho] = useState<saleProps[]>([])

    // Carrega carrinho do localStorage no cliente
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const salvo = localStorage.getItem("carrinho");
            if (salvo) {
                setCarrinho(JSON.parse(salvo));
            }
        }
    }, []);

    // Salva carrinho no localStorage sempre que mudar
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
        }
    }, [carrinho]);
    

    const adicionarItem = ({tamanhoSelecionado, quantidade, nome, preco}:saleProps) => {

        const novoItem = {tamanhoSelecionado, quantidade, nome, preco}
        
        const itemNaLista = carrinho.some((item) => item.nome === nome)
        console.log(novoItem)
        console.log(itemNaLista)

        if (tamanhoSelecionado === '') {
            alert('SELECIONE UM TAMANHO')
        } else if (itemNaLista) {
            alert('ESTE PRODUTO JÁ ESTÁ NO SEU CARRINHO')
        }
        else {
            setCarrinho(item => [...item, novoItem])
        }
    }

    return (

        <ContextSale.Provider value={{carrinho, setCarrinho, adicionarItem}}>
            {children}
        </ContextSale.Provider>

    )
}

export default SaleProvider