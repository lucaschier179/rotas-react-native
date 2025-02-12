import { ImageSourcePropType } from "react-native";

export type TPetsDetailsProps = {
  nome: string;
  idade: string;
  porte: string;
  imagem: ImageSourcePropType;
  caracteristicas: string;
  localidade: string;
  descricao: {
    informacoes: string[];
    resumo: string;
    fotos: ImageSourcePropType[]
  };
}
