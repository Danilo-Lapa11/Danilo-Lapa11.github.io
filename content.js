// =====================================================================
//  CONTEÚDO DO PORTFÓLIO: edite apenas este arquivo.
//  Textos com { pt, en } aparecem conforme o idioma escolhido.
//  Formatação: **negrito**  ·  *destaque na cor de acento*
//  Itens marcados com TODO pedem um dado que ainda não temos.
// =====================================================================

const CONTENT = {
  profile: {
    name: "Danilo Lapa",
    initials: "DL",
    photo: "assets/danilo.jpg",
    photoPosition: "52% 30%", // ponto focal do corte (horizontal vertical)
    roles: ["Data Scientist", "Machine Learning Engineer", "Applied AI"],
    headline: {
      pt: "Aplicações de IA com *impacto real* em cidades, empresas e saúde pública.",
      en: "AI applications with *real impact* on cities, businesses and public health.",
    },
    lead: {
      pt: "Cientista de dados em Recife. Hoje desenvolvo modelos de IA para o Centro de Operações do Recife, que acompanha a cidade em tempo real: risco climático, anomalias no trânsito e apoio à decisão. Trabalho do pipeline ao deploy, com Python, machine learning e LLMs.",
      en: "Data scientist in Recife. I currently build AI models for the Recife Operations Center, which monitors the city in real time: climate risk, traffic anomalies and decision support. I work from pipeline to deploy, with Python, machine learning and LLMs.",
    },
  },

  about: {
    photoAlt: {
      pt: "Danilo Lapa sorrindo, de camisa polo branca, em frente a uma parede escura",
      en: "Danilo Lapa smiling in a white polo shirt in front of a dark wall",
    },
    title: {
      pt: "Da engenharia de dados ao modelo em produção.",
      en: "From data engineering to models in production.",
    },
    paragraphs: {
      pt: [
        "Sou **Cientista de Dados Consultor** na **Aquila Consultoria em Gestão**, em Recife. Desenvolvo soluções de dados e IA para a plataforma de monitoramento do **Centro de Operações do Recife**: classificação de risco climático, detecção de anomalias de trânsito com dados do Waze e fluxos analíticos com LLMs.",
        "Antes, passei dois anos na **FH Data**. Lá criei um modelo de otimização de rotas que ajudou a reduzir em **10% o custo de frete** de um cliente da indústria química e automatizei relatórios que consumiam **três dias de trabalho manual por semana**.",
        "Sou formado em **Ciência da Computação pela UFPE**, onde fui pesquisador bolsista do CNPq e coautor de um artigo sobre **previsão de arboviroses** com machine learning (J. Health Inform., 2024). Gosto de projetos que juntam rigor estatístico e produto, do notebook ao deploy.",
      ],
      en: [
        "I'm a **Data Scientist Consultant** at **Aquila Consultoria em Gestão**, in Recife. I build data and AI solutions for the **Recife Operations Center** monitoring platform: climate risk classification, traffic anomaly detection with Waze data and LLM powered analytical workflows.",
        "Before that, I spent two years at **FH Data**. There I built a route optimization model that helped cut a chemical industry client's **freight costs by 10%**, and automated reports that took **three days of manual work every week**.",
        "I hold a **B.Sc. in Computer Science from UFPE**, where I was a CNPq funded researcher and co-authored a paper on **arbovirus forecasting** with machine learning (J. Health Inform., 2024). I enjoy projects that combine statistical rigor and product, from notebook to deploy.",
      ],
    },
  },

  // ---------------------------------------------------------------
  //  PROJETOS: vindos de github.com/Danilo-Lapa11
  //  cover: "bars" | "scatter" | "benchmark" | "grid" | "series" | "network"
  // ---------------------------------------------------------------
  featured: [
    {
      repo: "data-science-challenge",
      cover: "bars",
      tag: { pt: "Business case", en: "Business case" },
      title: { pt: "Case de Data Science AB InBev", en: "AB InBev Data Science case" },
      chips: ["Jupyter", "Python", "EDA · Modelagem"],
      description: {
        pt: "Estudo de caso de nível pleno para o BEES (AB InBev): exploração, modelagem e comunicação de resultados de ponta a ponta.",
        en: "Mid-level case study for BEES (AB InBev): exploration, modeling and communication of results end to end.",
      },
    },
    {
      repo: "diabetes-readmission-classification",
      cover: "scatter",
      tag: { pt: "Classificação", en: "Classification" },
      title: { pt: "Readmissão hospitalar de pacientes diabéticos", en: "Hospital readmission of diabetic patients" },
      chips: ["Jupyter", "CRISP-DM", "Healthcare"],
      description: {
        pt: "Metodologia CRISP-DM para encontrar o melhor modelo de classificação de readmissões, do entendimento do problema à avaliação.",
        en: "CRISP-DM methodology to find the best model for classifying readmissions, from problem understanding to evaluation.",
      },
    },
    {
      repo: "spambase-classification",
      cover: "benchmark",
      tag: { pt: "Benchmark ML", en: "ML benchmark" },
      title: { pt: "Detecção de spam · 4 modelos comparados", en: "Spam detection · 4 models compared" },
      chips: ["Jupyter", "scikit-learn", "CIn · UFPE"],
      description: {
        pt: "Comparação de quatro algoritmos de classificação no dataset Spambase, com análise de métricas de validação e trade-offs.",
        en: "Four classification algorithms compared on the Spambase dataset, with analysis of validation metrics and trade-offs.",
      },
    },
    {
      repo: "Predicting-B3-shares",
      cover: "series",
      tag: { pt: "Séries temporais", en: "Time series" },
      title: { pt: "Previsão de ações da B3", en: "Forecasting B3 stock prices" },
      chips: ["Streamlit", "Machine Learning", "API"],
      description: {
        pt: "Sistema em Streamlit que coleta cotações da bolsa brasileira via API e exibe previsões com ML e séries temporais.",
        en: "Streamlit app that pulls Brazilian stock exchange quotes via API and shows ML and time-series forecasts.",
      },
    },
  ],

  research: {
    paper: {
      url: "https://doi.org/10.59681/2175-4411.v16.iEspecial.2024.1298",
      venue: "Journal of Health Informatics · v.16, Especial · 2024",
      tag: { pt: "Peer-reviewed · 2024", en: "Peer-reviewed · 2024" },
      title: {
        pt: "Predição de casos de arboviroses no Recife utilizando computação de reservatório",
        en: "Predicting arbovirus cases in Recife using reservoir computing",
      },
      chips: ["Reservoir Computing", "Acurácia > 0,80", "Epidemiologia"],
      description: {
        pt: "Técnicas de **reservoir computing** com fatores climáticos para antecipar surtos de arboviroses. Os modelos superaram **0,80** em acurácia, precision e recall na previsão de casos em Recife.",
        en: "**Reservoir computing** with climate factors to anticipate arbovirus outbreaks. The models exceeded **0.80** in accuracy, precision and recall when forecasting cases in Recife.",
      },
    },
    posts: [
      {
        url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7265557410960842752/",
        image: "assets/post-simposio-sabio.webp",
        imagePosition: "center 30%",
        alt: {
          pt: "Equipe de pesquisa ao lado do pôster no VIII Simpósio de Inovação em Engenharia Biomédica (SABIO)",
          en: "Research team next to the poster at the 8th Biomedical Engineering Innovation Symposium (SABIO)",
        },
        title: { pt: "Publicação & bastidores da pesquisa", en: "Publication & behind the research" },
        description: {
          pt: "Anúncio do artigo e os bastidores do trabalho em previsão de arboviroses com a equipe.",
          en: "Paper announcement and the story behind the arbovirus forecasting work with the team.",
        },
      },
      {
        url: "https://www.linkedin.com/feed/update/urn:li:share:7308239189571985409/",
        image: "assets/post-iceis-mencao-honrosa.png",
        imagePosition: "center 40%",
        alt: {
          pt: "Certificado de menção honrosa na modalidade pôster do III Seminário iCEIS",
          en: "Honorable mention certificate in the poster category at the 3rd iCEIS Seminar",
        },
        title: { pt: "Divulgação da pesquisa", en: "Sharing the research" },
        description: {
          pt: "O estudo e seus resultados em saúde pública e modelagem preditiva.",
          en: "The study and its results in public health and predictive modeling.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------
  //  CERTIFICAÇÕES: para adicionar outra, copie um bloco abaixo.
  //  A ordem na página é automática: em andamento primeiro, depois da
  //  mais recente para a mais antiga, pelo campo "issued" (AAAA-MM-DD).
  // ---------------------------------------------------------------
  certifications: [
    {
      code: "AI-900",
      issuer: "Microsoft",
      badge: "assets/azure-ai-fundamentals.png",
      name: "Azure AI Fundamentals",
      level: { pt: "Fundamentos", en: "Fundamentals" },
      status: { pt: "Certificado", en: "Certified" },
      date: { pt: "set 2025", en: "Sep 2025" },
      issued: "2025-09",
      credentialId: "4F3C6F30D0AB438A",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/pt-br/DaniloLapa-5168/4F3C6F30D0AB438A?sharingId=E4BA2AD2F73CEC65",
      infoUrl: "https://learn.microsoft.com/credentials/certifications/azure-ai-fundamentals/",
      summary: {
        pt: "Fundamentos de inteligência artificial e dos serviços de IA do Azure: do ciclo de vida de modelos de machine learning às cargas de visão computacional, linguagem natural e IA generativa.",
        en: "Foundations of artificial intelligence and Azure AI services: from the machine learning model lifecycle to computer vision, natural language and generative AI workloads.",
      },
      topics: {
        pt: ["Machine Learning", "Visão computacional", "NLP", "IA generativa", "IA responsável"],
        en: ["Machine Learning", "Computer vision", "NLP", "Generative AI", "Responsible AI"],
      },
      related: {
        repo: "AzureML-1st-contact",
        label: { pt: "Laboratório no Azure Machine Learning (bootcamp DIO)", en: "Azure Machine Learning lab (DIO bootcamp)" },
      },
    },
    {
      code: "AWS ML",
      issuer: "Amazon Web Services",
      badge: "assets/aws-ml-foundations.png",
      name: "AWS Educate Machine Learning Foundations",
      level: { pt: "Treinamento", en: "Training" },
      status: { pt: "Treinamento concluído", en: "Training completed" },
      date: { pt: "07 mar 2025", en: "07 Mar 2025" },
      issued: "2025-03-07",
      verifyUrl: "https://www.credly.com/badges/8811ce8d-2dcc-444e-8a4a-4c95e669da4f",
      summary: {
        pt: "Conceitos fundamentais de machine learning e aplicação do pipeline de ML para resolver um problema de negócio, com aprovação na avaliação final do curso.",
        en: "Core machine learning concepts and applying the ML pipeline to solve a business problem, with a passing score on the post-course assessment.",
      },
      topics: {
        pt: ["Machine Learning", "Pipeline de ML", "AWS Cloud"],
        en: ["Machine Learning", "ML pipeline", "AWS Cloud"],
      },
    },
    {
      code: "Lakehouse",
      issuer: "Databricks",
      badge: "assets/databricks-lakehouse-fundamentals.png",
      name: "Lakehouse Fundamentals",
      level: { pt: "Fundamentos", en: "Fundamentals" },
      status: { pt: "Credenciado", en: "Accredited" },
      date: { pt: "08 mai 2025", en: "08 May 2025" },
      issued: "2025-05-08",
      verifyUrl: "", // TODO: link do Credly ou Databricks Academy
      summary: {
        pt: "Arquitetura lakehouse e a plataforma Databricks: como unir data lake e data warehouse para engenharia de dados, analytics e machine learning em um só lugar.",
        en: "Lakehouse architecture and the Databricks platform: bringing data lakes and warehouses together for data engineering, analytics and machine learning in one place.",
      },
      topics: {
        pt: ["Lakehouse", "Delta Lake", "Engenharia de dados", "Governança"],
        en: ["Lakehouse", "Delta Lake", "Data engineering", "Governance"],
      },
    },
    {
      code: "54/100 · B2",
      issuer: "EF SET",
      badge: "assets/efset-english.png",
      name: { pt: "Certificado de Inglês EF SET", en: "EF SET English Certificate" },
      level: { pt: "B2 Upper Intermediate", en: "B2 Upper Intermediate" },
      status: { pt: "Certificado", en: "Certified" },
      date: { pt: "27 set 2026", en: "27 Sep 2026" },
      issued: "2026-09-27",
      verifyUrl: "https://cert.efset.org/en/jzgVdm",
      summary: {
        pt: "Inglês nível B2 no CEFR, com compreensão auditiva em nível C1.",
        en: "English at CEFR level B2, with listening at C1 level.",
      },
      // Nota de 0 a 100 por habilidade e nível CEFR correspondente
      scores: [
        { skill: { pt: "Leitura", en: "Reading" }, score: 58, level: "B2" },
        { skill: { pt: "Compreensão auditiva", en: "Listening" }, score: 67, level: "C1" },
        { skill: { pt: "Escrita", en: "Writing" }, score: 48, level: "B1" },
        { skill: { pt: "Conversação", en: "Speaking" }, score: 43, level: "B1" },
      ],
    },
    {
      code: "AIF-C01",
      issuer: "Amazon Web Services",
      badge: "assets/aws-ai-practitioner.png",
      name: "AWS Certified AI Practitioner",
      level: { pt: "Foundational", en: "Foundational" },
      status: { pt: "Em andamento", en: "In progress" },
      inProgress: true,
      date: "", // opcional: previsão da prova, ex.: { pt: "dez 2026", en: "Dec 2026" }
      infoUrl: "https://aws.amazon.com/certification/certified-ai-practitioner/",
      summary: {
        pt: "Em preparação para a certificação. Cobre fundamentos de IA e machine learning, IA generativa e modelos de fundação na AWS, IA responsável, segurança e governança.",
        en: "Currently preparing for this certification. It covers AI and machine learning fundamentals, generative AI and foundation models on AWS, responsible AI, security and governance.",
      },
      topics: {
        pt: ["IA generativa", "Amazon Bedrock", "Machine Learning", "IA responsável"],
        en: ["Generative AI", "Amazon Bedrock", "Machine Learning", "Responsible AI"],
      },
    },
  ],

  // Experiência: extraída do LinkedIn (linkedin.com/in/danilolapa), mais recente primeiro
  experience: [
    {
      org: "Aquila Consultoria em Gestão",
      role: { pt: "Cientista de Dados Consultor", en: "Data Scientist Consultant" },
      period: { pt: "abr 2026 · atual", en: "Apr 2026 · present" },
      meta: { pt: "Recife, PE", en: "Recife, Brazil" },
      current: true,
      bullets: {
        pt: [
          "Soluções de Ciência de Dados e IA para a plataforma de monitoramento municipal em tempo real do Centro de Operações do Recife: mobilidade urbana, risco climático e decisão operacional.",
          "Classificação de risco climático de ponta a ponta com Python, Pandas, clusterização meteorológica e matrizes de decisão ponderadas, identificando riscos quase em tempo real.",
          "Modelo de detecção de anomalias de trânsito em tempo real com dados do Waze, agilizando a identificação de incidentes e a alocação de recursos.",
          "Soluções baseadas em LLM integradas aos fluxos analíticos e plataforma web para servir modelos com React, FastAPI, PostgreSQL e Docker.",
        ],
        en: [
          "Data Science and AI solutions for the Recife Operations Center's real time municipal monitoring platform: urban mobility, climate risk and operational decisions.",
          "End to end climate risk classification with Python, Pandas, meteorological clustering and weighted decision matrices, flagging weather risks in near real time.",
          "Real time traffic anomaly detection model using live Waze data, speeding up incident identification and resource allocation.",
          "LLM based solutions integrated into analytical workflows, plus a web platform for serving models with React, FastAPI, PostgreSQL and Docker.",
        ],
      },
    },
    {
      org: "FH Data Analysis",
      role: { pt: "Cientista de Dados", en: "Data Scientist" },
      period: { pt: "mai 2024 · abr 2026", en: "May 2024 · Apr 2026" },
      meta: { pt: "Tempo integral · Híbrido", en: "Full-time · Hybrid" },
      bullets: {
        pt: [
          "Modelo de otimização de rotas para um cliente da indústria química, contribuindo para uma redução de 10% no custo de frete de ponta a ponta.",
          "Automação de relatórios semanais para clientes nacionais com ingestão via API, dashboards em Power BI e aplicações em Docker, eliminando cerca de três dias de trabalho manual por semana.",
          "Gestão dos repositórios GitHub da empresa, com padrões de código e revisão de pull requests.",
          "Interface técnica com clientes corporativos: levantamento de requisitos e apresentação de soluções analíticas.",
        ],
        en: [
          "Route optimization model for a chemical industry client, contributing to a 10% reduction in end to end freight costs.",
          "Automated weekly reporting for national clients with API ingestion, Power BI dashboards and Dockerized apps, saving about three days of manual work per week.",
          "Managed the company's GitHub repositories, introducing coding standards and pull request reviews.",
          "Led technical conversations with corporate clients: gathering requirements and presenting analytical solutions.",
        ],
      },
    },
    {
      org: "Centro de Informática · UFPE",
      role: { pt: "Monitor de Ciência de Dados", en: "Teaching Assistant, Data Science" },
      period: { pt: "set 2025 · dez 2025", en: "Sep 2025 · Dec 2025" },
      meta: { pt: "Meio período · Híbrido", en: "Part-time · Hybrid" },
      bullets: {
        pt: [
          "Mentoria prática para turmas de até 30 alunos em projetos completos de Ciência de Dados com CRISP-DM.",
          "Orientação em EDA, engenharia de atributos, modelagem e avaliação, com melhora média de 30% no desempenho dos modelos em relação às baselines.",
          "Cinco projetos com dados reais em oito semanas; apresentações finais com 90% de feedback positivo.",
        ],
        en: [
          "Hands on mentoring for classes of up to 30 students through end to end Data Science projects with CRISP-DM.",
          "Guided EDA, feature engineering, modeling and evaluation, with a 30% average improvement in model performance over baselines.",
          "Five projects on real world data in eight weeks; final presentations with 90% positive feedback.",
        ],
      },
    },
    {
      org: "Centro de Informática · UFPE",
      role: { pt: "Iniciação Científica · IA & Interfaces de Voz", en: "Undergraduate Researcher · AI & Voice Interfaces" },
      period: { pt: "jan 2025 · dez 2025", en: "Jan 2025 · Dec 2025" },
      meta: { pt: "Presencial", en: "On-site" },
      bullets: {
        pt: [
          "Interface de comando por voz em tempo real para equipamento dermatológico de precisão com Python e Whisper, reduzindo em cerca de 50% a latência de configuração nos testes.",
          "Pipeline de NLP sobre as transcrições do Whisper para extrair parâmetros falados e convertê-los em comandos estruturados para a API do equipamento.",
        ],
        en: [
          "Real time speech to command interface for precision dermatological equipment with Python and Whisper, cutting setup latency by about 50% in testing.",
          "NLP pipeline over Whisper transcriptions to extract spoken parameters and turn them into structured commands for the equipment's API.",
        ],
      },
    },
    {
      org: "Universidade Federal de Pernambuco",
      role: { pt: "Iniciação Científica · Ciência de Dados & ML", en: "Undergraduate Researcher · Data Science & ML" },
      period: { pt: "fev 2024 · jun 2025", en: "Feb 2024 · Jun 2025" },
      meta: { pt: "Bolsa CNPq · Híbrido", en: "CNPq funded · Hybrid" },
      bullets: {
        pt: [
          "Pesquisa em ML para previsão espaço-temporal de Dengue, Zika e Chikungunya com dados públicos do INMET, APAC e SINAN/SUS.",
          "Modelos de regressão e classificação (MLP, SVM e regressão estatística) para previsão de casos e apoio à decisão clínica, com validação cruzada.",
          "Resultados apresentados em simpósio acadêmico.",
        ],
        en: [
          "ML research on spatiotemporal forecasting of Dengue, Zika and Chikungunya using public data from INMET, APAC and SINAN/SUS.",
          "Regression and classification models (MLP, SVM and statistical regression) for case forecasting and clinical decision support, with cross validation.",
          "Findings presented at an academic research symposium.",
        ],
      },
    },
    {
      org: "FH Data Analysis",
      role: { pt: "Estagiário de Ciência de Dados", en: "Data Science Intern" },
      period: { pt: "abr 2024 · mai 2024", en: "Apr 2024 · May 2024" },
      meta: { pt: "Estágio", en: "Internship" },
      bullets: {
        pt: [
          "Consumo de APIs, preparação de dados, análise exploratória e relatórios automatizados em Power BI.",
          "MVPs analíticos para validar requisitos de negócio antes da implementação completa.",
        ],
        en: [
          "API data consumption, data preparation, exploratory analysis and automated Power BI reports.",
          "Analytical MVPs to validate business requirements before full implementation.",
        ],
      },
    },
    {
      org: "Centro de Informática · UFPE",
      role: { pt: "Monitor de Introdução à Programação", en: "Teaching Assistant, Introduction to Programming" },
      period: { pt: "jun 2023 · jun 2024", en: "Jun 2023 · Jun 2024" },
      meta: { pt: "Meio período · Híbrido", en: "Part-time · Hybrid" },
      bullets: {
        pt: [
          "Suporte em Python para turmas de até 40 alunos, com aumento de 25% na conclusão das listas de laboratório.",
          "Exercícios contextualizados que elevaram em 30% os acertos nas avaliações semanais, e mentoria no projeto final de POO com 95% de entregas no prazo.",
        ],
        en: [
          "Python support for classes of up to 40 students, raising lab assignment completion by 25%.",
          "Contextualized exercises that raised weekly assessment scores by 30%, and mentoring on the final OOP project with 95% on time delivery.",
        ],
      },
    },
  ],

  skills: [
    { group: { pt: "Linguagens", en: "Languages" }, items: ["Python", "R", "SQL", "TypeScript"] },
    { group: { pt: "ML & Estatística", en: "ML & Statistics" }, items: ["scikit-learn", "Modelagem preditiva", "NLP", "LLMs", "Análise estatística"] },
    { group: { pt: "Dados & Cloud", en: "Data & Cloud" }, items: ["Google Cloud", "BigQuery", "Cloud Run", "Azure ML", "dbt", "Docker"] },
    { group: { pt: "Frontend & Viz", en: "Frontend & Viz" }, items: ["React", "Streamlit", "Power BI", "Análise geoespacial", "Dataviz"] },
  ],

  contact: {
    phone: "+55 81 99503-6268",
    email: "danwanderleylapa@gmail.com",
    linkedin: "https://www.linkedin.com/in/danilolapa/",
    github: "https://github.com/Danilo-Lapa11",
  },
};
