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
    subtitle: "Mercado livre de energia para empresas.",
    icon: "/assets/icons/icon-raio-120x120.svg",
    description: "Para consumidores em média e alta tensão que buscam até 30% de economia na conta de luz, sem precisar investir em equipamentos.",
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
    subtitle: "Gere sua própria energia sem investimento.",
    icon: "/assets/icons/icon-solar-120x120.svg",
    description: "A iGreen aluga o telhado do cliente e instala os painéis com investimento próprio, garantindo desconto mensal na conta de luz durante o contrato.",
  },
  {
    id: "conexao-telecom",
    title: "Conexão Telecom",
    subtitle: "Planos e soluções em telecomunicações.",
    icon: "/assets/icons/icon-telecom-120x120.svg",
    description: "Planos móveis com internet acumulada, WhatsApp e ligações ilimitadas e iGreen Club grátis.",
  },
  {
    id: "conexao-expansao",
    title: "Conexão Expansão",
    subtitle: "Parceria comercial iGreen.",
    icon: "/assets/icons/icon-expansao-120x120.svg",
    description: "Atue como parceiro indicando as soluções iGreen, com regras e condições claras e sem promessas de renda garantida.",
  },
];
