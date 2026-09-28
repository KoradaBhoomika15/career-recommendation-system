import { Career } from '../types';

export const technicalCareers: Career[] = [
  {
    id: 'ai-ml-engineer',
    slug: 'ai-ml-engineer',
    title: 'AI & Machine Learning Engineer',
    category: 'Artificial Intelligence',
    field: 'Data & AI',
    summary: 'Design, train, and deploy intelligent neural architectures, LLMs, and computer vision models into real-world software.',
    description: 'AI & Machine Learning Engineers bridge the gap between theoretical algorithms and scalable production software. You will formulate predictive systems, fine-tune transformer models, design neural networks, and deploy MLOps pipelines powering automation across industries.',
    salaryRangeINR: {
      entry: '₹8,00,000 - ₹12,00,000',
      mid: '₹14,00,000 - ₹24,00,000',
      senior: '₹28,00,000 - ₹50,00,000+',
      averageDisplay: '₹18,50,000 / yr'
    },
    jobRoles: ['ML Engineer', 'AI Research Engineer', 'Deep Learning Specialist', 'MLOps Architect', 'LLM Engineer'],
    tags: ['AI', 'Technology', 'Data', 'Science', 'Engineering', 'Problem Solving'],
    requiredSkills: [
      { name: 'Python', weight: 0.28, minLevel: 7 },
      { name: 'Math', weight: 0.22, minLevel: 6 },
      { name: 'Problem Solving', weight: 0.20, minLevel: 7 },
      { name: 'SQL', weight: 0.15, minLevel: 5 },
      { name: 'Leadership', weight: 0.08, minLevel: 3 },
      { name: 'Communication', weight: 0.07, minLevel: 5 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Foundation',
        duration: '0 - 3 Months',
        subtitle: 'Python Mastery, Linear Algebra & Statistics',
        description: 'Establish rigorous coding fluencies in Python along with foundational mathematical pillars including vector calculus, matrices, and probability.',
        skillsToLearn: ['Python OOP', 'NumPy & Pandas', 'Linear Algebra', 'Multivariate Calculus', 'Probability & Inferential Statistics'],
        resources: [
          { title: 'CS50 Python Programming', provider: 'Harvard University', url: 'https://cs50.harvard.edu/python/', free: true },
          { title: 'Essence of Linear Algebra', provider: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', free: true },
          { title: 'Scientific Computing with Python', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', free: true }
        ],
        projectIdea: 'Build a Statistical Exploratory Data Analysis (EDA) engine that parses any CSV and computes correlation matrices with Seaborn heatmaps.',
        keyDeliverables: ['GitHub repository with 5 data analysis notebooks', 'Modular Python math library']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Core Machine Learning',
        duration: '3 - 6 Months',
        subtitle: 'Classical Algorithms & Scikit-Learn',
        description: 'Understand the mathematical mechanics of supervised and unsupervised learning, cost functions, gradient descent, and cross-validation.',
        skillsToLearn: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Support Vector Machines', 'Feature Engineering', 'Clustering (K-Means, DBSCAN)'],
        resources: [
          { title: 'Machine Learning Specialization', provider: 'Coursera (Andrew Ng / DeepLearning.AI)', url: 'https://www.coursera.org/specializations/machine-learning-introduction', free: true },
          { title: 'Scikit-Learn Tutorial Series', provider: 'Corey Schafer YouTube', url: 'https://www.youtube.com/user/schafer5', free: true },
          { title: 'Kaggle Learn Micro-Courses', provider: 'Kaggle', url: 'https://www.kaggle.com/learn', free: true }
        ],
        projectIdea: 'Customer Churn Predictor API using Random Forest and XGBoost with automated hyperparameter tuning via Optuna.',
        keyDeliverables: ['Trained model artifact with >88% ROC-AUC', 'Interactive Streamlit inference interface']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Deep Learning & Vision/NLP',
        duration: '6 - 9 Months',
        subtitle: 'PyTorch, CNNs, RNNs & Attention Mechanisms',
        description: 'Dive into neural architectures, backpropagation, convolutional networks for images, and recurrent/transformer mechanisms for language.',
        skillsToLearn: ['PyTorch Fundamentals', 'Convolutional Neural Networks', 'Word Embeddings & Transformers', 'Hugging Face Ecosystem', 'Transfer Learning'],
        resources: [
          { title: 'Practical Deep Learning for Coders', provider: 'fast.ai', url: 'https://course.fast.ai/', free: true },
          { title: 'Deep Learning Specialization', provider: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/', free: true },
          { title: 'Hugging Face NLP Course', provider: 'Hugging Face', url: 'https://huggingface.co/learn/nlp-course', free: true }
        ],
        projectIdea: 'Semantic Search Engine & Document Summarizer utilizing distilled BERT embeddings and FAISS vector indexing.',
        keyDeliverables: ['FastAPI microservice serving embeddings', 'FAISS vector search cluster benchmark']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: LLMs, GenAI & MLOps',
        duration: '9 - 12 Months',
        subtitle: 'RAG Systems, Fine-Tuning, Docker & MLflow',
        description: 'Master production deployment, model drift monitoring, Retrieval-Augmented Generation (RAG), and containerized inference pipelines.',
        skillsToLearn: ['RAG Pipeline Architecture', 'LoRA / QLoRA Fine-tuning', 'Docker & Containerization', 'MLflow & Experiment Tracking', 'ONNX / TensorRT Acceleration'],
        resources: [
          { title: 'Full Stack Deep Learning Course', provider: 'UC Berkeley FSDL', url: 'https://fullstackdeeplearning.com/', free: true },
          { title: 'Docker for Data Science & ML', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true }
        ],
        projectIdea: 'Enterprise Knowledge Assistant with hybrid vector + keyword retrieval, reranking, and quantized open-weights LLM inference.',
        keyDeliverables: ['Dockerized multi-container app on Cloud Run', 'Continuous CI/CD pipeline evaluating hallucination metrics']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Job Ready & Industry Portfolio',
        duration: '12+ Months',
        subtitle: 'System Design, LeetCode & Open Source',
        description: 'Polishing your portfolio, conquering machine learning system design questions, and conducting mock technical interviews.',
        skillsToLearn: ['ML System Design', 'Data Structures in Python', 'Latency Optimization', 'Portfolio Presentation', 'Behavioral STAR Method'],
        resources: [
          { title: 'Machine Learning System Design Interview', provider: 'Khaled El-Mously & Chip Huyen Guide', url: 'https://github.com/chiphuyen/machine-learning-systems-design', free: true },
          { title: 'NeetCode Algorithms Series', provider: 'NeetCode', url: 'https://neetcode.io/', free: true }
        ],
        projectIdea: 'Production-grade end-to-end ML platform featuring live telemetry, A/B model testing, and automated model registry.',
        keyDeliverables: ['Clean portfolio website showcasing 3 flagship projects', 'Curated ATS-optimized resume']
      }
    ],
    courses: [
      { id: 'cs50-ai', title: 'CS50 Intro to Artificial Intelligence', provider: 'Harvard University', duration: '7 weeks', level: 'Beginner', isFree: true, link: 'https://cs50.harvard.edu/ai/', description: 'Foundational search algorithms, minimax, probability models, neural networks, and Markov chains.' },
      { id: 'fastai-dl', title: 'Practical Deep Learning for Coders', provider: 'fast.ai', duration: '8 weeks', level: 'Intermediate', isFree: true, link: 'https://course.fast.ai/', description: 'Top-down pragmatic deep learning for computer vision, tabular data, and NLP with PyTorch.' },
      { id: 'dl-specialization', title: 'Deep Learning Specialization', provider: 'Coursera / DeepLearning.AI', duration: '12 weeks', level: 'Intermediate', isFree: true, link: 'https://www.coursera.org/specializations/deep-learning', description: 'Master neural networks, CNNs, sequence models, and hyperparameter tuning from Andrew Ng.' },
      { id: 'huggingface-nlp', title: 'Hugging Face Transformers Mastery', provider: 'Hugging Face', duration: '6 weeks', level: 'Advanced', isFree: true, link: 'https://huggingface.co/learn/nlp-course', description: 'Comprehensive guide to building, training, and fine-tuning state-of-the-art transformer pipelines.' }
    ],
    technologies: [
      { id: 'pytorch', name: 'PyTorch', category: 'Deep Learning Framework', popularity: 96, learningCurve: 'Medium', whyImportant: 'De-facto industry standard for AI research and modern production LLMs.' },
      { id: 'transformers', name: 'Hugging Face Transformers', category: 'GenAI & NLP', popularity: 94, learningCurve: 'Medium', whyImportant: 'Powers 90% of open-source language and multimodal models today.' },
      { id: 'docker', name: 'Docker & MLOps', category: 'Deployment', popularity: 91, learningCurve: 'Medium', whyImportant: 'Ensures reproducible dependencies across GPU training nodes and cloud servers.' },
      { id: 'scikit-learn', name: 'Scikit-Learn', category: 'Classical Machine Learning', popularity: 95, learningCurve: 'Low', whyImportant: 'Essential for structured tabular datasets, regression, and baseline benchmarks.' }
    ],
    books: [
      { id: 'handson-ml', title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', author: 'Aurélien Géron', year: '2023 (3rd Ed)', description: 'The absolute gold-standard practical guide through concrete examples and minimal theory.', keyTakeaway: 'Master intuition by coding end-to-end pipelines from raw data to deployed model.' },
      { id: 'designing-ml-systems', title: 'Designing Machine Learning Systems', author: 'Chip Huyen', year: '2022', description: 'Holistic guide to data engineering, training, continual learning, and production tradeoffs.', keyTakeaway: 'Good ML in production is 80% data systems and 20% model selection.' },
      { id: 'deep-learning-book', title: 'Deep Learning', author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville', year: '2016', description: 'Definitive theoretical textbook on modern deep learning mathematics and probability.', keyTakeaway: 'Gives profound mathematical clarity on loss surfaces and gradient mechanics.' }
    ],
    movies: [
      { id: 'alphago', title: 'AlphaGo', type: 'Documentary', year: '2017', description: 'Riveting chronicling of DeepMind’s Go match against champion Lee Sedol.', relevance: 'Demonstrates reinforcement learning, Monte Carlo tree search, and human-AI interplay.' },
      { id: 'the-imitation-game', title: 'The Imitation Game', type: 'Movie', year: '2014', description: 'Alan Turing and his team breaking the Enigma code at Bletchley Park.', relevance: 'The birth of universal computing machines and artificial intelligence.' },
      { id: 'ex-machina', title: 'Ex Machina', type: 'Movie', year: '2014', description: 'A programmer tests the artificial consciousness of an advanced humanoid robot.', relevance: 'Provocative exploration of the Turing test, ethics, and neural autonomy.' }
    ]
  },
  {
    id: 'data-analyst',
    slug: 'data-analyst',
    title: 'Data Analyst & BI Specialist',
    category: 'Data & Analytics',
    field: 'Data & AI',
    summary: 'Transform raw multi-source data into compelling visual dashboards, actionable business intelligence, and growth strategies.',
    description: 'Data Analysts are the storytellers of the enterprise. By extracting insights from complex transactional and behavioral records, you empower executives, product teams, and marketers to make evidence-based decisions.',
    salaryRangeINR: {
      entry: '₹4,50,000 - ₹7,00,000',
      mid: '₹8,00,000 - ₹14,00,000',
      senior: '₹16,00,000 - ₹28,00,000',
      averageDisplay: '₹10,50,000 / yr'
    },
    jobRoles: ['Data Analyst', 'BI Developer', 'Insights Specialist', 'Analytics Consultant', 'Reporting Lead'],
    tags: ['Data', 'Technology', 'Business', 'Problem Solving', 'Communication'],
    requiredSkills: [
      { name: 'SQL', weight: 0.30, minLevel: 7 },
      { name: 'Problem Solving', weight: 0.22, minLevel: 6 },
      { name: 'Python', weight: 0.18, minLevel: 5 },
      { name: 'Communication', weight: 0.16, minLevel: 6 },
      { name: 'Math', weight: 0.14, minLevel: 5 }
    ],
    difficulty: 'Beginner',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill', 'Explore options'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Excel & Advanced Analytics',
        duration: '0 - 2 Months',
        subtitle: 'Spreadsheet Modeling & Pivot Intelligence',
        description: 'Build spreadsheet foundations with Power Query, advanced formula syntax (XLOOKUP, INDEX/MATCH), and financial forecasting.',
        skillsToLearn: ['Power Query', 'Data Cleaning Formulas', 'Pivot Tables & Charts', 'Statistical Summaries', 'Conditional Formatting'],
        resources: [
          { title: 'Excel for Data Analysis', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Chandoo Excel Masterclass', provider: 'YouTube (Chandoo)', url: 'https://www.youtube.com/user/chandoovg', free: true }
        ],
        projectIdea: 'Retail sales performance tracker with dynamic KPI cards, conditional profit margins, and cohort drill-downs.',
        keyDeliverables: ['Interactive multi-sheet dashboard', 'Documentation of business KPIs']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Relational Databases & SQL',
        duration: '2 - 5 Months',
        subtitle: 'Advanced Querying, Window Functions & CTEs',
        description: 'Query enterprise SQL databases effortlessly using multi-table joins, subqueries, Common Table Expressions (CTEs), and ranking functions.',
        skillsToLearn: ['INNER/LEFT/FULL JOINs', 'Aggregate Grouping & Filtering', 'Window Functions (ROW_NUMBER, LEAD/LAG)', 'CTEs and Views', 'Query Optimization'],
        resources: [
          { title: 'SQL Murder Mystery', provider: 'Knight Lab', url: 'https://mystery.knightlab.com/', free: true },
          { title: 'PostgreSQL Tutorial', provider: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', free: true },
          { title: 'Khan Academy SQL Course', provider: 'Khan Academy', url: 'https://www.khanacademy.org/computing/computer-programming/sql', free: true }
        ],
        projectIdea: 'E-commerce transactional database audit revealing customer retention rates, repeat buyer patterns, and basket analysis.',
        keyDeliverables: ['SQL script portfolio with 15 complex business queries', 'ERD diagram']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Business Intelligence (Power BI & Tableau)',
        duration: '5 - 8 Months',
        subtitle: 'Interactive Dashboards & Data Storytelling',
        description: 'Model star schemas, author DAX calculations, and craft intuitive executive dashboards that solve executive inquiries.',
        skillsToLearn: ['Power BI / Tableau Desktop', 'DAX Measures & Calculated Columns', 'Star Schema Data Modeling', 'Visual Hierarchy & Palette Choice', 'Automated Scheduled Refreshes'],
        resources: [
          { title: 'Power BI Full Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Tableau Public Community Guides', provider: 'Tableau', url: 'https://public.tableau.com/', free: true }
        ],
        projectIdea: 'Executive SaaS Metric Cockpit detailing MRR, Churn, LTV, CAC payback period, and customer support SLA velocity.',
        keyDeliverables: ['Published interactive Tableau Public or Power BI dashboard', 'Slide deck presentation for stakeholders']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Python for Analytics',
        duration: '8 - 10 Months',
        subtitle: 'Automated Scraping, Cleaning & Hypothesis Testing',
        description: 'Expand analytical powers by parsing APIs, performing automated ETL, and running statistical hypothesis tests (A/B testing, t-tests).',
        skillsToLearn: ['Pandas & NumPy data wrangling', 'Seaborn & Plotly interactive graphs', 'A/B Testing Frameworks', 'Jupyter Notebooks', 'Automated reporting scripts'],
        resources: [
          { title: 'Data Analysis with Python', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/', free: true },
          { title: 'StatQuest with Josh Starmer', provider: 'YouTube', url: 'https://www.youtube.com/c/joshstarmer', free: true }
        ],
        projectIdea: 'Automated Web Scraper & Price Elasticity Analyzer that alerts on competitor discount movements in real-time.',
        keyDeliverables: ['End-to-end Python pipeline script', 'Comprehensive A/B test analysis write-up']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Portfolio & Business Case Interviews',
        duration: '10 - 12 Months',
        subtitle: 'Case Studies, Business Acumen & Mock Interviews',
        description: 'Package your dashboards into a clean portfolio website, practice live SQL whiteboard challenges, and explain business implications.',
        skillsToLearn: ['Product Sense & Metrics', 'SQL Live Interview Challenges', 'Executive Communication', 'Resume Tailoring', 'Data Governance'],
        resources: [
          { title: 'StrataScratch SQL Interview Questions', provider: 'StrataScratch', url: 'https://www.stratascratch.com/', free: true },
          { title: 'Data Interview Pro by Emma Ding', provider: 'YouTube', url: 'https://www.youtube.com/c/EmmaDing', free: true }
        ],
        projectIdea: 'Comprehensive Data Case Study addressing why a fictional streaming service is losing active subscribers in tier-2 cities.',
        keyDeliverables: ['Case study report with recommendations', 'GitHub repository with clean READMEs']
      }
    ],
    courses: [
      { id: 'fcc-sql', title: 'Relational Database & SQL Certification', provider: 'freeCodeCamp', duration: '8 weeks', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/learn/relational-database/', description: 'Interactive command-line Bash, PostgreSQL, and Git hands-on curriculum.' },
      { id: 'google-data-analytics', title: 'Google Data Analytics Certificate (Free Audit)', provider: 'Coursera', duration: '10 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/professional-certificates/google-data-analytics', description: 'Industry-standard intro to spreadsheets, SQL, R programming, and data ethics.' },
      { id: 'alex-the-analyst', title: 'Data Analyst Bootcamp', provider: 'YouTube (Alex The Analyst)', duration: '6 weeks', level: 'Beginner', isFree: true, link: 'https://www.youtube.com/c/AlexTheAnalyst', description: 'Practical roadmaps, real-world portfolio projects, and interview coaching.' },
      { id: 'ab-testing-udacity', title: 'A/B Testing by Google', provider: 'Udacity', duration: '4 weeks', level: 'Intermediate', isFree: true, link: 'https://www.udacity.com/course/ab-testing--ud257', description: 'Learn the principles of designing online controlled experiments.' }
    ],
    technologies: [
      { id: 'sql', name: 'PostgreSQL & BigQuery', category: 'Databases', popularity: 98, learningCurve: 'Low', whyImportant: 'Universal language for querying data across every modern company.' },
      { id: 'powerbi', name: 'Microsoft Power BI', category: 'Business Intelligence', popularity: 93, learningCurve: 'Low', whyImportant: 'Leading enterprise reporting tool integrated across Microsoft ecosystems.' },
      { id: 'pandas', name: 'Python (Pandas & Plotly)', category: 'Analytics Code', popularity: 92, learningCurve: 'Medium', whyImportant: 'Automates manual tasks and generates interactive charts.' },
      { id: 'excel', name: 'Advanced Excel & Power Query', category: 'Spreadsheets', popularity: 90, learningCurve: 'Low', whyImportant: 'Indispensable tool for quick financial checks and cross-team sharing.' }
    ],
    books: [
      { id: 'storytelling-with-data', title: 'Storytelling with Data', author: 'Cole Nussbaumer Knaflic', year: '2015', description: 'A data visualization guide for business professionals on eliminating visual clutter.', keyTakeaway: 'Focus audience attention using deliberate contrast, clean charts, and clear headlines.' },
      { id: 'sql-for-data-analysis', title: 'SQL for Data Analysis', author: 'Cathy Tanimura', year: '2021', description: 'Teaches data analysts how to think in SQL to solve complex business problems.', keyTakeaway: 'Window functions and cohort retention matrices reveal hidden behavioral trends.' },
      { id: 'lean-analytics', title: 'Lean Analytics', author: 'Alistair Croll & Benjamin Yoskovitz', year: '2013', description: 'How to use data to build a better startup faster with One Metric That Matters (OMTM).', keyTakeaway: 'Avoid vanity metrics; measure actions that directly determine business viability.' }
    ],
    movies: [
      { id: 'moneyball', title: 'Moneyball', type: 'Movie', year: '2011', description: 'Billy Beane and Peter Brand use sabermetrics to assemble a competitive baseball team on a shoestring budget.', relevance: 'The quintessential masterclass in questioning conventional dogmas with hard statistical evidence.' },
      { id: 'the-great-hack', title: 'The Great Hack', type: 'Documentary', year: '2019', description: 'Unpacks the Cambridge Analytica scandal and data weaponization.', relevance: 'Highlights data governance, consumer consent, and ethical responsibilities of analysts.' },
      { id: 'margin-call', title: 'Margin Call', type: 'Movie', year: '2011', description: 'A 24-hour thriller at an investment bank discovering lethal risk in volatility calculations.', relevance: 'Demonstrates what happens when risk models break and why analysts must communicate clearly.' }
    ]
  },
  {
    id: 'full-stack-developer',
    slug: 'full-stack-developer',
    title: 'Full Stack Web Developer',
    category: 'Software Engineering',
    field: 'Technical',
    summary: 'Build responsive web apps, intuitive client interfaces, and robust backend APIs from design to production deployment.',
    description: 'Full Stack Developers create complete digital experiences. You will write reactive user interfaces, architect microservices and REST/GraphQL APIs, manage relational databases, and deploy cloud hosting systems with high uptime.',
    salaryRangeINR: {
      entry: '₹5,50,000 - ₹9,00,000',
      mid: '₹10,00,000 - ₹18,00,000',
      senior: '₹20,00,000 - ₹38,00,000',
      averageDisplay: '₹14,00,000 / yr'
    },
    jobRoles: ['Full Stack Engineer', 'Frontend Engineer', 'Backend Developer', 'Software Engineer', 'Web Architect'],
    tags: ['Engineering', 'Technology', 'Design', 'Problem Solving'],
    requiredSkills: [
      { name: 'Problem Solving', weight: 0.25, minLevel: 7 },
      { name: 'SQL', weight: 0.18, minLevel: 6 },
      { name: 'Design', weight: 0.18, minLevel: 5 },
      { name: 'Python', weight: 0.14, minLevel: 5 },
      { name: 'Communication', weight: 0.15, minLevel: 5 },
      { name: 'Creativity', weight: 0.10, minLevel: 5 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Semantic Web & Modern JavaScript',
        duration: '0 - 3 Months',
        subtitle: 'HTML5, CSS3, ES6+ & TypeScript Basics',
        description: 'Build foundational web knowledge: DOM manipulation, asynchronous programming, Tailwind styling, and strong typing.',
        skillsToLearn: ['Semantic HTML & Accessibility', 'Flexbox & CSS Grid', 'Async/Await & Promises', 'TypeScript Basics', 'Git & GitHub Workflow'],
        resources: [
          { title: 'The Odin Project: Foundations', provider: 'The Odin Project', url: 'https://www.theodinproject.com/', free: true },
          { title: 'JavaScript.info Complete Guide', provider: 'Ilya Kantor', url: 'https://javascript.info/', free: true },
          { title: 'freeCodeCamp Responsive Web Design', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', free: true }
        ],
        projectIdea: 'Interactive Task Management Kanban board with drag-and-drop, local storage persistence, and dark mode.',
        keyDeliverables: ['Responsive portfolio site hosted on Vercel', 'Interactive JavaScript Kanban app']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Frontend Engineering with React',
        duration: '3 - 6 Months',
        subtitle: 'Components, Hooks, State Management & Tailwind',
        description: 'Master component-driven architecture, custom hooks, client-side routing, and modern UI libraries.',
        skillsToLearn: ['React 19 & Custom Hooks', 'State Management (Zustand / Redux Toolkit)', 'Tailwind CSS & Motion Animations', 'API Fetching & TanStack Query', 'Unit Testing with Vitest'],
        resources: [
          { title: 'Full Stack Open', provider: 'University of Helsinki', url: 'https://fullstackopen.com/en/', free: true },
          { title: 'React Official Documentation', provider: 'React.dev', url: 'https://react.dev/', free: true }
        ],
        projectIdea: 'Full-featured E-commerce Storefront with client-side search, category filters, cart drawer, and optimistic UI updates.',
        keyDeliverables: ['React + Vite SPA with zero TypeScript errors', 'Comprehensive component test suite']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Server-Side & Database Architecture',
        duration: '6 - 9 Months',
        subtitle: 'Node.js, Express/Fastify, PostgreSQL & Prisma',
        description: 'Design robust backend services, secure JWT authentication, rate limiting, and relational schema migrations.',
        skillsToLearn: ['Node.js & Express / NestJS', 'PostgreSQL & Drizzle/Prisma ORM', 'JWT & OAuth Authentication', 'RESTful API Standards & Swagger', 'Redis Caching'],
        resources: [
          { title: 'Node.js and Express Complete Tutorial', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'PostgreSQL for Developers', provider: 'Prisma Guides', url: 'https://www.prisma.io/dataguide/', free: true }
        ],
        projectIdea: 'Collaborative Workspace API with team RBAC permissions, audit logging, and Redis rate limiters.',
        keyDeliverables: ['Documented REST API with automated integration tests', 'Migrated PostgreSQL schema with foreign keys']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Cloud, Docker & CI/CD Pipelines',
        duration: '9 - 11 Months',
        subtitle: 'DevOps, Containerization & Serverless Deployments',
        description: 'Deploy resilient web systems into cloud infrastructure, configure GitHub Actions CI/CD, and monitor application health.',
        skillsToLearn: ['Docker & Multi-stage builds', 'GitHub Actions Automated CI/CD', 'AWS / Cloud Run Serverless', 'Nginx Reverse Proxies', 'Error Monitoring (Sentry)'],
        resources: [
          { title: 'DevOps for Developers Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Learn Docker in 1 Hour', provider: 'Programming with Mosh', url: 'https://www.youtube.com/c/programmingwithmosh', free: true }
        ],
        projectIdea: 'Containerized SaaS platform with automated preview branches, continuous deployment, and health check alerts.',
        keyDeliverables: ['Production URL with SSL and automated GitHub Action tests', 'Docker Compose staging setup']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: System Design & Career Launch',
        duration: '11 - 12 Months',
        subtitle: 'Scalability Patterns, DSA & Behavioral Rounds',
        description: 'Prepare for top-tier software engineering interviews by mastering load balancers, caching, database sharding, and algorithmic coding.',
        skillsToLearn: ['System Design Fundamentals', 'Data Structures & Algorithms', 'Web Security (OWASP Top 10)', 'Resume Tuning & Open Source contributions'],
        resources: [
          { title: 'System Design Primer', provider: 'Donne Martin GitHub', url: 'https://github.com/donnemartin/system-design-primer', free: true },
          { title: 'Blind 75 LeetCode Solutions', provider: 'NeetCode', url: 'https://neetcode.io/practice', free: true }
        ],
        projectIdea: 'High-concurrency Real-Time Polling Application with WebSockets and distributed Redis pub/sub.',
        keyDeliverables: ['3 production-grade pinned GitHub repos', 'Architecture diagram of your flagship app']
      }
    ],
    courses: [
      { id: 'fullstack-open', title: 'Full Stack Open', provider: 'University of Helsinki', duration: '12 weeks', level: 'Intermediate', isFree: true, link: 'https://fullstackopen.com/en/', description: 'World-renowned university course covering React, Redux, Node, MongoDB/PostgreSQL, and CI/CD.' },
      { id: 'odin-project', title: 'The Odin Project: Full Stack JavaScript', provider: 'The Odin Project', duration: '16 weeks', level: 'Beginner', isFree: true, link: 'https://www.theodinproject.com/', description: 'Free, community-driven full-stack roadmap with hands-on projects and Git practice.' },
      { id: 'cs50w', title: 'CS50’s Web Programming with Python and JavaScript', provider: 'Harvard University', duration: '10 weeks', level: 'Intermediate', isFree: true, link: 'https://cs50.harvard.edu/web/', description: 'Deep dive into database design, scalability, and security from Harvard instructors.' },
      { id: 'traversy-nextjs', title: 'Next.js & Modern Web Masterclass', provider: 'Traversy Media', duration: '4 weeks', level: 'Intermediate', isFree: true, link: 'https://www.youtube.com/c/TraversyMedia', description: 'Server components, server actions, and full-stack React architectures.' }
    ],
    technologies: [
      { id: 'react', name: 'React 19 & TypeScript', category: 'Frontend', popularity: 98, learningCurve: 'Medium', whyImportant: 'Dominant frontend library powering modern web applications.' },
      { id: 'nodejs', name: 'Node.js & Express', category: 'Backend Runtime', popularity: 95, learningCurve: 'Medium', whyImportant: 'Enables high-performance asynchronous JavaScript microservices.' },
      { id: 'postgresql', name: 'PostgreSQL', category: 'Relational Database', popularity: 96, learningCurve: 'Medium', whyImportant: 'Industry-standard relational database with JSON support and rock-solid ACID compliance.' },
      { id: 'tailwind', name: 'Tailwind CSS', category: 'Styling & UX', popularity: 94, learningCurve: 'Low', whyImportant: 'Utility-first framework enabling rapid, responsive interface engineering.' }
    ],
    books: [
      { id: 'ddia', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', year: '2017', description: 'The Bible of backend architecture, replication, partitioning, and distributed transactions.', keyTakeaway: 'Understand the tradeoffs between consistency, availability, and latency in web systems.' },
      { id: 'clean-code', title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: '2008', description: 'Principles, patterns, and practices of writing readable, maintainable software.', keyTakeaway: 'Leave the codebase cleaner than you found it; optimize for developer reading time.' },
      { id: 'you-dont-know-js', title: 'You Don’t Know JS Yet', author: 'Kyle Simpson', year: '2020', description: 'Deep dive into closures, prototypes, asynchronous event loops, and JavaScript internals.', keyTakeaway: 'Mastering language fundamentals turns trial-and-error debugging into precision engineering.' }
    ],
    movies: [
      { id: 'the-social-network', title: 'The Social Network', type: 'Movie', year: '2010', description: 'The rapid ascent of Facebook from a Harvard dorm room project to a global phenomenon.', relevance: 'Captures the sheer creative intensity, rapid iteration, and architecture scaling of software.' },
      { id: 'halt-and-catch-fire', title: 'Halt and Catch Fire', type: 'Series', year: '2014-2017', description: 'The dramatic evolution of the PC revolution, online gaming, and the early World Wide Web.', relevance: 'Inspires deep appreciation for computing pioneers and builders.' },
      { id: 'silicon-valley', title: 'Silicon Valley', type: 'Series', year: '2014-2019', description: 'A group of engineers try to build a revolutionary lossless compression algorithm startup.', relevance: 'Hilariously realistic portrayal of tech stacks, pivot decisions, and engineering tradeoffs.' }
    ]
  },
  {
    id: 'cybersecurity-analyst',
    slug: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst & Ethical Hacker',
    category: 'Information Security',
    field: 'Technical',
    summary: 'Defend enterprise infrastructure, perform penetration testing, analyze threat vectors, and secure digital perimeters.',
    description: 'Cybersecurity Analysts protect networks, cloud workloads, and sensitive customer data against malicious threats. You will configure security information event monitors (SIEM), conduct vulnerability assessments, simulate cyber attacks, and enforce compliance.',
    salaryRangeINR: {
      entry: '₹6,00,000 - ₹9,50,000',
      mid: '₹11,00,000 - ₹19,00,000',
      senior: '₹22,00,000 - ₹42,00,000',
      averageDisplay: '₹15,00,000 / yr'
    },
    jobRoles: ['SOC Analyst', 'Penetration Tester', 'Security Engineer', 'Incident Responder', 'Cloud Security Architect'],
    tags: ['Engineering', 'Technology', 'Problem Solving', 'Science'],
    requiredSkills: [
      { name: 'Problem Solving', weight: 0.28, minLevel: 7 },
      { name: 'Python', weight: 0.20, minLevel: 6 },
      { name: 'SQL', weight: 0.16, minLevel: 5 },
      { name: 'Communication', weight: 0.18, minLevel: 5 },
      { name: 'Leadership', weight: 0.10, minLevel: 4 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Networking & Linux Fundamentals',
        duration: '0 - 3 Months',
        subtitle: 'OSI Model, TCP/IP, Wireshark & Bash',
        description: 'Understand the protocols that power the internet, command-line Linux administration, and packet inspection.',
        skillsToLearn: ['TCP/IP, UDP, DNS, DHCP', 'Linux Terminal & Bash Scripting', 'Packet Analysis with Wireshark', 'Port Scanning with Nmap', 'Firewall Configurations'],
        resources: [
          { title: 'Computer Networking Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'OverTheWire: Bandit (Linux Wargame)', provider: 'OverTheWire', url: 'https://overthewire.org/wargames/bandit/', free: true },
          { title: 'NetworkChuck YouTube Channel', provider: 'NetworkChuck', url: 'https://www.youtube.com/c/NetworkChuck', free: true }
        ],
        projectIdea: 'Home Lab Network with segmented VLANs, packet capture analysis, and automated port scanning script.',
        keyDeliverables: ['Documented home lab topology', 'Bash automation scripts for network audits']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Security Principles & SOC Operations',
        duration: '3 - 6 Months',
        subtitle: 'SIEM Tools, Incident Response & MITRE ATT&CK',
        description: 'Learn defensive blue teaming, log correlation in Splunk, intrusion detection, and threat taxonomy.',
        skillsToLearn: ['SIEM (Splunk / Elastic Security)', 'MITRE ATT&CK Framework', 'Log Analysis & Forensic Investigation', 'Snort / Suricata IDS/IPS', 'Endpoint Detection & Response (EDR)'],
        resources: [
          { title: 'TryHackMe Pre-Security & Cyber Defense', provider: 'TryHackMe', url: 'https://tryhackme.com/', free: true },
          { title: 'Splunk Free Fundamentals', provider: 'Splunk Training', url: 'https://www.splunk.com/en_us/training.html', free: true }
        ],
        projectIdea: 'Deploy a cloud SIEM using Elastic Stack to ingest Windows Event Logs and flag brute-force SSH attacks in real-time.',
        keyDeliverables: ['Live SIEM dashboard with detection alerts', 'Incident report following NIST guidelines']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Web App Penetration Testing',
        duration: '6 - 9 Months',
        subtitle: 'OWASP Top 10, Burp Suite & Vulnerability Exploitation',
        description: 'Switch to the offensive perspective. Master SQL injection, Cross-Site Scripting (XSS), CSRF, and broken authorization testing.',
        skillsToLearn: ['OWASP Top 10 Vulnerabilities', 'Burp Suite Professional / Community', 'SQL Injection & XSS Payloads', 'Authentication Bypass Testing', 'Security Code Review'],
        resources: [
          { title: 'PortSwigger Web Security Academy', provider: 'PortSwigger', url: 'https://portswigger.net/web-security', free: true },
          { title: 'Hack The Box Starting Point', provider: 'Hack The Box', url: 'https://www.hackthebox.com/', free: true }
        ],
        projectIdea: 'Comprehensive security audit report on a vulnerable intentionally flawed web application (OWASP Juice Shop).',
        keyDeliverables: ['Professional pentest report with proof-of-concept steps', 'Remediation code pull requests']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Cloud Security & DevSecOps',
        duration: '9 - 11 Months',
        subtitle: 'IAM, AWS/Azure Security & Container Hardening',
        description: 'Secure cloud workloads, Docker containers, Kubernetes clusters, and automate security linting in CI/CD pipelines.',
        skillsToLearn: ['AWS IAM & CloudTrail Auditing', 'Container Security (Trivy, Falco)', 'Static & Dynamic Security Testing (SAST/DAST)', 'Secrets Management (HashiCorp Vault)', 'Zero Trust Architecture'],
        resources: [
          { title: 'AWS Cloud Security Foundations', provider: 'AWS Skill Builder', url: 'https://explore.skillbuilder.aws/', free: true },
          { title: 'Cloud Security Podcast & Tutorials', provider: 'Cloud Security Podcast', url: 'https://cloudsecuritypodcast.tv/', free: true }
        ],
        projectIdea: 'Automated DevSecOps pipeline that scans pull requests for leaked credentials and vulnerable npm dependencies.',
        keyDeliverables: ['GitHub Actions security workflow', 'Cloud security benchmark assessment']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Certifications & Industry Penetration',
        duration: '11 - 12 Months',
        subtitle: 'CompTIA Security+, BTL1 & Interview Prep',
        description: 'Consolidate practical labs, obtain recognized certifications, practice technical scenario questions, and join bug bounty programs.',
        skillsToLearn: ['CompTIA Security+ / CEH Concepts', 'Scenario-based Incident Response', 'Bug Bounty Methodology', 'CVSS Scoring & Risk Assessment'],
        resources: [
          { title: 'Professor Messer Security+ Course', provider: 'YouTube', url: 'https://www.youtube.com/c/professormesser', free: true },
          { title: 'HackerOne Hacker101', provider: 'HackerOne', url: 'https://www.hacker101.com/', free: true }
        ],
        projectIdea: 'Documented bug bounty disclosure or published walkthrough of 5 retired HackTheBox medium machines.',
        keyDeliverables: ['Public technical writeup blog', 'Verified badge/rank on TryHackMe or HTB']
      }
    ],
    courses: [
      { id: 'portswigger-academy', title: 'Web Security Academy', provider: 'PortSwigger', duration: 'Self-paced', level: 'Intermediate', isFree: true, link: 'https://portswigger.net/web-security', description: 'The ultimate interactive playground for learning modern web application security.' },
      { id: 'tryhackme-fundamentals', title: 'Complete Beginner Cyber Security Pathway', provider: 'TryHackMe', duration: '8 weeks', level: 'Beginner', isFree: true, link: 'https://tryhackme.com/', description: 'Gamified hands-on virtual labs teaching Linux, networks, cryptography, and forensics.' },
      { id: 'cs50-cybersecurity', title: 'CS50 Intro to Cybersecurity', provider: 'Harvard University', duration: '6 weeks', level: 'Beginner', isFree: true, link: 'https://cs50.harvard.edu/cybersecurity/', description: 'Harvard curriculum on privacy, cryptography, defense against phishing, and operational security.' },
      { id: 'prof-messer-secplus', title: 'CompTIA Security+ SY0-701 Training', provider: 'Professor Messer', duration: '5 weeks', level: 'Beginner', isFree: true, link: 'https://www.professormesser.com/', description: 'Free comprehensive modular video course aligned with the global Security+ standard.' }
    ],
    technologies: [
      { id: 'burp-suite', name: 'Burp Suite', category: 'Penetration Testing', popularity: 95, learningCurve: 'Medium', whyImportant: 'Indispensable proxy tool for intercepting and manipulating HTTP/HTTPS requests.' },
      { id: 'wireshark', name: 'Wireshark', category: 'Network Forensics', popularity: 94, learningCurve: 'Medium', whyImportant: 'Deep packet inspection tool utilized across forensic analysis and malware detection.' },
      { id: 'splunk', name: 'Splunk & Elastic SIEM', category: 'Security Monitoring', popularity: 92, learningCurve: 'Medium', whyImportant: 'Aggregates enterprise logs to detect active intrusions and anomalous behavior.' },
      { id: 'metasploit', name: 'Metasploit & Nmap', category: 'Exploitation & Recon', popularity: 90, learningCurve: 'Medium', whyImportant: 'Standard framework for vulnerability scanning and verifying remediation.' }
    ],
    books: [
      { id: 'web-app-hackers-handbook', title: 'The Web Application Hacker’s Handbook', author: 'Dafydd Stuttard & Marcus Pinto', year: '2011', description: 'The timeless manual on discovering and exploiting web application security flaws.', keyTakeaway: 'Always question trust assumptions between client input and server execution.' },
      { id: 'blue-team-handbook', title: 'Blue Team Handbook: Incident Response Edition', author: 'Don Murdoch', year: '2014', description: 'Condenses standard operating procedures, triage checklists, and memory analysis techniques.', keyTakeaway: 'Speed of containment and rigorous evidence preservation determine incident recovery.' },
      { id: 'practical-malware-analysis', title: 'Practical Malware Analysis', author: 'Michael Sikorski & Andrew Honig', year: '2012', description: 'Hands-on guide to dissecting malicious binaries, sandboxing, and disassembly.', keyTakeaway: 'Static and dynamic analysis reveal intent without exposing enterprise networks.' }
    ],
    movies: [
      { id: 'mr-robot', title: 'Mr. Robot', type: 'Series', year: '2015-2019', description: 'A cybersecurity engineer and vigilante hacker battles social anxiety and corporate monopolies.', relevance: 'Widely praised for accurate command-line hacking, social engineering, and Tor operational realism.' },
      { id: 'citizenfour', title: 'Citizenfour', type: 'Documentary', year: '2014', description: 'Laura Poitras and Glenn Greenwald meet Edward Snowden in Hong Kong as he exposes mass surveillance.', relevance: 'Profoundly highlights metadata collection, encryption, and digital surveillance risks.' },
      { id: 'sneakers', title: 'Sneakers', type: 'Movie', year: '1992', description: 'A team of security analysts and physical penetration testers uncover a universal cryptography black box.', relevance: 'Classic depiction of ethical hacking, operational security, and social engineering.' }
    ]
  },
  {
    id: 'ui-ux-designer',
    slug: 'ui-ux-designer',
    title: 'UI/UX & Product Experience Designer',
    category: 'Design & Creative',
    field: 'Creative',
    summary: 'Design intuitive, human-centered digital experiences, wireframes, design systems, and delightful visual interfaces.',
    description: 'UI/UX Designers solve complex human problems through empathetic research and clean aesthetic execution. You will map user journeys, conduct usability interviews, craft high-fidelity prototypes in Figma, and build scalable design systems.',
    salaryRangeINR: {
      entry: '₹5,00,000 - ₹8,50,000',
      mid: '₹9,50,000 - ₹17,00,000',
      senior: '₹19,00,000 - ₹34,00,000',
      averageDisplay: '₹13,00,000 / yr'
    },
    jobRoles: ['Product Designer', 'UI Designer', 'UX Researcher', 'Design Systems Lead', 'Interaction Designer'],
    tags: ['Design', 'Creative Arts', 'Technology', 'Communication', 'Creativity'],
    requiredSkills: [
      { name: 'Design', weight: 0.35, minLevel: 7 },
      { name: 'Creativity', weight: 0.25, minLevel: 7 },
      { name: 'Communication', weight: 0.20, minLevel: 6 },
      { name: 'Problem Solving', weight: 0.15, minLevel: 5 },
      { name: 'Leadership', weight: 0.05, minLevel: 3 }
    ],
    difficulty: 'Beginner',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill', 'Explore options'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Design Principles & Visual Hierarchy',
        duration: '0 - 2 Months',
        subtitle: 'Typography, Color Theory & Spacing Math',
        description: 'Understand the psychological foundations of vision: contrast ratios, typography pairings, grid math, and Gestalt laws.',
        skillsToLearn: ['Typography & Font Pairings', 'Color Harmonies & Accessible Contrast (WCAG)', '8pt Spacing Systems & Grids', 'Gestalt Psychology in UI', 'Figma Fundamentals'],
        resources: [
          { title: 'Refactoring UI Book & Tips', provider: 'Steve Schoger & Adam Wathan', url: 'https://www.refactoringui.com/', free: true },
          { title: 'Figma for Beginners Series', provider: 'Figma YouTube Channel', url: 'https://www.youtube.com/c/FigmaDesign', free: true }
        ],
        projectIdea: 'Redesign a poorly structured utility website (e.g. municipal transit schedule) using clean typography and strict 8pt grid spacing.',
        keyDeliverables: ['Before & after visual comparison case study', 'Style guide board in Figma']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: User Research & Information Architecture',
        duration: '2 - 5 Months',
        subtitle: 'User Personas, Journey Maps & Wireframing',
        description: 'Uncover real user pain points through qualitative interviews, synthesize findings with empathy maps, and structure user flows.',
        skillsToLearn: ['User Interview Methodologies', 'User Personas & Empathy Maps', 'Card Sorting & Information Architecture', 'Low-Fidelity Wireframing', 'Usability Heuristics'],
        resources: [
          { title: 'Nielsen Norman Group UX Articles', provider: 'NNGroup', url: 'https://www.nngroup.com/articles/', free: true },
          { title: 'Interaction Design Foundation Open Guides', provider: 'IxDF', url: 'https://www.interaction-design.org/', free: true }
        ],
        projectIdea: 'Comprehensive UX research sprint uncovering why first-time investors abandon budgeting apps in the first week.',
        keyDeliverables: ['User journey map artifact', 'Interactive low-fidelity wireframe prototype']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Advanced Figma & Component Design Systems',
        duration: '5 - 8 Months',
        subtitle: 'Auto-Layout, Variants & Design Tokens',
        description: 'Construct modular, responsive UI component libraries featuring auto-layout, interactive component states, and token variables.',
        skillsToLearn: ['Figma Auto-Layout & Constraints', 'Component Sets & Interactive Variants', 'Design Tokens & Variables', 'Micro-Interactions & Prototyping', 'Accessibility Auditing'],
        resources: [
          { title: 'Design Systems Handbook', provider: 'DesignBetter / InVision', url: 'https://www.designbetter.co/', free: true },
          { title: 'Mizko Design Channel', provider: 'YouTube (Mizko)', url: 'https://www.youtube.com/c/Mizko', free: true }
        ],
        projectIdea: 'Multi-brand SaaS Design System with 40+ reusable components (Buttons, Modals, Inputs, Data Tables, Toast notifications).',
        keyDeliverables: ['Published public Figma Community design system', 'Responsive desktop and mobile prototypes']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Usability Testing & Developer Handoff',
        duration: '8 - 10 Months',
        subtitle: 'A/B Testing, Heatmaps & Engineering Collaboration',
        description: 'Test prototypes on real users, analyze metrics, write crystal-clear design specifications, and inspect CSS layout properties.',
        skillsToLearn: ['Usability Test Scripting', 'Maze / Useberry Prototype Testing', 'Dev Mode & CSS Handoff Specs', 'Design QA & Bug Reporting', 'Copywriting for Interfaces (UX Writing)'],
        resources: [
          { title: 'Laws of UX', provider: 'Jon Yablonski', url: 'https://lawsofux.com/', free: true },
          { title: 'Google UX Design Professional Certificate Audit', provider: 'Coursera', url: 'https://www.coursera.org/professional-certificates/google-ux-design', free: true }
        ],
        projectIdea: 'Usability testing study of a complex checkout flow with 5 participants, documenting severity findings and redesigning the drop-off step.',
        keyDeliverables: ['Usability test report video clips', 'Annotated Figma developer handoff document']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: High-Converting Portfolio & Case Studies',
        duration: '10 - 12 Months',
        subtitle: 'Storytelling, Whiteboard Challenges & Job Hunt',
        description: 'Package 3 deep case studies focusing on problem framing, business impact, and rationale rather than just pretty mockups.',
        skillsToLearn: ['Case Study Storytelling', 'Portfolio Web Presentation', 'Whiteboard Challenge Frameworks', 'Design Critiques & Presentation Skills'],
        resources: [
          { title: 'Femke Design Portfolio Reviews', provider: 'YouTube (Femke)', url: 'https://www.youtube.com/c/FemkeDesign', free: true },
          { title: 'Bestfolios Case Study Archive', provider: 'Bestfolios', url: 'https://www.bestfolios.com/', free: true }
        ],
        projectIdea: 'Flagship end-to-end product design project solving a complex problem in health, education, or financial literacy.',
        keyDeliverables: ['Polished web portfolio showcasing 3 complete case studies', 'Resume formatted for product design roles']
      }
    ],
    courses: [
      { id: 'google-ux', title: 'Google UX Design Certificate (Free Audit)', provider: 'Coursera', duration: '12 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/professional-certificates/google-ux-design', description: 'Comprehensive foundational certificate covering research, wireframing, Figma, and usability.' },
      { id: 'figma-mastery', title: 'Figma UI Design Masterclass', provider: 'freeCodeCamp', duration: '6 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Build modern mobile and desktop interfaces from scratch using components and auto-layout.' },
      { id: 'hackdesign', title: 'HackDesign Free Lessons', provider: 'HackDesign', duration: 'Self-paced', level: 'Beginner', isFree: true, link: 'https://hackdesign.org/', description: 'Curated design lessons written by top digital designers around the world.' },
      { id: 'calarts-graphic', title: 'Graphic Design Specialization', provider: 'CalArts / Coursera', duration: '8 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/specializations/graphic-design', description: 'Core principles of typography, image making, composition, and visual expression.' }
    ],
    technologies: [
      { id: 'figma', name: 'Figma', category: 'Interface Prototyping', popularity: 99, learningCurve: 'Medium', whyImportant: 'Universal industry standard for UI design, design systems, and real-time collaboration.' },
      { id: 'framer', name: 'Framer / Webflow', category: 'Interactive Web', popularity: 88, learningCurve: 'Medium', whyImportant: 'Enables designers to publish live, interactive sites without writing full frontend stacks.' },
      { id: 'maze', name: 'Maze & UserTesting', category: 'User Research', popularity: 85, learningCurve: 'Low', whyImportant: 'Quantifies usability with automated heatmaps, time-on-task, and misclick rates.' },
      { id: 'protopie', name: 'ProtoPie', category: 'Micro-Interactions', popularity: 82, learningCurve: 'Medium', whyImportant: 'Creates advanced realistic mobile sensors and micro-interactions.' }
    ],
    books: [
      { id: 'dont-make-me-think', title: 'Don’t Make Me Think, Revisited', author: 'Steve Krug', year: '2014', description: 'A common-sense approach to web usability and intuitive navigation.', keyTakeaway: 'Users do not read pages; they scan them for the quickest path to their goal.' },
      { id: 'design-of-everyday-things', title: 'The Design of Everyday Things', author: 'Don Norman', year: '2013', description: 'The fundamental guide on affordances, signifiers, mental models, and human-centered design.', keyTakeaway: 'When users make mistakes with a product, the design is at fault, not the user.' },
      { id: 'hooked', title: 'Hooked: How to Build Habit-Forming Products', author: 'Nir Eyal', year: '2014', description: 'The Hook Model: trigger, action, variable reward, and investment.', keyTakeaway: 'Delightful digital experiences weave natural triggers into regular daily workflows.' }
    ],
    movies: [
      { id: 'abstract-art-of-design', title: 'Abstract: The Art of Design', type: 'Series', year: '2017-2019', description: 'In-depth profile of visionary designers across typography, graphic design, and automotive aesthetics.', relevance: 'Inspires deep pride and passion for the emotional craft of visual design.' },
      { id: 'objectified', title: 'Objectified', type: 'Documentary', year: '2009', description: 'Gary Hustwit examines our complex relationship with manufactured objects and the people who design them.', relevance: 'Explores Dieter Rams’ 10 principles of good design and functional elegance.' },
      { id: 'the-founder', title: 'The Founder', type: 'Movie', year: '2016', description: 'Ray Kroc scales McDonald’s, featuring the famous tennis court kitchen speedee service layout design.', relevance: 'Demonstrates information architecture, ergonomics, and workflow optimization.' }
    ]
  },
  {
    id: 'cloud-architect',
    slug: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    category: 'Cloud Infrastructure',
    field: 'Technical',
    summary: 'Design scalable, multi-region cloud infrastructures, serverless systems, and fault-tolerant enterprise topologies.',
    description: 'Cloud Architects build resilient backbones for modern global apps across AWS, GCP, and Azure. You will orchestrate Terraform Infrastructure as Code (IaC), establish zero-trust security postures, design disaster recovery protocols, and optimize cloud billing.',
    salaryRangeINR: {
      entry: '₹9,00,000 - ₹14,00,000',
      mid: '₹16,00,000 - ₹28,00,000',
      senior: '₹32,00,000 - ₹60,00,000+',
      averageDisplay: '₹22,00,000 / yr'
    },
    jobRoles: ['Cloud Architect', 'Solutions Architect', 'DevOps Lead', 'Cloud Infrastructure Engineer', 'Site Reliability Engineer'],
    tags: ['Engineering', 'Technology', 'Problem Solving', 'Leadership'],
    requiredSkills: [
      { name: 'Problem Solving', weight: 0.26, minLevel: 7 },
      { name: 'Leadership', weight: 0.20, minLevel: 6 },
      { name: 'Communication', weight: 0.20, minLevel: 6 },
      { name: 'Python', weight: 0.18, minLevel: 5 },
      { name: 'SQL', weight: 0.16, minLevel: 5 }
    ],
    difficulty: 'Advanced',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Core Networking, Linux & Virtualization',
        duration: '0 - 3 Months',
        subtitle: 'Subnetting, CIDR, DNS & Virtual Machines',
        description: 'Master core enterprise networking concepts that form the backbone of all public clouds.',
        skillsToLearn: ['VPC Architecture & Subnetting', 'Public/Private Routing & NAT Gateways', 'DNS & Route 53', 'Linux System Administration', 'Security Groups & Network ACLs'],
        resources: [
          { title: 'AWS Certified Cloud Practitioner Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Linux Journey Tutorial', provider: 'Linux Journey', url: 'https://linuxjourney.com/', free: true }
        ],
        projectIdea: 'Design a highly available two-tier VPC network with public web tiers and private isolated database subnets.',
        keyDeliverables: ['Network architecture diagram', 'Automated Bash configuration script']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Compute, Storage & Managed Services',
        duration: '3 - 6 Months',
        subtitle: 'EC2, S3, RDS, Serverless & IAM Security',
        description: 'Deploy stateful and stateless workloads using containerized compute and managed relational engines.',
        skillsToLearn: ['AWS EC2 / Auto Scaling Groups', 'S3 Storage Classes & Lifecycle Rules', 'Managed Databases (RDS / DynamoDB)', 'AWS Lambda Serverless Functions', 'IAM Roles & Least Privilege Policies'],
        resources: [
          { title: 'AWS Solutions Architect Associate Free Training', provider: 'freeCodeCamp (Andrew Brown)', url: 'https://www.youtube.com/c/Freecodecamp', free: true },
          { title: 'Google Cloud Skills Boost Free Tiers', provider: 'Google Cloud', url: 'https://www.cloudskillsboost.google/', free: true }
        ],
        projectIdea: 'Serverless image processing pipeline triggered by S3 uploads with metadata saved in DynamoDB.',
        keyDeliverables: ['Working serverless pipeline', 'Cost calculation analysis for 1 million requests']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Infrastructure as Code (Terraform) & Containers',
        duration: '6 - 9 Months',
        subtitle: 'Declarative Cloud Specs & Kubernetes Basics',
        description: 'Eliminate manual console clicks by defining your entire infrastructure in declarative Terraform code.',
        skillsToLearn: ['Terraform Modules & State Management', 'Docker Container Packaging', 'Kubernetes Architecture (EKS/GKE)', 'CI/CD Integration for IaC', 'Environment Isolation (Dev/Staging/Prod)'],
        resources: [
          { title: 'Terraform Beginner to Pro Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Kubernetes Tutorial for Beginners', provider: 'TechWorld with Nana', url: 'https://www.youtube.com/c/TechWorldwithNana', free: true }
        ],
        projectIdea: 'Complete multi-region infrastructure provisioned in 1 command using modular Terraform scripts.',
        keyDeliverables: ['GitHub repo with modular Terraform templates', 'Working Kubernetes cluster deployment']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: High Availability, Cost Optimization & Security',
        duration: '9 - 11 Months',
        subtitle: 'Well-Architected Framework & FinOps',
        description: 'Audit cloud architectures for 99.99% availability, disaster recovery, encryption at rest/transit, and cost reduction.',
        skillsToLearn: ['AWS Well-Architected Framework', 'Multi-Region Active-Active Failover', 'FinOps & Cost Anomaly Detection', 'Zero Trust Cloud Architecture', 'Chaos Engineering Principles'],
        resources: [
          { title: 'AWS Well-Architected Whitepapers', provider: 'Amazon Web Services', url: 'https://aws.amazon.com/architecture/well-architected/', free: true },
          { title: 'FinOps Foundation Guides', provider: 'FinOps Foundation', url: 'https://www.finops.org/', free: true }
        ],
        projectIdea: 'Disaster recovery failover simulation demonstrating recovery point objective (RPO) under 5 minutes.',
        keyDeliverables: ['Comprehensive architectural review document', 'FinOps savings audit report']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Enterprise Solutions & Architect Certification',
        duration: '11 - 12 Months',
        subtitle: 'System Design Presentations & AWS SAA / GCP PCA',
        description: 'Conquer enterprise architecture interviews with case studies detailing cloud migration and modern microservices.',
        skillsToLearn: ['Legacy to Cloud Migration Strategies', 'Executive Technical Presentations', 'Certification Exam Strategy', 'Cloud Governance & Compliance'],
        resources: [
          { title: 'Tutorials Dojo Practice Exams & Guides', provider: 'Tutorials Dojo', url: 'https://tutorialsdojo.com/', free: true },
          { title: 'ByteByteGo System Design', provider: 'YouTube (Alex Xu)', url: 'https://www.youtube.com/c/ByteByteGo', free: true }
        ],
        projectIdea: 'Enterprise Bank cloud migration proposal moving on-premise monolith into a microservices architecture.',
        keyDeliverables: ['40-page technical migration blueprint', 'Verified Cloud Solutions Architect certification badge']
      }
    ],
    courses: [
      { id: 'aws-saa', title: 'AWS Solutions Architect Associate Complete Course', provider: 'freeCodeCamp', duration: '12 hours', level: 'Intermediate', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Hands-on prep for the world’s most recognized cloud credential.' },
      { id: 'gcp-foundations', title: 'Google Cloud Platform Fundamentals', provider: 'Coursera / Google Cloud', duration: '4 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/learn/gcp-fundamentals', description: 'Core compute, BigQuery, storage, and networking on Google infrastructure.' },
      { id: 'terraform-pro', title: 'HashiCorp Terraform Associate Guide', provider: 'freeCodeCamp', duration: '8 hours', level: 'Intermediate', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Master Infrastructure as Code, provider blocks, variables, and remote backends.' },
      { id: 'k8s-nana', title: 'Kubernetes for Beginners', provider: 'TechWorld with Nana', duration: '4 hours', level: 'Intermediate', isFree: true, link: 'https://www.youtube.com/c/TechWorldwithNana', description: 'Pods, Services, Ingress, Deployments, and ConfigMaps clearly visualized.' }
    ],
    technologies: [
      { id: 'aws', name: 'Amazon Web Services (AWS)', category: 'Cloud Provider', popularity: 98, learningCurve: 'Medium', whyImportant: 'The market-leading cloud platform used by millions of enterprise applications.' },
      { id: 'terraform', name: 'Terraform', category: 'Infrastructure as Code', popularity: 95, learningCurve: 'Medium', whyImportant: 'Automates cloud resource provisioning across any cloud provider with version control.' },
      { id: 'k8s', name: 'Kubernetes (K8s)', category: 'Container Orchestration', popularity: 93, learningCurve: 'High', whyImportant: 'Automates deployment, scaling, and operational management of containerized apps.' },
      { id: 'gcp', name: 'Google Cloud Platform (GCP)', category: 'Data & AI Cloud', popularity: 90, learningCurve: 'Medium', whyImportant: 'Gold standard for analytics, BigQuery, and enterprise machine learning hosting.' }
    ],
    books: [
      { id: 'cloud-native-patterns', title: 'Cloud Native Patterns: Designing change-tolerant software', author: 'Cornelia Davis', year: '2019', description: 'Mental models for cloud architectures, resilience, and horizontal scaling.', keyTakeaway: 'Expect everything to fail at cloud scale; design self-healing stateless nodes.' },
      { id: 'terraform-up-and-running', title: 'Terraform: Up & Running', author: 'Yevgeniy Brikman', year: '2022', description: 'The practical manual on managing code-based infrastructure without headaches.', keyTakeaway: 'Treat your infrastructure with the same rigor, tests, and reviews as production software.' },
      { id: 'sre-book', title: 'Site Reliability Engineering: How Google Runs Production Systems', author: 'Betsy Beyer et al.', year: '2016', description: 'How Google treats operations as a software problem with error budgets and SLIs.', keyTakeaway: 'Hope is not a strategy; enforce error budgets to balance innovation with uptime.' }
    ],
    movies: [
      { id: 'the-matrix', title: 'The Matrix', type: 'Movie', year: '1999', description: 'A computer programmer discovers reality is an elaborate simulated computing environment.', relevance: 'Metaphor for massive distributed virtualized compute clusters and scale.' },
      { id: 'iron-man', title: 'Iron Man', type: 'Movie', year: '2008', description: 'Tony Stark designs autonomous systems, clean fusion energy, and the JARVIS cloud interface.', relevance: 'Demonstrates distributed telemetry, edge compute, and automated system orchestration.' },
      { id: 'takedown', title: 'Track Down (Takedown)', type: 'Movie', year: '2000', description: 'The pursuit and capture of computer hacker Kevin Mitnick by security expert Tsutomu Shimomura.', relevance: 'Early look at telecommunication infrastructure, routing exploits, and system administration.' }
    ]
  },
  {
    id: 'game-developer',
    slug: 'game-developer',
    title: 'Game Developer & Interactive Designer',
    category: 'Interactive Entertainment',
    field: 'Technical',
    summary: 'Craft immersive 2D/3D games, physics gameplay mechanics, graphics shaders, and multiplayer game loops.',
    description: 'Game Developers merge software engineering, physics, math, and interactive art. Using engines like Unity (C#) and Unreal (C++), you will engineer gameplay systems, spatial soundscapes, custom particle shaders, and real-time networking.',
    salaryRangeINR: {
      entry: '₹4,50,000 - ₹8,00,000',
      mid: '₹9,00,000 - ₹16,00,000',
      senior: '₹18,00,000 - ₹32,00,000',
      averageDisplay: '₹12,00,000 / yr'
    },
    jobRoles: ['Gameplay Programmer', 'Unity/Unreal Developer', 'Graphics Programmer', 'Technical Game Artist', 'Systems Designer'],
    tags: ['Creative Arts', 'Technology', 'Engineering', 'Creativity', 'Design'],
    requiredSkills: [
      { name: 'Creativity', weight: 0.25, minLevel: 7 },
      { name: 'Problem Solving', weight: 0.25, minLevel: 7 },
      { name: 'Math', weight: 0.20, minLevel: 6 },
      { name: 'Design', weight: 0.20, minLevel: 6 },
      { name: 'Communication', weight: 0.10, minLevel: 4 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Game Math, Logic & C# Foundations',
        duration: '0 - 3 Months',
        subtitle: 'Vectors, Trigonometry & Object-Oriented C#',
        description: 'Understand the mathematical engine behind game physics: Euclidean dot/cross products, angles, and object-oriented C#.',
        skillsToLearn: ['Vector Math (Dot & Cross Product)', 'Trigonometry & Raycasting', 'C# OOP & Data Structures', 'Game Loop Architecture', 'Unity Editor Basics'],
        resources: [
          { title: 'Unity Junior Programmer Pathway', provider: 'Unity Learn', url: 'https://learn.unity.com/', free: true },
          { title: 'Brackeys Game Development Archive', provider: 'Brackeys YouTube', url: 'https://www.youtube.com/c/Brackeys', free: true }
        ],
        projectIdea: '2D Physics Puzzle Platformer featuring double jumps, wall slides, and dynamic moving platforms.',
        keyDeliverables: ['Playable browser build on Itch.io', 'Clean C# scripts with documentation']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: 3D Mechanics, Animations & Audio',
        duration: '3 - 6 Months',
        subtitle: 'Character Controllers, State Machines & Lighting',
        description: 'Transition to full 3D environments: ragdoll physics, hierarchical animation state machines, and spatial audio.',
        skillsToLearn: ['3D Rigidbodies & Colliders', 'Mecanim Animation State Machines', 'Cinemachine Camera Controls', 'Post-Processing & Particle FX', 'Spatial Audio Systems'],
        resources: [
          { title: 'Code Monkey Unity 3D Course', provider: 'YouTube (Code Monkey)', url: 'https://www.youtube.com/c/CodeMonkeyUnity', free: true },
          { title: 'Catlike Coding Unity Tutorials', provider: 'Catlike Coding (Jasper Flick)', url: 'https://catlikecoding.com/unity/tutorials/', free: true }
        ],
        projectIdea: '3D Action Adventure mini-game featuring fluid combat, enemy behavior state machines, and particle hit impacts.',
        keyDeliverables: ['3D gameplay showcase video', 'Executable game build for Windows/Mac']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Shaders, Performance & Mobile Optimization',
        duration: '6 - 9 Months',
        subtitle: 'Shader Graph, Draw Calls & Profiling',
        description: 'Create eye-catching visual effects using node-based shader graphs while optimizing draw calls and memory leaks.',
        skillsToLearn: ['Unity Shader Graph / HLSL Basics', 'Mesh Rendering & Lighting Bakes', 'Memory Profiling & GC Allocation', 'Object Pooling Design Pattern', 'Touch Input for Mobile'],
        resources: [
          { title: 'Freya Holmér Math for Game Devs', provider: 'YouTube', url: 'https://www.youtube.com/c/FreyaHolmer', free: true },
          { title: 'Unreal Engine 5 Foundations', provider: 'Epic Games Dev Community', url: 'https://dev.epicgames.com/community/', free: true }
        ],
        projectIdea: 'Stylized water and dissolution shader showcase with an interactive dynamic weather system.',
        keyDeliverables: ['Interactive shader gallery', 'Performance benchmark report maintaining 60 FPS']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Multiplayer Networking & Game AI',
        duration: '9 - 11 Months',
        subtitle: 'Netcode for GameObjects & Behavior Trees',
        description: 'Synchronize gameplay states across network clients and build intelligent enemy squads with behavior trees.',
        skillsToLearn: ['Unity Netcode / Photon PUN', 'Client-Side Prediction & Lag Compensation', 'NavMesh & Pathfinding (A*)', 'Behavior Trees & Utility AI', 'Game State Serialization'],
        resources: [
          { title: 'Multiplayer Game Dev Guide', provider: 'Unity Documentation', url: 'https://docs.unity.com/', free: true },
          { title: 'Game Programming Patterns (Free Web Book)', provider: 'Robert Nystrom', url: 'https://gameprogrammingpatterns.com/', free: true }
        ],
        projectIdea: '2-Player Online Co-op survival arena with room matchmaking and synchronized projectile physics.',
        keyDeliverables: ['Working multiplayer demo with dedicated lobby', 'GitHub repository with clean modular architecture']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Game Jam Publishing & Steam Release',
        duration: '11 - 12 Months',
        subtitle: 'Steamworks SDK, Game Jams & Portfolio Reel',
        description: 'Package your games into an irresistible portfolio, participate in game jams (Ludum Dare / GMTK), and integrate achievements.',
        skillsToLearn: ['Game Jam Time Management', 'Game Feel (Juice, Screenshake, Ease curves)', 'Steamworks SDK Integration', 'Portfolio Showreel Editing'],
        resources: [
          { title: 'GMTK Game Maker’s Toolkit', provider: 'YouTube (Mark Brown)', url: 'https://www.youtube.com/c/MarkBrownGMTK', free: true },
          { title: 'Itch.io Community Game Jams', provider: 'Itch.io', url: 'https://itch.io/jams', free: true }
        ],
        projectIdea: 'Polished commercial demo or highly rated game jam submission ready for Steam or Epic Games Store.',
        keyDeliverables: ['Published Itch.io / Steam demo', '60-second high-energy gameplay programmer reel']
      }
    ],
    courses: [
      { id: 'unity-junior-prog', title: 'Unity Junior Programmer Pathway', provider: 'Unity Technologies', duration: '12 weeks', level: 'Beginner', isFree: true, link: 'https://learn.unity.com/pathway/junior-programmer', description: 'Official pathway teaching core C# programming, vectors, physics, and UI.' },
      { id: 'cs50-games', title: 'CS50’s Intro to Game Development', provider: 'Harvard University', duration: '12 weeks', level: 'Intermediate', isFree: true, link: 'https://cs50.harvard.edu/games/', description: 'Build classics from Pong and Flappy Bird to 3D Zelda and Portal mechanics.' },
      { id: 'unreal-beginners', title: 'Unreal Engine 5 Beginner Tutorial', provider: 'freeCodeCamp', duration: '11 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Master Blueprints visual scripting, Nanite geometry, and Lumen real-time lighting.' },
      { id: 'brackeys-course', title: 'Brackeys How to Make a Video Game', provider: 'YouTube (Brackeys)', duration: '10 lessons', level: 'Beginner', isFree: true, link: 'https://www.youtube.com/c/Brackeys', description: 'The most beloved beginner introduction to Unity game development.' }
    ],
    technologies: [
      { id: 'unity', name: 'Unity Engine (C#)', category: 'Game Engine', popularity: 95, learningCurve: 'Medium', whyImportant: 'Powers over 60% of mobile games and top indie titles worldwide.' },
      { id: 'unreal', name: 'Unreal Engine 5 (C++ / Blueprints)', category: 'AAA Game Engine', popularity: 93, learningCurve: 'High', whyImportant: 'Photorealistic visual engine powering AAA titles and virtual film production.' },
      { id: 'blender', name: 'Blender 3D', category: '3D Modeling & Rigging', popularity: 94, learningCurve: 'Medium', whyImportant: 'Open-source standard for 3D modeling, UV unwrapping, and character animation.' },
      { id: 'itch', name: 'Itch.io & Steamworks', category: 'Distribution', popularity: 88, learningCurve: 'Low', whyImportant: 'Primary platforms for publishing indie game demos and gathering player feedback.' }
    ],
    books: [
      { id: 'game-programming-patterns', title: 'Game Programming Patterns', author: 'Robert Nystrom', year: '2014', description: 'Architectural patterns tailored for game loops, component models, and dirty flags.', keyTakeaway: 'Decouple subsystems to prevent tightly bound spaghetti code from crushing frame rates.' },
      { id: 'art-of-game-design', title: 'The Art of Game Design: A Book of Lenses', author: 'Jesse Schell', year: '2019', description: 'Over 100 theoretical lenses to inspect gameplay flow, emotion, resonance, and pacing.', keyTakeaway: 'The game is not the software; the game is the psychological experience in the player’s mind.' },
      { id: 'blood-sweat-pixels', title: 'Blood, Sweat, and Pixels', author: 'Jason Schreier', year: '2017', description: 'Behind-the-scenes stories of how games like Witcher 3, Stardew Valley, and Uncharted were made.', keyTakeaway: 'Game production is an unpredictable miracle of relentless passion and engineering grit.' }
    ],
    movies: [
      { id: 'indie-game-movie', title: 'Indie Game: The Movie', type: 'Documentary', year: '2012', description: 'Follows indie developers behind Braid, Super Meat Boy, and Fez during release crunch.', relevance: 'The most emotionally genuine documentary capturing the soul of independent game creation.' },
      { id: 'ready-player-one', title: 'Ready Player One', type: 'Movie', year: '2018', description: 'An expansive virtual reality world where society plays, works, and quests for Easter eggs.', relevance: 'Visionary depiction of metaverse game mechanics, physics engines, and virtual economics.' },
      { id: 'free-guy', title: 'Free Guy', type: 'Movie', year: '2021', description: 'A non-player character (NPC) in an open-world sandbox game achieves self-awareness.', relevance: 'Playful look at game loops, respawn mechanics, and procedural world design.' }
    ]
  },
  {
    id: 'robotics-engineer',
    slug: 'robotics-engineer',
    title: 'Robotics & Autonomous Systems Engineer',
    category: 'Hardware & Automation',
    field: 'Technical',
    summary: 'Develop autonomous mobile robots, robotic kinematics, embedded firmware, and ROS sensor integration.',
    description: 'Robotics Engineers breathe life into mechanical arms, autonomous drones, and warehouse mobile robots. You will write high-performance C++ and Python controllers, interface LiDAR and computer vision sensors with ROS 2, and design Kalman filters for real-time localization.',
    salaryRangeINR: {
      entry: '₹6,50,000 - ₹10,50,000',
      mid: '₹12,00,000 - ₹22,00,000',
      senior: '₹24,00,000 - ₹45,00,000',
      averageDisplay: '₹16,50,000 / yr'
    },
    jobRoles: ['Robotics Engineer', 'Autonomous Vehicles Engineer', 'Embedded Software Engineer', 'Controls Engineer', 'SLAM Specialist'],
    tags: ['Engineering', 'Technology', 'Science', 'Problem Solving'],
    requiredSkills: [
      { name: 'Problem Solving', weight: 0.28, minLevel: 7 },
      { name: 'Math', weight: 0.25, minLevel: 7 },
      { name: 'Python', weight: 0.20, minLevel: 6 },
      { name: 'Creativity', weight: 0.15, minLevel: 5 },
      { name: 'Leadership', weight: 0.12, minLevel: 4 }
    ],
    difficulty: 'Advanced',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Embedded C++, Microcontrollers & Electronics',
        duration: '0 - 3 Months',
        subtitle: 'Arduino, ESP32, GPIO, PWM & Circuit Physics',
        description: 'Learn hardware-level programming: register manipulation, SPI/I2C communication protocols, motor drivers, and power circuitry.',
        skillsToLearn: ['Modern C++ (Pointers, Memory, OOP)', 'Microcontrollers (ESP32 / STM32)', 'I2C, SPI, UART Protocols', 'PWM & H-Bridge Motor Control', 'Sensor Interfacing (IMU, Ultrasonic)'],
        resources: [
          { title: 'Arduino & ESP32 Robotics Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Circuits & Electronics 1: Basic Circuit Analysis', provider: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/', free: true }
        ],
        projectIdea: 'Self-Balancing 2-Wheeled Robot using an MPU6050 accelerometer/gyroscope with a closed-loop PID controller.',
        keyDeliverables: ['Physical robot or Gazebo simulation demonstration', 'Annotated C++ PID control firmware']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Robot Kinematics & Classical Control Theory',
        duration: '3 - 6 Months',
        subtitle: 'Forward/Inverse Kinematics & State Space',
        description: 'Calculate exact spatial coordinates for multi-joint robotic arms using Denavit-Hartenberg parameters and Jacobian matrices.',
        skillsToLearn: ['Forward & Inverse Kinematics (FK/IK)', 'Denavit-Hartenberg (DH) Notation', 'PID Controllers & State-Space Systems', 'Trajectory Generation & Splines', 'MATLAB / Python Kinematics Modeling'],
        resources: [
          { title: 'Modern Robotics: Mechanics, Planning, and Control', provider: 'Northwestern University (Coursera)', url: 'https://www.coursera.org/specializations/modernrobotics', free: true },
          { title: 'Control Bootcamp with Steve Brunton', provider: 'YouTube', url: 'https://www.youtube.com/c/SteveBrunton', free: true }
        ],
        projectIdea: '3-DOF Robotic Arm simulator in Python calculating inverse kinematics to draw geometric shapes in 3D space.',
        keyDeliverables: ['Interactive Python kinematics visualizer', 'Mathematical formulation documentation']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: ROS 2 (Robot Operating System) & Gazebo',
        duration: '6 - 9 Months',
        subtitle: 'Nodes, Topics, Services & URDF Modeling',
        description: 'Master the industry-standard robotic middleware: communicate between sensor drivers, motor actuators, and planning algorithms.',
        skillsToLearn: ['ROS 2 Humble / Iron Core', 'Publishers, Subscribers & Action Servers', 'URDF / Xacro Robot Modeling', 'Gazebo Physics Simulation', 'tf2 Coordinate Transformations'],
        resources: [
          { title: 'ROS 2 Basics Tutorial', provider: 'The Construct Sim', url: 'https://www.theconstructsim.com/', free: true },
          { title: 'Articulated Robotics Channel', provider: 'YouTube (Josh Newans)', url: 'https://www.youtube.com/c/ArticulatedRobotics', free: true }
        ],
        projectIdea: 'Differential drive robot modeled in URDF navigating a simulated Gazebo maze using keyboard and autonomous wall-following nodes.',
        keyDeliverables: ['ROS 2 package repository on GitHub', 'Video demonstration of Gazebo physics simulation']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: SLAM, Navigation & Computer Vision',
        duration: '9 - 11 Months',
        subtitle: 'Nav2, LiDAR Mapping, OpenCV & Extended Kalman Filter',
        description: 'Give the robot eyes and spatial memory: generate real-time occupancy grid maps and navigate dynamically around obstacles.',
        skillsToLearn: ['2D/3D LiDAR SLAM (Cartographer)', 'Nav2 Autonomous Navigation Stack', 'OpenCV Color & Object Detection', 'Extended Kalman Filtering (EKF)', 'Costmaps & Path Planners (A* / TEB)'],
        resources: [
          { title: 'Visual SLAM from Scratch', provider: 'Guanrun Wang Tutorials', url: 'https://github.com/gaoxiang12/slambook-en', free: true },
          { title: 'OpenCV Computer Vision Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true }
        ],
        projectIdea: 'Autonomous Mobile Robot (AMR) in Gazebo that autonomously maps a hospital floor and delivers virtual payloads to designated waypoints.',
        keyDeliverables: ['Generated 2D SLAM floor map', 'Autonomous navigation waypoint demonstration']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Autonomous Systems Portfolio & Hardware Integration',
        duration: '11 - 12 Months',
        subtitle: 'Industrial Standards, Safety & System Integration',
        description: 'Integrate physical sensors, prepare for hardware engineering interviews, and contribute to open-source robotics repositories.',
        skillsToLearn: ['Real-Time Operating Systems (FreeRTOS)', 'Safety Interlocks & CAN Bus Protocol', 'Technical Interview Whiteboard Mechanics', 'Edge AI Deployment (Jetson Nano)'],
        resources: [
          { title: 'NVIDIA Isaac Robotics Academy', provider: 'NVIDIA Developer', url: 'https://developer.nvidia.com/isaac-sim', free: true }
        ],
        projectIdea: 'Comprehensive capstone robot integrating edge object detection (YOLO on Jetson) to fetch colored objects autonomously.',
        keyDeliverables: ['Polished technical writeup with schematics and source code', 'Curated engineering video reel']
      }
    ],
    courses: [
      { id: 'modern-robotics', title: 'Modern Robotics Specialization', provider: 'Northwestern University', duration: '12 weeks', level: 'Intermediate', isFree: true, link: 'https://www.coursera.org/specializations/modernrobotics', description: 'Rigorous mathematical mechanics of robotic arms and mobile platforms.' },
      { id: 'mit-underactuated', title: 'Underactuated Robotics', provider: 'MIT OpenCourseWare (Russ Tedrake)', duration: '10 weeks', level: 'Advanced', isFree: true, link: 'https://underactuated.csail.mit.edu/', description: 'Control and reinforcement learning for walking and flying dynamic robots.' },
      { id: 'fcc-ros2', title: 'ROS 2 for Beginners', provider: 'freeCodeCamp', duration: '6 hours', level: 'Intermediate', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Build your first simulated robot with publishers, subscribers, and launch files.' },
      { id: 'edx-autonomous', title: 'Autonomous Navigation for Flying Robots', provider: 'TUM (Technical University of Munich)', duration: '6 weeks', level: 'Intermediate', isFree: true, link: 'https://www.edx.org/', description: 'State estimation, visual odometry, and path planning for autonomous quadcopters.' }
    ],
    technologies: [
      { id: 'ros2', name: 'ROS 2 (Robot Operating System)', category: 'Robotics Middleware', popularity: 96, learningCurve: 'High', whyImportant: 'Industry standard for commercial autonomous mobile robots, drones, and arms.' },
      { id: 'gazebo', name: 'Gazebo & Isaac Sim', category: 'Physics Simulation', popularity: 91, learningCurve: 'Medium', whyImportant: 'Enables testing robotics code in realistic virtual physics prior to hardware fabrication.' },
      { id: 'cpp', name: 'Modern C++ (17/20)', category: 'Systems Language', popularity: 95, learningCurve: 'High', whyImportant: 'Provides deterministic microsecond execution required for real-time controllers.' },
      { id: 'jetson', name: 'NVIDIA Jetson & Edge AI', category: 'Edge Computing', popularity: 89, learningCurve: 'Medium', whyImportant: 'Hardware platform for running onboard deep learning and computer vision on robots.' }
    ],
    books: [
      { id: 'probabilistic-robotics', title: 'Probabilistic Robotics', author: 'Sebastian Thrun, Wolfram Burgard, Dieter Fox', year: '2005', description: 'The seminal textbook on handling uncertainty in robotic perception and localization.', keyTakeaway: 'Robots must maintain probability distributions over world states rather than assumptions.' },
      { id: 'feedback-systems', title: 'Feedback Systems: An Introduction for Scientists and Engineers', author: 'Karl Johan Åström & Richard M. Murray', year: '2021', description: 'Master fundamental control theory, frequency domain, and state feedback.', keyTakeaway: 'Negative feedback makes noisy physical systems robust and stable.' },
      { id: 'robot-building-for-beginners', title: 'Robot Building for Beginners', author: 'David Cook', year: '2010', description: 'Practical hands-on electronics, soldering, gearboxes, and schematics.', keyTakeaway: 'Physical mechanical construction dictates software stability.' }
    ],
    movies: [
      { id: 'interstellar', title: 'Interstellar', type: 'Movie', year: '2014', description: 'Space exploration featuring autonomous reconfigurable robots TARS and CASE.', relevance: 'Inspiring depiction of versatile robotic kinematics, tactile interfaces, and loyalty algorithms.' },
      { id: 'wall-e', title: 'WALL-E', type: 'Movie', year: '2008', description: 'A solar-powered waste-compacting robot continues his duty for 700 years.', relevance: 'Charming exploration of robotics resilience, energy conservation, and human connection.' },
      { id: 'real-steel', title: 'Real Steel', type: 'Movie', year: '2011', description: 'A former boxer and his son restore an obsolete sparring robot equipped with shadow imitation.', relevance: 'Demonstrates teleoperation, servo torque mechanics, and sensor feedback loops.' }
    ]
  }
];
