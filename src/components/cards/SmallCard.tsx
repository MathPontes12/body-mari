/* eslint-disable @next/next/no-img-element */

import { CardsProps } from "./cardsType"


const SmallCard = ({ urlImagem, preco, cardNew }:CardsProps ) => {

    return (

        <div className="card w-fit text-black font-fontePrimaria rounded-none flex-shrink-0">
            <figure className="w-[350px]">
                <img
                    src={`${urlImagem}`}
                    alt="imagem do produto"
                    className="w-[230px] h-auto cursor-pointer transition duration-500 ease-in-out hover:scale-120 hover:opacity-80"    
                />
            </figure>
            <div className="card-body gap-[10px] flex flex-col items-center">
                <h2 className="card-title text-[18px]">
                    Body/maio  florido
                    <div className={`${cardNew} badge badge-secondary text-[8px] mt-[-20px] animate-pulse`}>NEW</div>
                </h2>
                <p className="text-[18px]">{preco}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>

    )
}

export default SmallCard