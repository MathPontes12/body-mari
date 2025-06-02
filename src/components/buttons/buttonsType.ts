

export interface buttonsProps {
    slideAnterior?: () => void;
    slideProximo?: () => void;
    className?: string;
    nome?: string;
    tamanhoSelecionado?: string;
    setTamanhoSelecionado?: React.Dispatch<React.SetStateAction<string>>;
}