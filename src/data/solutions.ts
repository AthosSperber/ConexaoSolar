export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description?: string;
}

export const solutions: Solution[] = [
  {
    id: "conexao-green",
    title: "Conexão Green",
    subtitle: "Economia aplicada diretamente na fatura de energia.",
    icon: "/assets/icons/icon-green-120x120.svg",
    description: "Reduza sua conta de energia com uma solução simples e sem necessidade de instalação.",
  },
  {
    id: "conexao-livre",
    title: "Conexão Livre",
    subtitle: "Soluções flexíveis de conectividade e serviços.",
    icon: "/assets/icons/icon-livre-120x120.svg",
    description: "Acesso a internet e serviços de telecomunicações com planos adaptáveis às suas necessidades.",
  },
  {
    id: "conexao-placas",
    title: "Conexão Placas",
    subtitle: "Projeto e instalação de sistemas de energia solar.",
    icon: "/assets/icons/icon-placas-120x120.svg",
    description: "Invista em energia solar com painéis de alta tecnologia e suporte técnico completo.",
  },
  {
    id: "conexao-solar",
    title: "Conexão Solar",
    subtitle: "Consumo de energia limpa sem necessidade de instalação.",
    icon: "/assets/icons/icon-solar-120x120.svg",
    description: "Tenha acesso a energia solar renovável sem investimento inicial e sem obras em seu imóvel.",
  },
  {
    id: "conexao-telecom",
    title: "Conexão Telecom",
    subtitle: "Planos e soluções em telecomunicações.",
    icon: "/assets/icons/icon-telecom-120x120.svg",
    description: "Conectividade confiável com planos ajustados ao seu perfil de uso e necessidades.",
  },
  {
    id: "conexao-expansao",
    title: "Conexão Expansão",
    subtitle: "Parcerias para crescimento e ampliação de oportunidades.",
    icon: "/assets/icons/icon-expansao-120x120.svg",
    description: "Oportunidade de fazer parte da rede iGreen e desenvolver parcerias estratégicas.",
  },
];
