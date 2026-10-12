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
    roles: ["Data Scientist", "Machine Learning Engineer", "Applied AI"],
    headline: {
      pt: "Transformo dados em *decisões* e produtos de IA.",
      en: "I turn data into *decisions* and AI products.",
    },
    lead: {
      pt: "Cientista de dados pleno em Recife, construindo soluções de ponta a ponta, de pipelines e modelagem preditiva a LLMs e visualização geoespacial. Gosto de problemas com impacto real, especialmente em civic tech e dados públicos.",
      en: "Mid-level data scientist in Recife, building end-to-end solutions, from pipelines and predictive modeling to LLMs and geospatial visualization. I'm drawn to problems with real impact, especially civic tech and public data.",
    },
    available: {
      pt: "Disponível para colaborações & projetos",
      en: "Open to collaborations & projects",
    },
  },

  about: {
    title: {
      pt: "Da engenharia de dados ao modelo em produção.",
      en: "From data engineering to models in production.",
    },
    paragraphs: {
      pt: [
        "Sou **Cientista de Dados Pleno** baseado em Recife, com experiência ao longo de toda a stack de dados: engenharia em Python, modelagem de machine learning, análise estatística em R e frontend em React/TypeScript.",
        "Atualmente trabalho na **Aquila Consultoria em Gestão**, com foco em projetos de **civic tech** e **análise geoespacial**, usando dados para apoiar decisões públicas. Antes disso, passei dois anos na **FH Data**, onde construí modelos de otimização, automações de relatórios e pipelines de dados para clientes nacionais.",
        "Sou graduado em **Ciência da Computação pela UFPE** e coautor de uma publicação peer-reviewed sobre **previsão de arboviroses** (J. Health Inform., 2024). Gosto de projetos que unem rigor estatístico e produto, do notebook ao deploy.",
      ],
      en: [
        "I'm a **Mid-level Data Scientist** based in Recife, working across the whole data stack: data engineering in Python, machine learning modeling, statistical analysis in R and frontend in React/TypeScript.",
        "I currently work at **Aquila Consultoria em Gestão**, focused on **civic tech** and **geospatial analysis**, using data to support public decisions. Before that, I spent two years at **FH Data**, building optimization models, reporting automation and data pipelines for national clients.",
        "I hold a **B.Sc. in Computer Science from UFPE** and co-authored a peer-reviewed paper on **arbovirus forecasting** (J. Health Inform., 2024). I enjoy projects that combine statistical rigor and product, from notebook to deploy.",
      ],
    },
    facts: [
      { k: { pt: "Função", en: "Role" }, v: { pt: "Cientista de Dados Consultor", en: "Data Scientist Consultant" } },
      { k: { pt: "Atual", en: "Now" }, v: { pt: "Aquila Consultoria", en: "Aquila Consultoria" } },
      { k: { pt: "Foco", en: "Focus" }, v: { pt: "Civic tech & Geo", en: "Civic tech & Geo" } },
      { k: { pt: "Cloud", en: "Cloud" }, v: { pt: "GCP · Azure", en: "GCP · Azure" } },
      { k: { pt: "Base", en: "Based in" }, v: { pt: "Recife, PE", en: "Recife, Brazil" } },
    ],
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

  // Outros repositórios. cat: "ml" | "data" | "eng"
  moreRepos: [
    { repo: "logistics-costs-prediction", cat: "ml", lang: "Jupyter",
      desc: { pt: "Previsão de custos logísticos com modelos de machine learning.", en: "Forecasting logistics costs with machine learning models." } },
    { repo: "covertype_classification", cat: "ml", lang: "Jupyter",
      desc: { pt: "Busca de hiperparâmetros para otimizar modelos no dataset Covertype.", en: "Hyperparameter search to tune models on the Covertype dataset." } },
    { repo: "tabular-letter-recognition", cat: "ml", lang: "Jupyter",
      desc: { pt: "Classificação multiclasse de letras a partir de atributos tabulares, seguindo CRISP-DM.", en: "Multiclass letter classification from tabular features, following CRISP-DM." } },
    { repo: "Ionosphere_Classification", cat: "ml", lang: "Jupyter",
      desc: { pt: "Classificação de sinais de radar no dataset Ionosphere.", en: "Radar signal classification on the Ionosphere dataset." } },
    { repo: "covid-19_prediction", cat: "ml", lang: "Jupyter",
      desc: { pt: "Previsão do número de casos de COVID-19 para o mês seguinte.", en: "Forecasting next month's COVID-19 case count." } },
    { repo: "Find-Bank-Score", cat: "ml", lang: "Jupyter",
      desc: { pt: "Modelo de IA para estimar score bancário na concessão de crédito.", en: "AI model to estimate bank credit scores for lending." } },
    { repo: "MBTF_Statistical_Inference", cat: "data", lang: "Jupyter",
      desc: { pt: "Testes de hipótese para verificar se o MTBF de servidores está acima do esperado.", en: "Hypothesis tests to check whether server MTBF is above target." } },
    { repo: "PowerBI-Sales-Profit-Report", cat: "data", lang: "Power BI",
      desc: { pt: "Dashboard interativo com relatórios de vendas e lucro.", en: "Interactive dashboard with sales and profit reports." } },
    { repo: "ETL-Scrapy-Streamlit", cat: "data", lang: "Python",
      desc: { pt: "Pipeline de ETL com raspagem via Scrapy e visualização em Streamlit.", en: "ETL pipeline scraping with Scrapy and visualizing in Streamlit." } },
    { repo: "Streamlit-App", cat: "data", lang: "Python",
      desc: { pt: "Coleta de dados de mercado via API e app de visualização em Streamlit.", en: "Market data pulled from an API into a Streamlit visualization app." } },
    { repo: "File_Transfer_Chat", cat: "eng", lang: "Python",
      desc: { pt: "Transferência de arquivos via UDP e chat com transferência confiável RDT 3.0.", en: "UDP file transfer and a chat with reliable RDT 3.0 delivery." } },
    { repo: "Kruskal-Algorithm", cat: "eng", lang: "Python",
      desc: { pt: "Algoritmo de Kruskal aplicado a uma base pública real para encontrar a árvore geradora mínima.", en: "Kruskal's algorithm on a real public dataset to find the minimum spanning tree." } },
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
  //  CERTIFICAÇÕES: para adicionar outra, copie o bloco abaixo.
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
      date: { pt: "mar 2025", en: "Mar 2025" },
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
      date: "", // TODO: data de emissão
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
    email: "danwanderleylapa@gmail.com",
    linkedin: "https://www.linkedin.com/in/danilolapa/",
    github: "https://github.com/Danilo-Lapa11",
  },
};
