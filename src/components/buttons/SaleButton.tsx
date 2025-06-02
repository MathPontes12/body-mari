import { useContext } from "react"
import { buttonsProps } from "./buttonsType"
import ContextSale from "../contextSale/contextSale"



const SaleButton = ({ className }: buttonsProps) => {

    const contexto = useContext(ContextSale)

    const aoClicarFecharPedido = () => {

        const produtos = contexto?.carrinho.map((produto) => 
         `${produto.nome}, tamanho: ${produto.tamanhoSelecionado}, ${produto.quantidade} unidade(s)`
        ).join('; ')
        
         // poe na variavel o encode com a frase
        const mensagem = encodeURIComponent(`Gostaria de encomendar o(s) produto(s): ${JSON.stringify(produtos)}`)
        // numero do celular
        const numero = '5521975140670'
        
        // acessa a url do whatsapp no numero e com a mensagem
        const url = `https://wa.me/${numero}?text=${mensagem}`;
        //quando clicar abre uma nova janela
        window.open(url, '_blank');
    }



    return (
        <button 
        onClick={aoClicarFecharPedido}
        className={`flex justify-center w-full xl:text-[17px] text-[21px]
         text-white font-fontePrimaria bg-ouroPrimaria mt-[20px] px-[10px] py-[5px] 
        hover:opacity-80 active:scale-99 cursor-pointer ${className}`}>
            FINALIZAR COMPRA
        </button>
    )
}

export default SaleButton