// Dados completos dos produtos baseados no PDF APN Outubro 2025
export interface ProductDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  hero: {
    headline: string;
    description: string;
    image?: string;
  };
  benefits: Array<{
    title: string;
    description: string;
  }>;
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    primary: string;
    secondary?: string;
    whatsappMessage: string;
  };
}

export const productDetails: Record<string, ProductDetail> = {
  green: {
    id: 'green',
    title: 'Conexão Green',
    subtitle: 'Economia aplicada diretamente na fatura de energia',
    tagline: 'Reduza sua conta sem instalar nada',
    hero: {
      headline: 'Sua conta de luz pesa no bolso?',
      description: 'Reduza até 20% na conta de energia sem obras, sem investimento inicial e sem mudanças na sua rotina. Economia garantida todo mês.'
    },
    benefits: [
      {
        title: 'Economia Imediata',
        description: 'Desconto aplicado direto na sua fatura mensal da distribuidora de energia'
      },
      {
        title: 'Sem Investimento Inicial',
        description: 'Não precisa comprar equipamentos, fazer obras ou reformas no imóvel'
      },
      {
        title: 'Processo 100% Digital',
        description: 'Contratação rápida e simples, totalmente online e sem burocracia'
      },
      {
        title: 'Energia Renovável',
        description: 'Você contribui para um planeta mais sustentável usando energia limpa'
      },
      {
        title: 'Sem Surpresas',
        description: 'Contrato transparente com valores e descontos claramente definidos'
      },
      {
        title: 'Flexibilidade',
        description: 'Cancele quando quiser, sem multas ou taxas de rescisão'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Análise da sua fatura',
        description: 'Envie uma foto da sua conta de luz e faremos uma simulação gratuita do seu potencial de economia'
      },
      {
        step: 2,
        title: 'Proposta personalizada',
        description: 'Receba uma proposta detalhada com o valor exato da economia mensal, sem compromisso'
      },
      {
        step: 3,
        title: 'Contratação digital',
        description: 'Assine o contrato de forma totalmente digital, rápida e segura'
      },
      {
        step: 4,
        title: 'Ativação e economia',
        description: 'Em poucos dias você começa a economizar. O desconto aparece direto na sua fatura'
      }
    ],
    faq: [
      {
        question: 'Como funciona o desconto na fatura?',
        answer: 'O desconto é aplicado automaticamente pela distribuidora de energia. Você continua recebendo sua conta normalmente, mas com um valor menor devido ao crédito de energia limpa.'
      },
      {
        question: 'Preciso fazer obras no meu imóvel?',
        answer: 'Não! A Conexão Green não exige instalação de equipamentos, obras ou mudanças na estrutura elétrica do imóvel. Tudo é feito remotamente.'
      },
      {
        question: 'Posso cancelar quando quiser?',
        answer: 'Sim, o contrato é flexível e você pode cancelar quando quiser sem multas ou taxas de rescisão.'
      },
      {
        question: 'Qual a economia média?',
        answer: 'A economia varia de acordo com o seu perfil de consumo, mas geralmente fica entre 10% e 20% na conta de energia.'
      },
      {
        question: 'É seguro? Como sei que vou receber o desconto?',
        answer: 'Totalmente seguro. A iGreen Energy é homologada pela ANEEL e o desconto é garantido em contrato. Você vê o crédito aplicado diretamente na sua fatura.'
      }
    ],
    cta: {
      primary: 'Simular minha economia',
      secondary: 'Falar com especialista',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre a Conexão Green e simular minha economia'
    }
  },
  
  solar: {
    id: 'solar',
    title: 'Conexão Solar',
    subtitle: 'Energia solar sem instalação de painéis',
    tagline: 'Energia limpa por assinatura',
    hero: {
      headline: 'Energia Solar Sem Instalar Painéis',
      description: 'Aproveite os benefícios da energia solar sem precisar instalar equipamentos no seu telhado. Economia garantida com flexibilidade total.'
    },
    benefits: [
      {
        title: 'Energia Solar Sem Obras',
        description: 'Use energia solar sem instalar painéis no seu imóvel'
      },
      {
        title: 'Economia Garantida',
        description: 'Reduza sua conta de energia com créditos de usinas solares'
      },
      {
        title: 'Sem Investimento Inicial',
        description: 'Não precisa comprar equipamentos ou fazer financiamentos'
      },
      {
        title: '100% Renovável',
        description: 'Energia limpa, sustentável e amiga do meio ambiente'
      },
      {
        title: 'Flexibilidade Total',
        description: 'Cancele quando quiser, sem multas ou fidelidade'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Simulação gratuita',
        description: 'Analisamos seu consumo e calculamos sua economia potencial'
      },
      {
        step: 2,
        title: 'Assinatura simples',
        description: 'Assine o plano de energia solar que melhor se adequa ao seu consumo'
      },
      {
        step: 3,
        title: 'Créditos na fatura',
        description: 'Você recebe créditos de energia solar direto na sua conta de luz'
      },
      {
        step: 4,
        title: 'Economia todo mês',
        description: 'Pague menos na conta de energia todos os meses, sem complicação'
      }
    ],
    faq: [
      {
        question: 'Como recebo energia solar sem painéis?',
        answer: 'Você assina um plano e recebe créditos de energia produzida por usinas solares da iGreen. Esses créditos são abatidos na sua conta de luz pela distribuidora.'
      },
      {
        question: 'Qual a diferença para a Conexão Green?',
        answer: 'A Conexão Solar é específica para energia gerada por painéis solares, enquanto a Green pode incluir outras fontes renováveis. Ambas oferecem economia sem instalação.'
      },
      {
        question: 'Posso usar em apartamento?',
        answer: 'Sim! Como não precisa instalar nada, funciona perfeitamente em apartamentos, casas alugadas ou qualquer imóvel.'
      },
      {
        question: 'Quanto tempo leva para ativar?',
        answer: 'Após a contratação, a ativação geralmente leva de 15 a 30 dias, dependendo da distribuidora de energia da sua região.'
      }
    ],
    cta: {
      primary: 'Ver planos disponíveis',
      secondary: 'Simular economia',
      whatsappMessage: 'Olá! Quero conhecer a Conexão Solar e ver os planos disponíveis'
    }
  },

  placas: {
    id: 'placas',
    title: 'Conexão Placas',
    subtitle: 'Projeto completo de energia solar',
    tagline: 'Instale seu sistema solar',
    hero: {
      headline: 'Seu Próprio Sistema de Energia Solar',
      description: 'Projeto completo de energia solar fotovoltaica com instalação profissional, painéis de alta eficiência e garantia total. Investimento que se paga.'
    },
    benefits: [
      {
        title: 'Projeto Personalizado',
        description: 'Sistema dimensionado especificamente para o seu consumo e espaço disponível'
      },
      {
        title: 'Instalação Profissional',
        description: 'Equipe técnica certificada cuida de todo o processo de instalação'
      },
      {
        title: 'Equipamentos Premium',
        description: 'Painéis solares e inversores de alta qualidade com garantia estendida'
      },
      {
        title: 'Retorno Garantido',
        description: 'O investimento se paga em médio prazo com a economia gerada'
      },
      {
        title: 'Monitoramento em Tempo Real',
        description: 'Acompanhe a geração de energia pelo app a qualquer momento'
      },
      {
        title: 'Valorização do Imóvel',
        description: 'Imóveis com energia solar têm maior valor de mercado'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Visita técnica',
        description: 'Nossa equipe visita o local para analisar o telhado e estrutura'
      },
      {
        step: 2,
        title: 'Projeto customizado',
        description: 'Desenvolvemos o projeto ideal para o seu consumo e espaço'
      },
      {
        step: 3,
        title: 'Instalação profissional',
        description: 'Instalamos os painéis, inversores e sistema de monitoramento'
      },
      {
        step: 4,
        title: 'Homologação e ativação',
        description: 'Cuidamos de toda a documentação junto à distribuidora'
      },
      {
        step: 5,
        title: 'Geração de energia',
        description: 'Seu sistema começa a gerar energia e reduzir sua conta'
      }
    ],
    faq: [
      {
        question: 'Quanto custa um sistema de energia solar?',
        answer: 'O valor varia conforme o tamanho do sistema necessário para o seu consumo. Fazemos uma análise gratuita e apresentamos um orçamento personalizado. Temos opções de financiamento.'
      },
      {
        question: 'Quanto tempo leva para instalar?',
        answer: 'Após a aprovação do projeto, a instalação física geralmente leva de 2 a 5 dias. O processo completo, incluindo homologação, pode levar de 30 a 90 dias.'
      },
      {
        question: 'Funciona em dias nublados ou à noite?',
        answer: 'O sistema gera menos energia em dias nublados, mas ainda produz. À noite não há geração, mas você usa os créditos acumulados durante o dia.'
      },
      {
        question: 'Precisa de manutenção?',
        answer: 'A manutenção é mínima. Recomenda-se limpeza dos painéis 1 a 2 vezes por ano e verificação técnica anual.'
      },
      {
        question: 'Qual a garantia dos equipamentos?',
        answer: 'Os painéis solares têm garantia de 25 anos de performance e os inversores de 5 a 10 anos, dependendo do fabricante.'
      }
    ],
    cta: {
      primary: 'Solicitar orçamento',
      secondary: 'Agendar visita técnica',
      whatsappMessage: 'Olá! Quero receber um orçamento para instalação de painéis solares'
    }
  },

  livre: {
    id: 'livre',
    title: 'Conexão Livre',
    subtitle: 'Mercado livre de energia',
    tagline: 'Liberdade para escolher',
    hero: {
      headline: 'Mercado Livre de Energia Para Sua Empresa',
      description: 'Escolha seu fornecedor de energia e economize até 35% na conta. Solução ideal para empresas que buscam redução de custos e previsibilidade.'
    },
    benefits: [
      {
        title: 'Economia de até 35%',
        description: 'Reduza significativamente os custos com energia elétrica'
      },
      {
        title: 'Liberdade de Escolha',
        description: 'Negocie diretamente com geradores e comercializadores'
      },
      {
        title: 'Previsibilidade',
        description: 'Contratos com preços fixos e sem surpresas na fatura'
      },
      {
        title: 'Energia Limpa',
        description: 'Opção de contratar energia 100% renovável'
      },
      {
        title: 'Gestão Especializada',
        description: 'Nossa equipe cuida de toda a gestão e otimização'
      },
      {
        title: 'Sustentabilidade',
        description: 'Melhore a imagem da empresa com energia sustentável'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Análise de viabilidade',
        description: 'Verificamos se sua empresa se enquadra nos requisitos do mercado livre'
      },
      {
        step: 2,
        title: 'Migração assistida',
        description: 'Cuidamos de todo o processo de migração para o mercado livre'
      },
      {
        step: 3,
        title: 'Gestão de contratos',
        description: 'Negociamos e gerenciamos contratos com fornecedores'
      },
      {
        step: 4,
        title: 'Economia garantida',
        description: 'Você passa a pagar menos na energia com total transparência'
      }
    ],
    faq: [
      {
        question: 'Minha empresa pode migrar para o mercado livre?',
        answer: 'Empresas com demanda contratada a partir de 500 kW podem migrar para o mercado livre. Fazemos uma análise gratuita de viabilidade.'
      },
      {
        question: 'Qual a economia média?',
        answer: 'A economia varia conforme o perfil de consumo e condições de mercado, mas geralmente fica entre 15% e 35% na conta de energia.'
      },
      {
        question: 'Tem risco de desabastecimento?',
        answer: 'Não. O fornecimento físico de energia continua pela distribuidora local. O que muda é apenas quem fornece e como você paga.'
      },
      {
        question: 'Preciso investir em infraestrutura?',
        answer: 'Não é necessário investimento em infraestrutura. Todo o processo é administrativo e comercial.'
      },
      {
        question: 'Quanto tempo leva a migração?',
        answer: 'O processo de migração geralmente leva de 4 a 6 meses, incluindo todas as etapas regulatórias.'
      }
    ],
    cta: {
      primary: 'Verificar elegibilidade',
      secondary: 'Solicitar análise',
      whatsappMessage: 'Olá! Gostaria de saber se minha empresa pode migrar para o mercado livre de energia'
    }
  },

  telecom: {
    id: 'telecom',
    title: 'Conexão Telecom',
    subtitle: 'Planos de telefonia e internet',
    tagline: 'Conectividade com benefícios',
    hero: {
      headline: 'Planos de Telefonia com iGreen Club Grátis',
      description: 'Internet móvel de qualidade com cobertura nacional, portabilidade grátis e acesso aos benefícios exclusivos do iGreen Club.'
    },
    benefits: [
      {
        title: 'Planos a partir de 11GB',
        description: 'Opções de 11GB até 50GB com preços competitivos'
      },
      {
        title: 'Cobertura Nacional',
        description: 'Rede de qualidade em todo o território brasileiro'
      },
      {
        title: 'Portabilidade Grátis',
        description: 'Mantenha seu número sem custos de portabilidade'
      },
      {
        title: 'iGreen Club GRÁTIS',
        description: 'Acesso a +600 mil descontos em todo Brasil'
      },
      {
        title: 'Sem Taxa de Adesão',
        description: 'Ative seu plano sem custos adicionais'
      },
      {
        title: 'App Exclusivo',
        description: 'Gerencie seu plano, consulte consumo e muito mais'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Escolha seu plano',
        description: 'Selecione o plano com a franquia de dados ideal para você'
      },
      {
        step: 2,
        title: 'Solicite portabilidade',
        description: 'Ou peça um novo número - todo o processo é gratuito'
      },
      {
        step: 3,
        title: 'Receba o chip',
        description: 'Chip enviado para seu endereço sem custos de entrega'
      },
      {
        step: 4,
        title: 'Ative e aproveite',
        description: 'Ative seu chip e comece a usar com os benefícios do iGreen Club'
      }
    ],
    faq: [
      {
        question: 'Quais planos estão disponíveis?',
        answer: 'Temos planos de 11GB (Start), 15GB (Mega), 20GB (Giga), 28GB (Ultra) e 50GB (Infinity). Todos incluem ligações ilimitadas e iGreen Club grátis.'
      },
      {
        question: 'Posso fazer portabilidade do meu número?',
        answer: 'Sim! A portabilidade é gratuita e você mantém seu número atual. O processo é simples e leva poucos dias.'
      },
      {
        question: 'O que é o iGreen Club?',
        answer: 'É um programa de benefícios exclusivo com descontos em +600 mil estabelecimentos, sorteios de prêmios, roleta com cashback e muito mais.'
      },
      {
        question: 'A cobertura é boa na minha região?',
        answer: 'Usamos a rede de uma das principais operadoras do Brasil. Podemos verificar a cobertura específica da sua região.'
      },
      {
        question: 'Tem fidelidade?',
        answer: 'Nossos planos não têm fidelidade. Você pode cancelar quando quiser sem multas.'
      }
    ],
    cta: {
      primary: 'Ver planos disponíveis',
      secondary: 'Fazer portabilidade',
      whatsappMessage: 'Olá! Gostaria de conhecer os planos de telefonia da Conexão Telecom'
    }
  },

  expansao: {
    id: 'expansao',
    title: 'Conexão Expansão',
    subtitle: 'Multiplique sua rede e seus ganhos',
    tagline: 'Construa sua carreira de sucesso',
    hero: {
      headline: 'Multiplique sua rede e seus ganhos!',
      description: 'Indique novos licenciados, forme sua equipe e alcance bônus, prêmios, viagens e comissões em escala. É o caminho para quem quer crescer rápido e construir uma carreira de sucesso na iGreen.'
    },
    benefits: [
      {
        title: 'Comissões Recorrentes',
        description: 'Ganhe comissões mensais de todas as conexões da sua rede (Green, Solar, Placas, Livre e Telecom)'
      },
      {
        title: 'Bônus de Expansão',
        description: 'R$300 por cada novo licenciado direto + R$100 por licenciado indireto (para licenciados PRO)'
      },
      {
        title: 'Royalties Desbloqueados',
        description: 'Até R$300 de royalties por licenciado na sua rede, ativados conforme sua qualificação'
      },
      {
        title: 'Sistema de Qualificações',
        description: 'Evolua de licenciado para PRO, depois S-EXPANSÃO e alcance níveis superiores com ganhos crescentes'
      },
      {
        title: 'Investimento de Volta em 10 Dias',
        description: 'Missão estruturada em 3 fases para recuperar seu investimento rapidamente'
      },
      {
        title: 'Prêmios e Viagens',
        description: 'Conquiste bônus extras, participação em cruzeiros e reconhecimentos exclusivos'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Fase 1: Conecte 5 Clientes Diretos',
        description: 'Faça suas primeiras conexões Green ou Telecom. Ao completar 5 clientes, você se qualifica como PRO e garante recorrência imediata.'
      },
      {
        step: 2,
        title: 'Fase 2: Indique 2 Licenciados',
        description: 'Traga 2 novos licenciados para a iGreen nos primeiros 10 dias. Você ganha R$300 de comissão por cada licenciado direto.'
      },
      {
        step: 3,
        title: 'Fase 3: Ajude sua Equipe a Crescer',
        description: 'Auxilie seus 2 licenciados a conectarem 5 clientes cada. Ao completar, você se qualifica como S-EXPANSÃO, desbloqueia royalties e recupera seu investimento.'
      },
      {
        step: 4,
        title: 'Evolução e Liderança',
        description: 'Continue expandindo sua rede. Quanto maior sua equipe e qualificação, maiores suas comissões, royalties e bônus mensais.'
      }
    ],
    faq: [
      {
        question: 'Qual a diferença entre licenciado e licenciado PRO?',
        answer: 'O licenciado PRO é quem já conectou pelo menos 5 clientes diretos. A qualificação PRO desbloqueia comissões maiores, incluindo R$100 adicionais por licenciado indireto e acesso a royalties.'
      },
      {
        question: 'Como funcionam os royalties?',
        answer: 'Royalties são comissões que você recebe de todas as conexões feitas pela sua rede (diretos e indiretos). Eles são ativados conforme você avança nas qualificações e podem chegar a até R$300 por licenciado.'
      },
      {
        question: 'Realmente consigo recuperar meu investimento em 10 dias?',
        answer: 'Sim! Seguindo a missão estruturada (5 clientes + 2 licenciados + ajudá-los a conectar 5 clientes cada), você recupera o investimento da licença e ainda desbloqueia comissões recorrentes.'
      },
      {
        question: 'Quais conexões geram comissão na Expansão?',
        answer: 'Todas as conexões: Green, Solar, Placas, Livre, Telecom e novos Licenciados. Cada produto tem percentuais diferentes de GP (Geração Própria), GI (Geração Indireta) e RO (Royalties).'
      },
      {
        question: 'Onde encontro mais informações sobre regras e qualificações?',
        answer: 'Acesse o Manual de Expansão completo em: igreenenergy.com.br/manual-expansao-igreen ou igreenenergy.com.br/licenciado-pro'
      }
    ],
    cta: {
      primary: 'Quero ser licenciado',
      secondary: 'Saiba mais sobre PRO',
      whatsappMessage: 'Olá! Quero conhecer a Conexão Expansão e saber como me tornar licenciado iGreen'
    }
  }
};
