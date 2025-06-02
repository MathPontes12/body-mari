/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Title from "../titles/Title"
import dados from "@/json/carousel.json"

const Highlight = () => {

    const destaques = dados.productscard.filter((produtos) => produtos.destaque === true)

    return (

        <main className="flex flex-col w-full items-center z-40">
            <Title>DESTAQUES</Title>
            <article className="card flex flex-row h-auto justify-center text-black font-fontePrimaria text-[24px]">

                {destaques.map((produto) =>

                    (<Link href={`/body/${produto.nome}`} key={produto.id}>
                        <figure className="w-full rounded-none group" >
                            <img
                                src={`/images/produtos/${produto.nome}.png`}
                                alt="imagem de destaque"
                                className="xl:flex w-screen transition duration-500 ease-in-out group-hover:scale-110 hover:brightness-80 cursor-pointer"
                            />
                            
                            <section className="absolute hidden xl:flex flex-col ml-[500px] mt-[100px] opacity-0 transition duration-300 ease-in-out 
                    group-hover:opacity-100 gap-[20px]">
                                <p>
                                    {produto.nome}
                                </p>
                                <p>
                                    {produto.preco}
                                </p>
                            </section>
                        </figure>

                    </Link>

                ))}



            </article>
        </main>

    )
}

export default Highlight
