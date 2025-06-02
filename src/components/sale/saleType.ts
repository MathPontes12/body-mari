import { ReactNode } from "react";


export interface saleProps {
  tamanhoSelecionado?: string;
  quantidade?: string;
  children?: ReactNode;
  nome?: string;
  preco?: string
  evento?: React.ChangeEvent<HTMLSelectElement>
  target?: EventTarget & HTMLSelectElement;

}