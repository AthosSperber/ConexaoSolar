// Dados completos dos produtos baseados no PDF APN Dezembro 2025
export interface ProductDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  preview?: {
    summary: string;
    benefits: string[];
    cta: string;
  };
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
    tagline: 'Reduza sua conta sem investimento',
    preview: {
      summary: 'Reduza sua conta de energia sem investimento inicial. Os créditos aparecem na fatura da distribuidora e o boleto do serviço iGreen é enviado por WhatsApp e aplicativo.',
      benefits: [
        'Créditos aplicados na fatura da distribuidora',
        'Boleto do serviço iGreen via WhatsApp e app',
        'Você segue recebendo a fatura mínima/encargos da distribuidora',
        'Sem obras ou equipamentos necessários',
        'Sem investimento inicial'
      ],
      cta: 'Simular minha economia'
    },
    hero: {
      headline: 'Sua conta de luz pesa no bolso?',
      description: 'Reduza a conta de energia sem obras, sem investimento inicial e sem mudanças na sua rotina. Os créditos aparecem na fatura da distribuidora e o boleto do serviço iGreen é enviado por WhatsApp e aplicativo.'
    },
    benefits: [
      {
        title: 'Economia Imediata',
        description: 'Créditos aplicados na fatura da distribuidora (você continua recebendo a fatura mínima/encargos)'
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
        title: 'Condições Claras',
        description: 'Regras e condições definidas em contrato, com total transparência'
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
        description: 'Em poucos dias você começa a economizar. Os créditos aparecem na fatura da distribuidora e você recebe o boleto do serviço iGreen por WhatsApp e app'
      }
    ],
    faq: [
      {
        question: 'Como funciona o desconto na fatura?',
        answer: 'Os créditos de energia aparecem na fatura da distribuidora. Você continua recebendo a fatura mínima/encargos da distribuidora e o pagamento do serviço iGreen é feito via boleto (enviado por WhatsApp e pelo aplicativo).'
      },
      {
        question: 'Preciso fazer obras no meu imóvel?',
        answer: 'Não! A Conexão Green não exige instalação de equipamentos, obras ou mudanças na estrutura elétrica do imóvel. Tudo é feito remotamente.'
      },
      {
        question: 'Como funcionam as condições do contrato?',
        answer: 'As condições (prazos, regras e demais detalhes) são definidas em contrato. Enviamos a proposta completa para você avaliar antes de assinar.'
      },
      {
        question: 'Qual a economia média?',
        answer: 'A economia varia conforme seu perfil de consumo e as condições da sua distribuidora/UF. Fazemos uma simulação gratuita com base na sua fatura.'
      },
      {
        question: 'É seguro? Como sei que vou receber o desconto?',
        answer: 'O processo segue as regras do setor e o desconto fica definido em contrato. Você acompanha a aplicação do crédito diretamente na sua fatura.'
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
    subtitle: 'Gere sua própria energia sem investimento',
    tagline: 'Instalação com investimento da iGreen',
    preview: {
      summary: 'Gere sua própria energia sem investimento inicial. A iGreen aluga o telhado e instala os painéis, garantindo desconto mensal na conta de luz durante o contrato.',
      benefits: [
        'Instalação com investimento da iGreen (mediante viabilidade)',
        'Economia mensal na conta de luz',
        'Sem compra de equipamentos',
        'Ao final do período, o sistema é transferido',
        'Energia 100% renovável e limpa'
      ],
      cta: 'Ver como funciona'
    },
    hero: {
      headline: 'Energia solar com instalação sem custo inicial',
      description: 'A iGreen aluga o telhado do cliente e instala os painéis com investimento próprio, garantindo desconto mensal na conta de luz durante o contrato. Ao final do período, o sistema é transferido para o cliente.'
    },
    benefits: [
      {
        title: 'Sem Investimento Inicial',
        description: 'A iGreen realiza o investimento e instala os painéis no seu imóvel (mediante viabilidade)'
      },
      {
        title: 'Economia Garantida',
        description: 'Desconto mensal na conta de luz durante todo o contrato'
      },
      {
        title: 'Sem Compra de Equipamentos',
        description: 'Você não precisa comprar painéis ou fazer financiamento para começar'
      },
      {
        title: '100% Renovável',
        description: 'Energia limpa, sustentável e amiga do meio ambiente'
      },
      {
        title: 'Sistema Fica com Você',
        description: 'Ao final do período, o sistema é transferido para o cliente'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Análise de consumo',
        description: 'Avaliamos sua fatura e o perfil de consumo para entender o potencial de economia'
      },
      {
        step: 2,
        title: 'Viabilidade do imóvel',
        description: 'Avaliamos tecnicamente o telhado/estrutura para validar se o imóvel é compatível'
      },
      {
        step: 3,
        title: 'Instalação dos painéis',
        description: 'A iGreen instala o sistema com investimento próprio, após aprovação e formalização'
      },
      {
        step: 4,
        title: 'Economia mensal',
        description: 'Você recebe desconto mensal na conta de luz durante todo o contrato'
      },
      {
        step: 5,
        title: 'Transferência do sistema',
        description: 'Ao final do período, o sistema é transferido para o cliente'
      }
    ],
    faq: [
      {
        question: 'Como funciona a Conexão Solar?',
        answer: 'A iGreen aluga o telhado do cliente e instala os painéis solares com investimento próprio. Você recebe desconto mensal na conta de luz durante o contrato e, ao final do período, o sistema é transferido para você.'
      },
      {
        question: 'Qual a diferença para a Conexão Green?',
        answer: 'Na Conexão Solar há instalação de painéis no imóvel (sem investimento inicial, mediante viabilidade). Na Conexão Green não há instalação no imóvel: o desconto é aplicado na fatura por energia injetada no sistema.'
      },
      {
        question: 'Posso usar em apartamento?',
        answer: 'A Conexão Solar depende de viabilidade técnica e normalmente exige imóvel com telhado/estrutura compatível. Se você mora em apartamento, a Conexão Green pode ser uma alternativa por não exigir instalação.'
      },
      {
        question: 'Quanto tempo leva para ativar?',
        answer: 'Os prazos variam conforme a análise técnica, disponibilidade de agenda e etapas do processo. Após a simulação, informamos uma estimativa de cronograma.'
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
    preview: {
      summary: 'Instale seu próprio sistema de energia solar. Projeto completo com painéis de alta eficiência, instalação profissional e suporte técnico.',
      benefits: [
        'Projeto personalizado para seu imóvel',
        'Instalação profissional certificada',
        'Painéis de alta eficiência e durabilidade',
        'Retorno do investimento garantido',
        'Monitoramento em tempo real',
        'Manutenção e suporte técnico'
      ],
      cta: 'Solicitar orçamento'
    },
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
    preview: {
      summary: 'Mercado livre de energia com flexibilidade e economia. Escolha seu fornecedor e pague menos na conta de luz com transparência total.',
      benefits: [
        'Liberdade de escolher seu fornecedor',
        'Economia de até 30% na conta',
        'Previsibilidade nos custos',
        'Sustentabilidade com energia limpa',
        'Gestão profissional de energia'
      ],
      cta: 'Quero conhecer melhor'
    },
    hero: {
      headline: 'Mercado Livre de Energia Para Sua Empresa',
      description: 'Escolha seu fornecedor de energia e economize até 30% na conta. Solução ideal para empresas que buscam redução de custos e previsibilidade.'
    },
    benefits: [
      {
        title: 'Economia de até 30%',
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
        answer: 'A Conexão Livre é voltada para empresas conectadas em média e alta tensão. Fazemos uma análise de viabilidade para confirmar o enquadramento e estimar a economia.'
      },
      {
        question: 'Qual a economia média?',
        answer: 'A economia varia conforme perfil de consumo e condições de contratação. No material de apoio, a referência é de até 30% de economia mensal.'
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
        answer: 'O prazo varia conforme o perfil da empresa e as etapas regulatórias. Após a análise, informamos um cronograma estimado.'
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
    preview: {
      summary: 'Planos de telefonia móvel com ligações e WhatsApp ilimitados, internet acumulada e iGreen Club grátis. Opções com ou sem portabilidade.',
      benefits: [
        'Planos a partir de 11GB por mês',
        'Cobertura em todo Brasil',
        'Opção com ou sem portabilidade',
        'iGreen Club GRÁTIS incluso',
        'Descontos em +600 mil estabelecimentos',
        'Internet acumulada mês a mês'
      ],
      cta: 'Ver planos disponíveis'
    },
    hero: {
      headline: 'Planos de Telefonia com iGreen Club Grátis',
      description: 'Planos com ligações e WhatsApp ilimitados, internet acumulada, opção com ou sem portabilidade e iGreen Club grátis.'
    },
    benefits: [
      {
        title: 'Planos a partir de 11GB',
        description: 'Opções de 11GB até 50GB com preços competitivos'
      },
      {
        title: 'Cobertura Nacional',
        description: 'Cobertura ampla para você usar com estabilidade'
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
        answer: 'É um app/programa de benefícios para clientes iGreen, com descontos em +600 mil estabelecimentos. A roleta e os números da sorte existem, mas são condicionados a indicação válida pelo app (cliente indicado validado e ativo). Cashback pode ser utilizado para abater na conta de energia, conforme regras/campanhas.'
      },
      {
        question: 'A cobertura é boa na minha região?',
        answer: 'Usamos a rede de uma das principais operadoras do Brasil. Podemos verificar a cobertura específica da sua região.'
      },
      {
        question: 'Tem fidelidade?',
        answer: 'As condições do plano (regras e eventuais prazos) são informadas na proposta antes da contratação.'
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
    subtitle: 'Parceria comercial iGreen',
    tagline: 'Indique soluções e gere resultados',
    preview: {
      summary: 'Seja parceiro comercial iGreen. Indique as soluções do portfólio e acompanhe o processo com suporte e materiais. Comissionamento conforme regras e condições definidas em contrato.',
      benefits: [
        'Parceria com regras e condições claras',
        'Treinamento e materiais de apoio',
        'Portfólio de soluções (energia e telecom)',
        'Suporte durante as etapas do cliente',
        'Sem promessas de renda garantida'
      ],
      cta: 'Quero ser parceiro'
    },
    hero: {
      headline: 'Parceria para indicar as soluções iGreen',
      description: 'Atue como parceiro comercial indicando as soluções iGreen. Você conta com materiais e suporte, e o comissionamento segue as regras e condições definidas em contrato (sem promessa de renda garantida).'
    },
    benefits: [
      {
        title: 'Comissionamento por resultados',
        description: 'Remuneração conforme a política comercial vigente e as condições do contrato'
      },
      {
        title: 'Portfólio completo',
        description: 'Indique diferentes soluções (energia e telecom) de acordo com o perfil do cliente'
      },
      {
        title: 'Treinamento e materiais',
        description: 'Onboarding e conteúdos de apoio para você apresentar as soluções com clareza'
      },
      {
        title: 'Suporte na jornada',
        description: 'Acompanhamento para tirar dúvidas e orientar as etapas do processo com o cliente'
      },
      {
        title: 'Transparência',
        description: 'Regras, prazos, elegibilidade e condições apresentados antes da formalização'
      },
      {
        title: 'Atuação flexível',
        description: 'Trabalhe com indicação e relacionamento comercial de acordo com sua disponibilidade'
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Cadastro e onboarding',
        description: 'Você se cadastra como parceiro e recebe orientações iniciais sobre o portfólio e o processo comercial'
      },
      {
        step: 2,
        title: 'Apresentação das soluções',
        description: 'Você indica a melhor solução para cada perfil e encaminha o lead para atendimento/viabilidade'
      },
      {
        step: 3,
        title: 'Acompanhamento do processo',
        description: 'A iGreen conduz as etapas com o cliente (proposta, documentação e implantação quando aplicável)'
      },
      {
        step: 4,
        title: 'Comissionamento e pós-venda',
        description: 'Após a formalização, o comissionamento ocorre conforme regras do produto/contrato e você mantém o relacionamento comercial'
      }
    ],
    faq: [
      {
        question: 'Como funciona a parceria comercial?',
        answer: 'Você atua indicando as soluções iGreen para potenciais clientes e recebe comissionamento conforme a política comercial vigente e as condições definidas em contrato.'
      },
      {
        question: 'Existe renda garantida ou prazo “certo” para retorno?',
        answer: 'Não. Resultados variam conforme sua atuação, região, elegibilidade e adesão dos clientes. Apresentamos as regras e condições antes da formalização, sem promessas de ganhos garantidos.'
      },
      {
        question: 'Preciso recrutar pessoas para participar?',
        answer: 'O foco é a parceria comercial e a indicação de soluções para clientes. Qualquer regra adicional (quando aplicável) é sempre informada de forma transparente no material oficial e no contrato.'
      },
      {
        question: 'Quais soluções posso indicar?',
        answer: 'Você pode indicar as soluções do portfólio iGreen (energia e telecom), respeitando elegibilidade e regras de cada produto. No atendimento, ajudamos a enquadrar o cliente e estimar o potencial.'
      },
      {
        question: 'Onde encontro mais informações sobre regras e qualificações?',
        answer: 'Use os materiais oficiais fornecidos pela iGreen. Se quiser, enviamos os links e um resumo das regras aplicáveis no seu caso antes de qualquer compromisso.'
      }
    ],
    cta: {
      primary: 'Quero ser parceiro',
      secondary: 'Falar com especialista',
      whatsappMessage: 'Olá! Quero conhecer a Conexão Expansão (parceria comercial) e entender como funciona o comissionamento e o processo'
    }
  }
};
