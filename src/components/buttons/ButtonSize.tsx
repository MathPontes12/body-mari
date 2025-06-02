import { buttonsProps } from "./buttonsType"


const ButtonSize = ({tamanhoSelecionado, setTamanhoSelecionado }: buttonsProps) => {

    

    const AoClicar = (tamanho:string) => {            
            setTamanhoSelecionado?.(tamanho)
    }

    return (
        <>
        <button onClick={() => AoClicar('P')} className={`xl:text-[20px] text-[18px] border-[1px] border-ouroPrimaria cursor-pointer
            w-[50px] h-fit p-[10px] ${tamanhoSelecionado === 'P' ? 'text-white bg-ouroPrimaria' : 'text-ouroPrimaria bg-white'} `}
        >
            P
        </button>
        <button onClick={() => AoClicar('M')} className={`xl:text-[20px] text-[18px] border-[1px] border-ouroPrimaria cursor-pointer
            w-[50px] h-fit p-[10px] ${tamanhoSelecionado === 'M' ? 'text-white bg-ouroPrimaria' : 'text-ouroPrimaria bg-white'} `}
        >
            M
        </button>
        <button onClick={() => AoClicar('G')} className={`xl:text-[20px] text-[18px] border-[1px] border-ouroPrimaria cursor-pointer
            w-[50px] h-fit p-[10px] ${tamanhoSelecionado === 'G' ? 'text-white bg-ouroPrimaria' : 'text-ouroPrimaria bg-white'} `}
        >
            G
        </button>
        </>
    )
}

export default ButtonSize