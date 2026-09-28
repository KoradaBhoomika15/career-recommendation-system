import { Career } from '../types';

export const nonTechAndDomainCareers: Career[] = [
  {
    id: 'product-manager',
    slug: 'product-manager',
    title: 'Product Manager (Tech & Growth)',
    category: 'Product & Strategy',
    field: 'Business & Management',
    summary: 'Define product vision, align cross-functional engineering and design teams, and drive user adoption and business metrics.',
    description: 'Product Managers operate at the intersection of business, technology, and user experience. You will discover user pain points, define product roadmaps, prioritize backlogs, lead sprint planning, and analyze growth funnels to launch winning digital products.',
    salaryRangeINR: {
      entry: '₹8,00,000 - ₹14,00,000',
      mid: '₹16,00,000 - ₹30,00,000',
      senior: '₹35,00,000 - ₹65,00,000+',
      averageDisplay: '₹22,50,000 / yr'
    },
    jobRoles: ['Associate Product Manager (APM)', 'Product Manager', 'Technical PM', 'Growth PM', 'Head of Product'],
    tags: ['Business', 'Leadership', 'Communication', 'Technology', 'Problem Solving', 'Design'],
    requiredSkills: [
      { name: 'Leadership', weight: 0.28, minLevel: 7 },
      { name: 'Communication', weight: 0.26, minLevel: 7 },
      { name: 'Problem Solving', weight: 0.22, minLevel: 6 },
      { name: 'Design', weight: 0.12, minLevel: 5 },
      { name: 'SQL', weight: 0.12, minLevel: 4 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Explore options'],
    workStyleFit: ['Hybrid', 'Remote', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Product Fundamentals & Customer Discovery',
        duration: '0 - 2 Months',
        subtitle: 'User Interviews, Problem Framing & Product Market Fit',
        description: 'Learn to separate solutions from actual user problems. Conduct discovery interviews, draft customer empathy maps, and frame jobs-to-be-done (JTBD).',
        skillsToLearn: ['Jobs-To-Be-Done Framework', 'Customer Discovery Interviews', 'Product-Market Fit Heuristics', 'Competitive Landscape Mapping', 'Agile & Scrum Fundamentals'],
        resources: [
          { title: 'Product School Free Micro-Certifications', provider: 'Product School', url: 'https://productschool.com/', free: true },
          { title: 'The Mom Test Summary & Guide', provider: 'Rob Fitzpatrick Guides', url: 'https://www.momtestbook.com/', free: true }
        ],
        projectIdea: 'Conduct 5 user discovery interviews about everyday commute frustrations and formulate a validated Problem Statement Deck.',
        keyDeliverables: ['JTBD persona profile', 'Customer discovery interview synthesis matrix']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: PRDs, User Stories & Roadmapping',
        duration: '2 - 5 Months',
        subtitle: 'Product Requirement Documents & Prioritization',
        description: 'Write crystal-clear Product Requirement Documents (PRDs), construct Jira backlogs, and prioritize features using RICE and MoSCoW.',
        skillsToLearn: ['PRD Writing Standards', 'User Story Mapping & Acceptance Criteria', 'RICE / MoSCoW Prioritization Frameworks', 'Jira / Linear Sprint Planning', 'Wireframe Sketching in Whimsical/Figma'],
        resources: [
          { title: 'Lenny’s Newsletter Archive', provider: 'Lenny Rachitsky', url: 'https://www.lennysnewsletter.com/', free: true },
          { title: 'Atlassian Agile Coach Guides', provider: 'Atlassian', url: 'https://www.atlassian.com/agile', free: true }
        ],
        projectIdea: 'Author a complete, engineer-ready PRD for adding an interactive split-bill feature to a banking mobile application.',
        keyDeliverables: ['Complete PRD with user flows and edge cases', 'Jira-formatted backlog of 15 epic stories']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Product Analytics & Growth Funnels',
        duration: '5 - 8 Months',
        subtitle: 'A/B Testing, Cohorts, North Star Metric & Amplitude',
        description: 'Master quantitative product analysis: track conversion funnels, calculate retention cohorts, and define your North Star Metric.',
        skillsToLearn: ['North Star Metric Framework', 'Funnel & Retention Cohort Analysis', 'Mixpanel / Amplitude / PostHog', 'A/B Test Design & Sample Size Calculation', 'Basic SQL for Product Analytics'],
        resources: [
          { title: 'Amplitude Product Analytics Academy', provider: 'Amplitude', url: 'https://academy.amplitude.com/', free: true },
          { title: 'Reforge Open Essays & Growth Frameworks', provider: 'Reforge', url: 'https://www.reforge.com/blog', free: true }
        ],
        projectIdea: 'Analyze an anonymized SaaS onboarding funnel to pinpoint drop-off points and design a high-converting onboarding experiment.',
        keyDeliverables: ['Interactive Amplitude/PostHog analytics dashboard', 'A/B test hypothesis proposal']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Tech Fluency & Cross-Functional Alignment',
        duration: '8 - 10 Months',
        subtitle: 'APIs, System Architecture & Stakeholder Negotiation',
        description: 'Speak the language of software engineers and UI designers: understand REST vs GraphQL, tech debt tradeoffs, and executive diplomacy.',
        skillsToLearn: ['Web Architecture Basics (APIs, Databases, Caching)', 'Technical Debt Tradeoff Management', 'Stakeholder Management & Negotiation', 'Go-To-Market (GTM) Strategy', 'Pricing & Packaging Economics'],
        resources: [
          { title: 'Technology for Product Managers', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Stratechery by Ben Thompson', provider: 'Stratechery', url: 'https://stratechery.com/', free: true }
        ],
        projectIdea: 'Prepare a Go-To-Market launch playbook with sales enablement materials, support training, and rollback contingencies.',
        keyDeliverables: ['GTM release plan document', 'Architecture overview deck for executive sponsors']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Product Teardowns & PM Case Interviews',
        duration: '10 - 12 Months',
        subtitle: 'Design, Execution & Strategy Question Frameworks',
        description: 'Prepare for rigorous product management case interviews (CIRCLES method, root cause analysis, estimation, and metrics).',
        skillsToLearn: ['CIRCLES Method for Product Design', 'Root Cause Metric Investigation', 'Fermi Estimation Problems', 'Product Teardown Presentation'],
        resources: [
          { title: 'Exponent PM Interview Prep', provider: 'YouTube (TryExponent)', url: 'https://www.youtube.com/c/ExponentTV', free: true },
          { title: 'Product Management Exercises', provider: 'PMExercises', url: 'https://www.productmanagementexercises.com/', free: true }
        ],
        projectIdea: 'Publish an in-depth Product Teardown analyzing how Spotify or Duolingo drives gamified daily active usage.',
        keyDeliverables: ['Published visual product teardown slide deck', 'Curated PM portfolio website']
      }
    ],
    courses: [
      { id: 'uva-product', title: 'Digital Product Management: Modern Fundamentals', provider: 'University of Virginia / Coursera', duration: '4 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/learn/uva-darden-digital-product-management', description: 'Actionable exploration of agile product management and hypotheses validation.' },
      { id: 'google-project', title: 'Google Project Management Certificate (Free Audit)', provider: 'Coursera', duration: '10 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/professional-certificates/google-project-management', description: 'Agile sprints, documentation, risk mitigation, and executive communication.' },
      { id: 'mixpanel-academy', title: 'Product Analytics Master Certification', provider: 'Mixpanel', duration: 'Self-paced', level: 'Beginner', isFree: true, link: 'https://mixpanel.com/academy/', description: 'Master retention curves, user flows, and activation metrics.' },
      { id: 'fcc-agile', title: 'Scrum and Agile Essentials', provider: 'freeCodeCamp', duration: '3 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Sprint rituals, backlog refinement, user story writing, and velocity tracking.' }
    ],
    technologies: [
      { id: 'jira', name: 'Jira & Linear', category: 'Sprint Tracking', popularity: 96, learningCurve: 'Low', whyImportant: 'Primary tools used by tech companies to manage issue backlogs and sprint velocity.' },
      { id: 'amplitude', name: 'Amplitude & Mixpanel', category: 'Product Analytics', popularity: 94, learningCurve: 'Medium', whyImportant: 'Enables behavioral segmentation, funnel dropoff tracking, and cohort retention.' },
      { id: 'notion', name: 'Notion & Coda', category: 'Documentation', popularity: 95, learningCurve: 'Low', whyImportant: 'Indispensable for drafting PRDs, engineering specs, and strategic company roadmaps.' },
      { id: 'figma-pm', name: 'Figma for PMs', category: 'Wireframing', popularity: 92, learningCurve: 'Low', whyImportant: 'Used to inspect designs, leave feedback, and build quick rough user flow mockups.' }
    ],
    books: [
      { id: 'inspired', title: 'INSPIRED: How to Create Tech Products Customers Love', author: 'Marty Cagan', year: '2017', description: 'The undisputed bible of modern product management in empowered product teams.', keyTakeaway: 'Focus on outcome over output; solve customer problems in ways that work for business.' },
      { id: 'cracking-pm', title: 'Cracking the PM Interview', author: 'Gayle Laakmann McDowell & Jackie Bavaro', year: '2013', description: 'Comprehensive playbook for landing PM positions at top-tier tech companies.', keyTakeaway: 'Structure messy open-ended problems with structured, transparent frameworks.' },
      { id: 'the-mom-test', title: 'The Mom Test', author: 'Rob Fitzpatrick', year: '2013', description: 'How to talk to customers and learn if your business is a good idea when everyone is lying to you.', keyTakeaway: 'Never ask people if they would buy your idea; ask about their past actual behaviors.' }
    ],
    movies: [
      { id: 'steve-jobs', title: 'Steve Jobs', type: 'Movie', year: '2015', description: 'Backstage drama across three iconic product launches (Macintosh, NeXT, iMac).', relevance: 'Masterclass in uncompromising product vision, stagecraft, and team alignment.' },
      { id: 'blackberry', title: 'BlackBerry', type: 'Movie', year: '2023', description: 'The meteoric rise and catastrophic collapse of the world’s first smartphone empire.', relevance: 'A vital cautionary tale on ignoring smartphone touchscreen paradigms and tech debt.' },
      { id: 'the-playlist', title: 'The Playlist', type: 'Series', year: '2022', description: 'Dramatization of how Daniel Ek and his team built Spotify to legalize streaming music.', relevance: 'Highlights product licensing hurdles, freemium mechanics, and streaming latency breakthroughs.' }
    ]
  },
  {
    id: 'digital-marketer',
    slug: 'digital-marketer',
    title: 'Digital Growth Marketer & Strategist',
    category: 'Marketing & Growth',
    field: 'Creative',
    summary: 'Drive customer acquisition, scale SEO/SEM campaigns, optimize conversion funnels, and build brand resonance.',
    description: 'Digital Marketers engineer organic and paid growth engines. Combining creative messaging with rigorous attribution data, you will execute programmatic ad campaigns, dominate organic search engines, nurture email retention loops, and build viral social campaigns.',
    salaryRangeINR: {
      entry: '₹4,00,000 - ₹6,50,000',
      mid: '₹7,50,000 - ₹13,00,000',
      senior: '₹15,00,000 - ₹28,00,000',
      averageDisplay: '₹9,80,000 / yr'
    },
    jobRoles: ['Growth Marketer', 'Performance Marketing Specialist', 'SEO Strategist', 'Content Marketing Lead', 'Retention Specialist'],
    tags: ['Marketing', 'Communication', 'Creative Arts', 'Creativity', 'Business'],
    requiredSkills: [
      { name: 'Communication', weight: 0.30, minLevel: 7 },
      { name: 'Creativity', weight: 0.25, minLevel: 7 },
      { name: 'Leadership', weight: 0.15, minLevel: 5 },
      { name: 'Problem Solving', weight: 0.15, minLevel: 5 },
      { name: 'SQL', weight: 0.08, minLevel: 3 },
      { name: 'Design', weight: 0.07, minLevel: 4 }
    ],
    difficulty: 'Beginner',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill', 'Explore options'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Content Marketing & Technical SEO',
        duration: '0 - 2 Months',
        subtitle: 'Keyword Research, On-Page SEO & Copywriting',
        description: 'Understand how search engines rank information. Master high-converting copywriting, keyword search intent, and on-page metadata optimization.',
        skillsToLearn: ['Search Intent & Keyword Research', 'On-Page SEO (Headings, Schema, Alt tags)', 'Persuasive Direct Response Copywriting', 'Google Search Console & Bing Webmaster', 'WordPress & Webflow Publishing'],
        resources: [
          { title: 'Ahrefs SEO Training Course', provider: 'Ahrefs YouTube & Academy', url: 'https://ahrefs.com/academy/seo-training-course', free: true },
          { title: 'HubSpot Inbound Marketing Certification', provider: 'HubSpot Academy', url: 'https://academy.hubspot.com/', free: true }
        ],
        projectIdea: 'Create a pillar content strategy and rank a targeted long-tail keyword in the top 5 Google search results.',
        keyDeliverables: ['Keyword research spreadsheet with search intent mapping', '3 published, optimized long-form guides']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Performance Marketing (Google & Meta Ads)',
        duration: '2 - 5 Months',
        subtitle: 'Ad Creatives, Retargeting & ROAS Optimization',
        description: 'Run targeted paid acquisition campaigns across Meta Ads (Facebook/Instagram) and Google Ads (Search, Display, Performance Max).',
        skillsToLearn: ['Google Ads Search & Performance Max', 'Meta Ads Manager & Pixel Setup', 'Ad Copywriting & Creative Hook Testing', 'ROAS (Return on Ad Spend) Optimization', 'Audience Segmentation & Lookalike Audiences'],
        resources: [
          { title: 'Google Skillshop Google Ads Certifications', provider: 'Google Skillshop', url: 'https://skillshop.withgoogle.com/', free: true },
          { title: 'Meta Blueprint Training', provider: 'Meta Blueprint', url: 'https://www.facebook.com/business/learn', free: true }
        ],
        projectIdea: 'Design a mock $5,000 monthly multi-channel advertising budget split with creative briefs, target CPA, and UTM tracking.',
        keyDeliverables: ['Google Ads Search campaign structure', '10 high-converting ad creative concepts with copy variations']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Email Marketing, CRM & Retention Loops',
        duration: '5 - 8 Months',
        subtitle: 'Automated Drip Sequences & Lifecycle Marketing',
        description: 'Acquiring customers is half the battle; retention drives enterprise value. Build automated welcome drips, cart abandonment flows, and re-engagement triggers.',
        skillsToLearn: ['Email Marketing Platforms (Klaviyo / Mailchimp)', 'Drip Automation Logic & Triggers', 'Subject Line A/B Testing & Deliverability', 'Customer Lifetime Value (LTV) Optimization', 'SMS & Push Notification Marketing'],
        resources: [
          { title: 'Klaviyo Academy Certification', provider: 'Klaviyo', url: 'https://academy.klaviyo.com/', free: true },
          { title: 'Really Good Emails Best Practices', provider: 'Really Good Emails', url: 'https://reallygoodemails.com/', free: true }
        ],
        projectIdea: 'Build an automated 5-part email nurture sequence for a subscription service achieving >35% open rates.',
        keyDeliverables: ['Full copy and design for 5 automated email triggers', 'Segmentation flow chart']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Conversion Rate Optimization (CRO) & GA4',
        duration: '8 - 10 Months',
        subtitle: 'Landing Page Audits, Heatmaps & Google Analytics 4',
        description: 'Maximize the return on every visitor: analyze heatmaps with Hotjar, run landing page split tests, and configure custom events in GA4.',
        skillsToLearn: ['Google Analytics 4 (GA4) Event Tracking', 'Google Tag Manager (GTM) Configuration', 'Conversion Rate Optimization (CRO) Frameworks', 'Heatmap Analysis (Hotjar/Clarity)', 'Landing Page Wireframing'],
        resources: [
          { title: 'Google Analytics 4 Certification', provider: 'Google Skillshop', url: 'https://skillshop.withgoogle.com/', free: true },
          { title: 'CXL Institute Free Conversion Guides', provider: 'CXL', url: 'https://cxl.com/blog/', free: true }
        ],
        projectIdea: 'Conduct a comprehensive heuristic CRO audit on a live e-commerce store and draft an actionable redesign proposal.',
        keyDeliverables: ['Heuristic CRO audit report with 10 testable hypotheses', 'Configured GA4 events dashboard']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Growth Strategy & Agency/Client Portfolio',
        duration: '10 - 12 Months',
        subtitle: 'Omnichannel Playbooks, Client Pitches & Case Studies',
        description: 'Synthesize your marketing expertise into client pitch decks, demonstrating measurable ROI, ROAS, and customer acquisition payback.',
        skillsToLearn: ['Marketing Budget Allocation & Attribution Modeling', 'Client Pitch Decks & Proposals', 'Organic Brand Partnerships & Influencer Outreach', 'Interviewing for Growth Roles'],
        resources: [
          { title: 'GrowthX Open Masterclasses', provider: 'GrowthX', url: 'https://growthx.club/', free: true }
        ],
        projectIdea: 'Comprehensive 12-month Go-To-Market Growth Playbook for an emerging D2C brand targeting the Indian market.',
        keyDeliverables: ['30-slide Growth Strategy Deck', 'Live portfolio showcasing real campaign metrics and creative assets']
      }
    ],
    courses: [
      { id: 'hubspot-inbound', title: 'Inbound Marketing Certification', provider: 'HubSpot Academy', duration: '5 hours', level: 'Beginner', isFree: true, link: 'https://academy.hubspot.com/', description: 'Foundations of content creation, lead nurturing, and organic lead generation.' },
      { id: 'google-digital-garage', title: 'Fundamentals of Digital Marketing', provider: 'Google Digital Garage', duration: '40 hours', level: 'Beginner', isFree: true, link: 'https://learndigital.withgoogle.com/', description: 'Accredited 26-module certificate covering all aspects of modern web promotion.' },
      { id: 'ahrefs-seo', title: 'SEO for Beginners', provider: 'Ahrefs', duration: '2 hours', level: 'Beginner', isFree: true, link: 'https://ahrefs.com/academy/seo-training-course', description: 'Demystifying backlinks, technical crawlability, and anchor text.' },
      { id: 'cxl-copy', title: 'Direct-Response Copywriting Fundamentals', provider: 'CXL Institute', duration: '4 hours', level: 'Intermediate', isFree: true, link: 'https://cxl.com/', description: 'Writing headlines, hooks, and calls to action that convert traffic.' }
    ],
    technologies: [
      { id: 'ga4', name: 'Google Analytics 4 & Tag Manager', category: 'Analytics', popularity: 98, learningCurve: 'Medium', whyImportant: 'Standard analytics foundation for tracking web traffic, user attribution, and conversions.' },
      { id: 'meta-ads', name: 'Meta Ads Manager', category: 'Paid Advertising', popularity: 95, learningCurve: 'Medium', whyImportant: 'Direct access to billions of consumers on Instagram and Facebook with granular targeting.' },
      { id: 'ahrefs', name: 'Ahrefs & SEMrush', category: 'Search Engine Optimization', popularity: 93, learningCurve: 'Low', whyImportant: 'Enables deep competitor backlink analysis, keyword ranking checks, and site audits.' },
      { id: 'klaviyo', name: 'Klaviyo / Mailchimp', category: 'Email Automation', popularity: 91, learningCurve: 'Low', whyImportant: 'Powers lifecycle email drips, cart abandonment flows, and SMS marketing.' }
    ],
    books: [
      { id: 'traction', title: 'Traction: How Any Startup Can Achieve Explosive Customer Growth', author: 'Gabriel Weinberg & Justin Mares', year: '2014', description: 'The 19 channels to customer acquisition and the Bullseye Framework.', keyTakeaway: 'Most startups fail not from poor product, but from lack of a repeatable distribution channel.' },
      { id: 'breakthrough-advertising', title: 'Breakthrough Advertising', author: 'Eugene Schwartz', year: '1966', description: 'The legendary masterpiece on consumer awareness stages (Unaware to Most Aware).', keyTakeaway: 'Copy cannot create desire for a product; it can only channel preexisting human desires.' },
      { id: 'building-a-storybrand', title: 'Building a StoryBrand', author: 'Donald Miller', year: '2017', description: 'Clarify your message so customers will listen using the 7 universal story elements.', keyTakeaway: 'The customer is the hero of the story, not your brand; you are their guide.' }
    ],
    movies: [
      { id: 'mad-men', title: 'Mad Men', type: 'Series', year: '2007-2015', description: 'The golden age of 1960s Madison Avenue advertising firms and master copywriter Don Draper.', relevance: 'Brilliant masterclass in emotional copywriting, client psychology, and creative pitches.' },
      { id: 'art-and-copy', title: 'Art & Copy', type: 'Documentary', year: '2009', description: 'Explores famous advertising campaigns like "Just Do It" and "Think Different" from the creators.', relevance: 'Inspires profound creative courage in crafting cultural movements from slogans.' },
      { id: 'the-joneses', title: 'The Joneses', type: 'Movie', year: '2009', description: 'A seemingly perfect family moves into a wealthy suburb, secretly hired to stealth-market luxury items.', relevance: 'Fascinating look at peer influence, word-of-mouth psychology, and aspirational marketing.' }
    ]
  },
  {
    id: 'financial-analyst',
    slug: 'financial-analyst',
    title: 'Financial Analyst & Investment Strategist',
    category: 'Finance & Banking',
    field: 'Business & Management',
    summary: 'Build discounted cash flow models, evaluate corporate valuations, assess risk portfolios, and direct investment capital.',
    description: 'Financial Analysts decode balance sheets, cash flows, and macroeconomic trends to guide capital deployment. Whether in investment banking, venture capital, or corporate finance, you will construct DCF models, forecast revenue curves, and analyze market mergers.',
    salaryRangeINR: {
      entry: '₹6,00,000 - ₹10,00,000',
      mid: '₹12,00,000 - ₹20,00,000',
      senior: '₹24,00,000 - ₹48,00,000+',
      averageDisplay: '₹15,50,000 / yr'
    },
    jobRoles: ['Financial Analyst', 'Equity Research Associate', 'Investment Banking Analyst', 'FP&A Specialist', 'Portfolio Manager'],
    tags: ['Finance', 'Business', 'Math', 'Data', 'Problem Solving'],
    requiredSkills: [
      { name: 'Math', weight: 0.28, minLevel: 7 },
      { name: 'Problem Solving', weight: 0.24, minLevel: 7 },
      { name: 'SQL', weight: 0.16, minLevel: 5 },
      { name: 'Communication', weight: 0.18, minLevel: 6 },
      { name: 'Leadership', weight: 0.14, minLevel: 4 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Office', 'Hybrid'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Financial Statements & Accounting Core',
        duration: '0 - 3 Months',
        subtitle: '3-Statement Linking, GAAP/IFRS & Financial Ratios',
        description: 'Master the universal language of business: link Income Statements, Balance Sheets, and Cash Flow Statements seamlessly.',
        skillsToLearn: ['Income Statement, Balance Sheet, Cash Flow Linkages', 'Working Capital & Depreciation Schedules', 'Liquidity, Solvency & Profitability Ratios', 'Time Value of Money (NPV, IRR)', 'Advanced Excel Shortcut Mechanics'],
        resources: [
          { title: 'Introduction to Financial Accounting', provider: 'Wharton / Coursera', url: 'https://www.coursera.org/learn/wharton-accounting', free: true },
          { title: 'Aswath Damodaran Valuation Lectures', provider: 'NYU Stern / YouTube', url: 'https://www.youtube.com/c/AswathDamodaranonValuation', free: true }
        ],
        projectIdea: 'Audit an Indian publicly listed company on BSE/NSE, reconstructing its 3 financial statements and computing 5 years of historical financial ratios.',
        keyDeliverables: ['Dynamic 3-statement Excel model', 'Financial health assessment executive summary']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: DCF Valuation & Financial Modeling',
        duration: '3 - 6 Months',
        subtitle: 'WACC, Unlevered Free Cash Flows & Terminal Value',
        description: 'Value companies from first principles using Discounted Cash Flow (DCF) modeling, sensitivity tables, and comparable trading multiples.',
        skillsToLearn: ['Discounted Cash Flow (DCF) Modeling', 'WACC (Weighted Average Cost of Capital)', 'Trading & Transaction Comparables (Comps)', 'Sensitivity Tables & Scenario Analysis', 'Cap Table Modeling'],
        resources: [
          { title: 'Corporate Finance Institute Free Essentials', provider: 'CFI', url: 'https://corporatefinanceinstitute.com/', free: true },
          { title: 'Multiple Expansion Valuation Guides', provider: 'Multiple Expansion', url: 'https://www.multipleexpansion.com/', free: true }
        ],
        projectIdea: 'Build an institutional-grade DCF valuation model with Monte Carlo simulation for a high-growth tech startup.',
        keyDeliverables: ['Fully linked DCF model with bull/bear scenarios', 'One-page investment thesis memo']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Corporate Finance & M&A / LBO Basics',
        duration: '6 - 9 Months',
        subtitle: 'Capital Structure, Mergers & Leveraged Buyouts',
        description: 'Understand how private equity and corporate development evaluate acquisitions, debt financing, accretion/dilution, and returns.',
        skillsToLearn: ['Accretion / Dilution Analysis', 'Leveraged Buyout (LBO) Mechanics', 'Debt Schedules & Interest Tax Shields', 'Capital Allocation Strategies', 'Credit Risk Assessment'],
        resources: [
          { title: 'Mergers & Inquisitions Free Guides', provider: 'Mergers & Inquisitions', url: 'https://mergersandinquisitions.com/', free: true },
          { title: 'Khan Academy Finance and Capital Markets', provider: 'Khan Academy', url: 'https://www.khanacademy.org/economics-finance-domain/core-finance', free: true }
        ],
        projectIdea: 'Simple LBO model analyzing the potential buyout returns (IRR, MoIC) of a mature consumer goods company.',
        keyDeliverables: ['LBO waterfall return spreadsheet', 'Merger synergy breakdown deck']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Python for Quant Finance & Portfolio Risk',
        duration: '9 - 11 Months',
        subtitle: 'yfinance, Modern Portfolio Theory & Sharpe Ratio',
        description: 'Bring programming to Wall Street: automate financial data scraping, optimize Markowitz efficient frontiers, and calculate Value-at-Risk.',
        skillsToLearn: ['Python (yfinance, pandas_datareader)', 'Modern Portfolio Theory (Markowitz Efficient Frontier)', 'Sharpe & Sortino Ratio Calculations', 'Value-at-Risk (VaR) & Stress Testing', 'Monte Carlo Stock Price Simulators'],
        resources: [
          { title: 'Python for Finance Course', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Quantitative Economics with Python', provider: 'QuantEcon', url: 'https://quantecon.org/', free: true }
        ],
        projectIdea: 'Automated Portfolio Optimizer script that generates the optimal risk-adjusted allocation for 10 Nifty 50 stocks.',
        keyDeliverables: ['Python Jupyter notebook generating live efficient frontiers', 'Automated risk metrics reporting dashboard']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Equity Research Report & CFA Prep',
        duration: '11 - 12 Months',
        subtitle: 'Investment Memos, Pitch Decks & CFA Level 1 Concepts',
        description: 'Author an institutional-quality 15-page equity research initiation report with a Buy/Hold/Sell recommendation.',
        skillsToLearn: ['Equity Research Report Standards', 'Earnings Call Q&A Analysis', 'CFA Level 1 Ethics & Core Domains', 'Pitching Investments to Investment Committees'],
        resources: [
          { title: 'CFA Institute Open Resources', provider: 'CFA Institute', url: 'https://www.cfainstitute.org/', free: true }
        ],
        projectIdea: 'Full Equity Research Initiation of Coverage on a renewable energy enterprise with price targets and catalyst timelines.',
        keyDeliverables: ['15-page initiation report PDF with model attachments', 'Executive 5-minute stock pitch recording']
      }
    ],
    courses: [
      { id: 'wharton-finance', title: 'Introduction to Corporate Finance', provider: 'Wharton / Coursera', duration: '4 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/learn/wharton-finance', description: 'Time value of money, risk-return tradeoff, capital budgeting, and asset pricing.' },
      { id: 'damodaran-online', title: 'Valuation Masterclasses', provider: 'NYU Stern (Aswath Damodaran)', duration: 'Semester-long', level: 'Intermediate', isFree: true, link: 'https://pages.stern.nyu.edu/~adamodar/', description: 'Legendary, completely free lecture series from the "Dean of Valuation".' },
      { id: 'mit-finance', title: 'Finance Theory I', provider: 'MIT OpenCourseWare', duration: '12 weeks', level: 'Intermediate', isFree: true, link: 'https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/', description: 'Foundations of portfolio theory, capital markets, and options pricing.' },
      { id: 'fcc-fin-python', title: 'Python for Financial Analysis', provider: 'freeCodeCamp', duration: '5 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Algorithmic trading basics, moving averages, and backtesting.' }
    ],
    technologies: [
      { id: 'excel-modeling', name: 'Advanced Excel & Power Query', category: 'Financial Modeling', popularity: 99, learningCurve: 'Medium', whyImportant: 'Universal foundation for investment banking models and corporate boards.' },
      { id: 'bloomberg', name: 'Bloomberg Terminal & FactSet', category: 'Market Intelligence', popularity: 92, learningCurve: 'Medium', whyImportant: 'Real-time quotes, global macro news, and consensus analyst estimates.' },
      { id: 'python-fin', name: 'Python (Pandas & NumPy)', category: 'Quantitative Analysis', popularity: 90, learningCurve: 'Medium', whyImportant: 'Used for backtesting quantitative factor models and automated scraping.' },
      { id: 'tableau-fin', name: 'Power BI & Tableau for FP&A', category: 'Executive Dashboards', popularity: 88, learningCurve: 'Low', whyImportant: 'Visualizes budget vs actual variances and margin sensitivities for CFOs.' }
    ],
    books: [
      { id: 'intelligent-investor', title: 'The Intelligent Investor', author: 'Benjamin Graham', year: '1949', description: 'The timeless guide to value investing and emotional discipline in volatile markets.', keyTakeaway: 'Margin of safety is the secret of sound investment; market is your servant, not guide.' },
      { id: 'valuation-mckinsey', title: 'Valuation: Measuring and Managing the Value of Companies', author: 'McKinsey & Company Inc.', year: '2020', description: 'The authoritative corporate valuation reference used by global consultants and bankers.', keyTakeaway: 'Value is created by return on invested capital (ROIC) exceeding the cost of capital.' },
      { id: 'psychology-of-money', title: 'The Psychology of Money', author: 'Morgan Housel', year: '2020', description: 'Timeless lessons on wealth, greed, risk, and human behavior.', keyTakeaway: 'Doing well with money has a little to do with how smart you are and a lot to do with how you behave.' }
    ],
    movies: [
      { id: 'the-big-short', title: 'The Big Short', type: 'Movie', year: '2015', description: 'Four outsiders spot the housing bubble collapse before anyone else and bet against Wall Street.', relevance: 'Brilliant explanation of credit default swaps, collateralized debt obligations, and contrarian research.' },
      { id: 'wall-street', title: 'Wall Street', type: 'Movie', year: '1987', description: 'Bud Fox is seduced by the ruthless corporate raider Gordon Gekko.', relevance: 'Classic study of insider trading ethics, corporate restructuring, and financial ambitions.' },
      { id: 'too-big-to-fail', title: 'Too Big to Fail', type: 'Movie', year: '2011', description: 'Behind closed doors during the 2008 Lehman Brothers liquidity meltdown.', relevance: 'Reveals the delicate interconnected plumbing of central banks and global liquidity.' }
    ]
  },
  {
    id: 'healthcare-analyst',
    slug: 'healthcare-analyst',
    title: 'Healthcare Informatics & Clinical Data Analyst',
    category: 'Healthcare & Life Sciences',
    field: 'Domain Specialist',
    summary: 'Analyze clinical health records, evaluate epidemiological trends, improve patient outcomes, and optimize healthcare operations.',
    description: 'Healthcare Analysts turn electronic health records (EHR), clinical trials, and epidemiological data into life-saving operational improvements. You will track hospital readmission metrics, evaluate treatment efficacy, ensure HIPAA compliance, and assist public health decision-makers.',
    salaryRangeINR: {
      entry: '₹5,00,000 - ₹8,00,000',
      mid: '₹9,00,000 - ₹16,00,000',
      senior: '₹18,00,000 - ₹32,00,000',
      averageDisplay: '₹12,20,000 / yr'
    },
    jobRoles: ['Healthcare Data Analyst', 'Clinical Informatics Specialist', 'Health Systems Analyst', 'Biostatistician', 'Epidemiology Modeler'],
    tags: ['Healthcare', 'Data', 'Science', 'Technology', 'Problem Solving'],
    requiredSkills: [
      { name: 'Data', weight: 0.26, minLevel: 7 },
      { name: 'Problem Solving', weight: 0.22, minLevel: 6 },
      { name: 'Math', weight: 0.20, minLevel: 6 },
      { name: 'SQL', weight: 0.18, minLevel: 5 },
      { name: 'Communication', weight: 0.14, minLevel: 5 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Hybrid', 'Office', 'Remote'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Health Systems & Medical Terminology',
        duration: '0 - 2 Months',
        subtitle: 'ICD-10, CPT, EHR Architectures & HIPAA',
        description: 'Understand healthcare terminology, diagnostic coding systems (ICD-10, SNOMED-CT), and medical privacy governance.',
        skillsToLearn: ['Medical Terminology Fundamentals', 'Diagnostic Coding (ICD-10, CPT, HCPCS)', 'Electronic Health Records (Epic, Cerner)', 'HIPAA & Patient Data Anonymization', 'Healthcare Value Chain Overview'],
        resources: [
          { title: 'Health Informatics Specialization', provider: 'Johns Hopkins / Coursera', url: 'https://www.coursera.org/specializations/health-informatics', free: true },
          { title: 'CDC Public Health 101 Training', provider: 'CDC', url: 'https://www.cdc.gov/training/publichealth101/', free: true }
        ],
        projectIdea: 'Analyze synthetic MIMIC medical data to map patient disease pathways across ICD-10 diagnostic clusters.',
        keyDeliverables: ['Data dictionary for clinical terminology', 'Privacy-compliant sanitization script']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Clinical SQL & Health Data Warehousing',
        duration: '2 - 5 Months',
        subtitle: 'OMOP Common Data Model & Patient Trajectory Queries',
        description: 'Query massive relational hospital databases: calculate 30-day readmission rates, average length of stay (ALOS), and drug dosage trends.',
        skillsToLearn: ['SQL for Healthcare Queries', 'OMOP Common Data Model (CDM)', 'Length of Stay (ALOS) & Readmission Metrics', 'Survival Analysis Concepts (Kaplan-Meier)', 'Data Quality Verification'],
        resources: [
          { title: 'OHDSI (OMOP) Open Tutorials', provider: 'OHDSI', url: 'https://www.ohdsi.org/', free: true },
          { title: 'SQL for Health Data Analysis', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true }
        ],
        projectIdea: 'SQL script library calculating 30-day cardiac patient readmission rates grouped by chronic comorbidity index.',
        keyDeliverables: ['SQL analytical workbook', 'Automated data validation report']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Biostatistics & Python/R Clinical Modeling',
        duration: '5 - 8 Months',
        subtitle: 'Odds Ratios, Logistic Regression & Epidemiological Curves',
        description: 'Apply inferential biostatistics to clinical trials: compute odds ratios, relative risk, and p-values for experimental treatments.',
        skillsToLearn: ['Biostatistics (t-tests, ANOVA, Chi-square)', 'Logistic Regression & Odds Ratios', 'Python (Pandas, SciPy, Statsmodels) or R', 'Cohort Matching (Propensity Score Matching)', 'Epidemiological Curve Fitting'],
        resources: [
          { title: 'Biostatistics in Public Health Specialization', provider: 'Johns Hopkins / Coursera', url: 'https://www.coursera.org/specializations/biostatistics-public-health', free: true },
          { title: 'Khan Academy Statistics and Probability', provider: 'Khan Academy', url: 'https://www.khanacademy.org/math/statistics-probability', free: true }
        ],
        projectIdea: 'Observational study evaluating whether diabetes comorbidity increases COVID-19 hospital stay duration using logistic regression.',
        keyDeliverables: ['Reproducible R or Python statistical notebook', 'Academic-style research summary']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Clinical Dashboards & Operational Intelligence',
        duration: '8 - 10 Months',
        subtitle: 'Tableau / Power BI for Hospital Operations',
        description: 'Construct real-time operational dashboards for ICU bed occupancy, emergency department triage velocity, and antibiotic stewardship.',
        skillsToLearn: ['Hospital Operational KPIs', 'Tableau / Power BI Healthcare Dashboards', 'Alert Thresholds & Outlier Triggers', 'Clinical Decision Support Systems (CDSS)', 'Cost of Care Analysis'],
        resources: [
          { title: 'Health Data Visualization Best Practices', provider: 'Tableau Public Healthcare Gallery', url: 'https://public.tableau.com/en-us/gallery', free: true }
        ],
        projectIdea: 'Interactive Emergency Department Triage Dashboard monitoring door-to-doctor times and bed allocation bottlenecks.',
        keyDeliverables: ['Interactive Tableau Public dashboard', 'Executive clinical staff presentation deck']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Industry Portfolio & Healthcare Accreditation',
        duration: '10 - 12 Months',
        subtitle: 'CPHIMS Concepts, Regulatory Compliance & Case Studies',
        description: 'Consolidate your healthcare portfolio, demonstrate knowledge of health regulations (NABH in India, FDA, HIPAA), and interview with hospitals/insurers.',
        skillsToLearn: ['Healthcare Regulatory Frameworks', 'Clinical Research Case Studies', 'Mock Technical Interviews for Health Analysts', 'CPHIMS / CAHIMS Exam Topics'],
        resources: [
          { title: 'HIMSS Global Health Conference Open Webinars', provider: 'HIMSS', url: 'https://www.himss.org/', free: true }
        ],
        projectIdea: 'Comprehensive Health Informatics Case Study recommending a clinical workflow change that reduces patient discharge delays by 22%.',
        keyDeliverables: ['Published case study on GitHub or personal portfolio', 'Curated healthcare resume']
      }
    ],
    courses: [
      { id: 'jh-health-data', title: 'Data Science in Healthcare', provider: 'Johns Hopkins University', duration: '6 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/learn/data-science-course', description: 'Explore how medical data science improves diagnostics and public health.' },
      { id: 'michigan-ehrs', title: 'Healthcare Data Informatics', provider: 'University of Michigan', duration: '4 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/', description: 'Understanding electronic medical records, ontologies, and clinical workflows.' },
      { id: 'fcc-biostats', title: 'Biostatistics and Clinical Research Essentials', provider: 'freeCodeCamp', duration: '4 hours', level: 'Intermediate', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Statistical testing, clinical trials design, and medical significance metrics.' },
      { id: 'who-epidemiology', title: 'Epidemiology in Action', provider: 'World Health Organization (OpenWHO)', duration: 'Self-paced', level: 'Beginner', isFree: true, link: 'https://openwho.org/', description: 'Outbreak investigation, surveillance systems, and epidemiological analysis.' }
    ],
    technologies: [
      { id: 'sql-health', name: 'SQL & OMOP CDM', category: 'Health Databases', popularity: 95, learningCurve: 'Medium', whyImportant: 'Standardized data structure unifying electronic health records worldwide.' },
      { id: 'r-stats', name: 'R & RStudio (or Python)', category: 'Biostatistics', popularity: 92, learningCurve: 'Medium', whyImportant: 'Preferred statistical language for medical journals, FDA trials, and epidemiological modeling.' },
      { id: 'tableau-health', name: 'Tableau for Healthcare', category: 'Data Visualization', popularity: 90, learningCurve: 'Low', whyImportant: 'Widely used in hospital networks for executive clinical dashboards and bed management.' },
      { id: 'ehr-tools', name: 'EHR Simulation (Epic / Cerner basics)', category: 'Clinical Systems', popularity: 88, learningCurve: 'Low', whyImportant: 'Essential for understanding clinical order entry and patient record documentation.' }
    ],
    books: [
      { id: 'the-patient-will-see-you-now', title: 'The Patient Will See You Now', author: 'Eric Topol, MD', year: '2015', description: 'The future of medicine is in your hands through smartphones, big data, and genomics.', keyTakeaway: 'Democratizing medical data empowers patients and revolutionizes diagnostic accuracy.' },
      { id: 'deep-medicine', title: 'Deep Medicine: How AI Can Make Healthcare Human Again', author: 'Eric Topol, MD', year: '2019', description: 'How machine learning frees doctors from screens to restore the patient-physician bond.', keyTakeaway: 'Algorithmic efficiency should return empathy and listening time back to bedside clinical practice.' },
      { id: 'bad-pharma', title: 'Bad Pharma', author: 'Ben Goldacre', year: '2012', description: 'How drug companies mislead doctors and harm patients through flawed trial data.', keyTakeaway: 'Transparent data reporting and open trial registries are vital for patient safety.' }
    ],
    movies: [
      { id: 'contagion', title: 'Contagion', type: 'Movie', year: '2011', description: 'Healthcare professionals, government officials, and everyday people face an airborne pandemic.', relevance: 'Widely acclaimed for scientific accuracy in modeling R0 reproduction numbers and contact tracing.' },
      { id: 'dopesick', title: 'Dopesick', type: 'Series', year: '2021', description: 'How one company triggered the worst opioid crisis in American history through manipulated data.', relevance: 'Demonstrates why healthcare analysts must maintain relentless ethical scrutiny over clinical claims.' },
      { id: 'awakenings', title: 'Awakenings', type: 'Movie', year: '1990', description: 'Dr. Oliver Sacks discovers the beneficial effects of the drug L-Dopa on catatonic patients.', relevance: 'Inspires deep compassion for clinical trial observational rigor and patient humanity.' }
    ]
  },
  {
    id: 'digital-content-creator',
    slug: 'digital-content-creator',
    title: 'Digital Content Creator & Media Producer',
    category: 'Media & Creative Arts',
    field: 'Creative',
    summary: 'Produce engaging video storytelling, audio podcasts, viral social narratives, and high-impact digital brands.',
    description: 'Content Creators are the new media broadcasters. By combining high-retention video editing, visual effects, authentic narrative pacing, and platform distribution algorithms (YouTube, Spotify, Instagram), you create passionate communities and monetize personal media empires.',
    salaryRangeINR: {
      entry: '₹3,50,000 - ₹6,00,000',
      mid: '₹7,00,000 - ₹15,00,000',
      senior: '₹18,00,000 - ₹40,00,000+',
      averageDisplay: '₹11,00,000 / yr'
    },
    jobRoles: ['Video Producer', 'YouTube Strategist', 'Podcast Host & Producer', 'Creative Director', 'Social Media Storyteller'],
    tags: ['Creative Arts', 'Creativity', 'Communication', 'Design', 'Marketing'],
    requiredSkills: [
      { name: 'Creativity', weight: 0.35, minLevel: 7 },
      { name: 'Communication', weight: 0.30, minLevel: 7 },
      { name: 'Design', weight: 0.15, minLevel: 5 },
      { name: 'Leadership', weight: 0.10, minLevel: 4 },
      { name: 'Problem Solving', weight: 0.10, minLevel: 4 }
    ],
    difficulty: 'Beginner',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill', 'Explore options'],
    workStyleFit: ['Remote', 'Hybrid', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Visual Storytelling & Pre-Production',
        duration: '0 - 2 Months',
        subtitle: 'Scriptwriting, Storyboarding & Hook Psychology',
        description: 'Learn the psychology of keeping human attention: 3-act narrative structures, opening hooks, and clear scriptwriting.',
        skillsToLearn: ['3-Second Hook Architecture', 'Video Scriptwriting & Storyboarding', 'Audio Recording (Microphone selection & Gain staging)', 'Camera Framing, 3-Point Lighting & Composition', 'B-Roll Planning'],
        resources: [
          { title: 'Film Riot Filmmaking Masterclasses', provider: 'YouTube (Film Riot)', url: 'https://www.youtube.com/c/filmriot', free: true },
          { title: 'StudioBinder Screenwriting Guides', provider: 'StudioBinder', url: 'https://www.studiobinder.com/blog/', free: true }
        ],
        projectIdea: 'Script and storyboard a 90-second educational explainer video on a fascinating science or history topic.',
        keyDeliverables: ['Formatted screenplay with scene directions', 'Hand-drawn or digital storyboard deck']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Video Editing (Premiere / DaVinci Resolve)',
        duration: '2 - 5 Months',
        subtitle: 'Pacing, J-Cuts, Sound Design & Color Grading',
        description: 'Transform raw footage into dynamic cinema: rhythm cutting, audio ducking, foley sound design, and color grading.',
        skillsToLearn: ['DaVinci Resolve / Premiere Pro Workflows', 'Pacing & Match Cuts (J/L-Cuts)', 'Sound Design & Layering (Foley, Risers, Impacts)', 'Color Correction & Look LUT Application', 'Export Standards for 4K / Mobile Verticals'],
        resources: [
          { title: 'Blackmagic DaVinci Resolve Free Official Training', provider: 'Blackmagic Design', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training', free: true },
          { title: 'Casey Faris DaVinci Tutorials', provider: 'YouTube (Casey Faris)', url: 'https://www.youtube.com/c/CaseyFaris', free: true }
        ],
        projectIdea: 'Edit a high-energy 3-minute travel or tech review video with multi-track sound design and custom color grading.',
        keyDeliverables: ['High-definition exported master video', 'DaVinci Resolve / Premiere project file']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Motion Graphics & Thumbnail Psychology',
        duration: '5 - 8 Months',
        subtitle: 'After Effects, Kinetic Typography & CTR Packaging',
        description: 'Hook the viewer before they even click: master YouTube thumbnail contrast psychology and author kinetic typography.',
        skillsToLearn: ['After Effects Kinetic Typography', 'Keyframing Motion Curves (Ease In/Out)', 'Photoshop Thumbnail Design (Depth, Cutouts, Contrast)', 'Click-Through Rate (CTR) Optimization', 'Brand Identity & Visual Style Consistency'],
        resources: [
          { title: 'Ben Marriott Motion Graphics Tutorials', provider: 'YouTube (Ben Marriott)', url: 'https://www.youtube.com/c/BenMarriott', free: true },
          { title: 'PiXimperfect Photoshop Masterclasses', provider: 'YouTube (PiXimperfect - Unmesh Dinda)', url: 'https://www.youtube.com/c/PiXimperfect', free: true }
        ],
        projectIdea: 'Create a motion-graphics animated intro title card and 3 high-contrast A/B testable YouTube thumbnails in Photoshop.',
        keyDeliverables: ['Rendered motion graphics template', '3 distinct thumbnail variations with rationale']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Audience Growth, Analytics & Monetization',
        duration: '8 - 10 Months',
        subtitle: 'Algorithm Retention Curves, Sponsorships & Community',
        description: 'Understand the YouTube recommendation algorithm: average percentage viewed (APV), click-through rate, and brand partnership deals.',
        skillsToLearn: ['YouTube Analytics (APV, Impressions, Retention Graphs)', 'Sponsorship Pitching & Media Kit Creation', 'Community Building (Discord, Newsletter)', 'Repurposing Long-form into Short-form Reels/Shorts', 'Merchandising & Digital Product Sales'],
        resources: [
          { title: 'Creator Support by Colin and Samir', provider: 'YouTube / Podcast', url: 'https://www.youtube.com/c/ColinandSamir', free: true },
          { title: 'Think Media Video Ranking Strategy', provider: 'YouTube (Think Media)', url: 'https://www.youtube.com/c/ThinkMediaTV', free: true }
        ],
        projectIdea: 'Launch a niche YouTube channel with 5 polished videos, a media kit, and automated multi-platform distribution to Shorts/Reels.',
        keyDeliverables: ['Live public YouTube channel with 5 videos', 'Professional Media Kit PDF with sponsorship rates']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Production Studio Scaling & Commercial Reel',
        duration: '10 - 12 Months',
        subtitle: 'Production Workflows, Client Commercials & Showreel',
        description: 'Transition from solo creator to commercial producer or agency lead: master lighting setups, client contracts, and showreels.',
        skillsToLearn: ['Commercial Client Video Production', 'Contracts, Licensing & Music Royalties', 'Multi-camera Live Streaming (OBS/ATEM)', 'Master Showreel Editing'],
        resources: [
          { title: 'Full Time Filmmaker Free Open Guides', provider: 'Parker Walbeck Guides', url: 'https://fulltimefilmmaker.com/', free: true }
        ],
        projectIdea: 'Produce a 60-second high-production commercial advertisement for a local startup or digital brand.',
        keyDeliverables: ['60-second professional showreel', 'Client commercial video with testimonial']
      }
    ],
    courses: [
      { id: 'davinci-official', title: 'DaVinci Resolve Official Training Guide', provider: 'Blackmagic Design', duration: 'Self-paced', level: 'Beginner', isFree: true, link: 'https://www.blackmagicdesign.com/products/davinciresolve/training', description: 'Free video lessons and project files from Hollywood’s color grading standard.' },
      { id: 'fcc-video-editing', title: 'Video Editing for Beginners', provider: 'freeCodeCamp', duration: '4 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Foundations of cuts, audio levels, b-roll placement, and visual pacing.' },
      { id: 'colin-samir-creator', title: 'The Creator Economy Breakdown', provider: 'The Colin and Samir Show', duration: 'Ongoing', level: 'Beginner', isFree: true, link: 'https://www.colinandsamir.com/', description: 'In-depth interviews with MrBeast, MKBHD, and top digital creators on media business.' },
      { id: 'piximperfect-photo', title: 'Photoshop for Beginners Masterclass', provider: 'PiXimperfect', duration: '3 hours', level: 'Beginner', isFree: true, link: 'https://www.youtube.com/c/PiXimperfect', description: 'Master selections, layers, blending modes, and thumbnail manipulation.' }
    ],
    technologies: [
      { id: 'davinci', name: 'DaVinci Resolve Studio', category: 'Video Editing & Color', popularity: 96, learningCurve: 'Medium', whyImportant: 'Industry-leading free and studio NLE software with unmatched color grading and Fairlight audio.' },
      { id: 'premiere', name: 'Adobe Premiere Pro & After Effects', category: 'Motion & Editing', popularity: 95, learningCurve: 'Medium', whyImportant: 'Standard creative suite used across commercial post-production studios and agencies.' },
      { id: 'photoshop-creator', name: 'Adobe Photoshop / Figma', category: 'Thumbnail Design', popularity: 94, learningCurve: 'Low', whyImportant: 'Essential for crafting click-worthy YouTube thumbnails and promotional posters.' },
      { id: 'obs', name: 'OBS Studio & Shure Audio', category: 'Broadcasting & Audio', popularity: 90, learningCurve: 'Low', whyImportant: 'Open-source standard for high-fidelity live streaming, podcasting, and screen capture.' }
    ],
    books: [
      { id: 'save-the-cat', title: 'Save the Cat! The Last Book on Screenwriting You’ll Ever Need', author: 'Blake Snyder', year: '2005', description: 'The legendary beat sheet breakdown for storytelling that resonates universally.', keyTakeaway: 'Great stories have predictable emotional rhythms that satisfy the human brain.' },
      { id: 'show-your-work', title: 'Show Your Work! 10 Ways to Share Your Creativity', author: 'Austin Kleon', year: '2014', description: 'How to build an audience by generously sharing your daily process and unfinished ideas.', keyTakeaway: 'Be an amateur; share what you love, and the people who love the same thing will find you.' },
      { id: 'steal-like-an-artist', title: 'Steal Like an Artist', author: 'Austin Kleon', year: '2012', description: 'Creative inspiration is about remixing, curating, and transforming your influences.', keyTakeaway: 'Nothing is original; embrace influence, collect good ideas, and make them your own.' }
    ],
    movies: [
      { id: 'whiplash', title: 'Whiplash', type: 'Movie', year: '2014', description: 'An ambitious jazz drummer is pushed to his absolute limits by a ruthless music instructor.', relevance: 'Visceral masterclass in editing rhythm, tempo, tension, and artistic dedication.' },
      { id: 'bo-burnham-inside', title: 'Bo Burnham: Inside', type: 'Movie', year: '2021', description: 'A musical comedy special shot, edited, illuminated, and performed entirely alone during lockdown.', relevance: 'A triumph of solo content creation, DIY lighting design, and raw human vulnerability.' },
      { id: 'the-truman-show', title: 'The Truman Show', type: 'Movie', year: '1998', description: 'An insurance salesman discovers his entire life is a 24/7 global reality television broadcast.', relevance: 'Prophetic critique of round-the-clock media consumption and manufactured reality.' }
    ]
  },
  {
    id: 'educator-instructional-designer',
    slug: 'educator-instructional-designer',
    title: 'STEM Educator & Instructional Designer',
    category: 'Education & Learning Tech',
    field: 'Domain Specialist',
    summary: 'Design transformative curricula, interactive learning simulations, gamified e-learning modules, and pedagogy.',
    description: 'STEM Educators and Instructional Designers architect the future of how humans learn. Working in EdTech platforms, universities, and corporate academies, you will formulate cognitive scaffolding, design interactive assessments, and deploy gamified learning paths.',
    salaryRangeINR: {
      entry: '₹4,00,000 - ₹6,50,000',
      mid: '₹7,50,000 - ₹14,00,000',
      senior: '₹16,00,000 - ₹30,00,000',
      averageDisplay: '₹10,00,000 / yr'
    },
    jobRoles: ['Instructional Designer', 'Curriculum Architect', 'EdTech Learning Lead', 'STEM Teacher', 'Corporate Trainer'],
    tags: ['Teaching', 'Communication', 'Science', 'Creative Arts', 'Leadership'],
    requiredSkills: [
      { name: 'Communication', weight: 0.32, minLevel: 7 },
      { name: 'Leadership', weight: 0.22, minLevel: 6 },
      { name: 'Creativity', weight: 0.20, minLevel: 6 },
      { name: 'Problem Solving', weight: 0.16, minLevel: 5 },
      { name: 'Design', weight: 0.10, minLevel: 4 }
    ],
    difficulty: 'Beginner',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill', 'Explore options'],
    workStyleFit: ['Hybrid', 'Remote', 'Office'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Cognitive Science & Instructional Models',
        duration: '0 - 2 Months',
        subtitle: 'ADDIE Model, Bloom’s Taxonomy & Cognitive Load',
        description: 'Understand how the human brain acquires and retains information: Sweller’s cognitive load theory and Bloom’s taxonomy.',
        skillsToLearn: ['Bloom’s Revised Taxonomy of Objectives', 'ADDIE / SAM Instructional Design Models', 'Cognitive Load Theory (Intrinsic, Extraneous, Germane)', 'Needs Assessment & Learner Personas', 'Scaffolding & Spaced Repetition'],
        resources: [
          { title: 'Instructional Design Foundations and Applications', provider: 'University of Illinois / Coursera', url: 'https://www.coursera.org/learn/instructional-design-foundations', free: true },
          { title: 'The Learning Scientists Podcasts & Guides', provider: 'The Learning Scientists', url: 'https://www.learningscientists.org/', free: true }
        ],
        projectIdea: 'Design a comprehensive 4-week STEM learning curriculum matrix mapping Bloom’s cognitive verbs to interactive assessments.',
        keyDeliverables: ['Curriculum blueprint document', 'Learner persona empathy map']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: E-Learning Authoring (Articulate Storyline & Canvas)',
        duration: '2 - 5 Months',
        subtitle: 'SCORM, Interactive Quizzing & Branching Scenarios',
        description: 'Create interactive e-learning modules with branching scenarios, drag-and-drop formative quizzes, and LMS tracking.',
        skillsToLearn: ['Articulate Storyline 360 / Rise Basics', 'SCORM & xAPI (Tin Can) Standards', 'Learning Management Systems (Canvas, Moodle)', 'Branching Scenario Logic', 'Gamified Badging Mechanics'],
        resources: [
          { title: 'E-Learning Heroes Community Guides', provider: 'Articulate', url: 'https://community.articulate.com/', free: true },
          { title: 'Canvas LMS Free Teacher Accounts', provider: 'Instructure Canvas', url: 'https://www.instructure.com/canvas', free: true }
        ],
        projectIdea: 'Build an interactive SCORM package teaching the Doppler Effect with sound simulations and interactive knowledge checks.',
        keyDeliverables: ['Interactive SCORM 1.2 zip export', 'Canvas course sandbox module']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Multimedia & Video Lesson Production',
        duration: '5 - 8 Months',
        subtitle: 'Screencasting, Visual Clarity & Micro-Learning',
        description: 'Author engaging 5-minute bite-sized video lessons using screen recordings, crystal-clear voiceovers, and animated slide overlays.',
        skillsToLearn: ['Mayer’s 12 Principles of Multimedia Learning', 'Camtasia / OBS Screencast Editing', 'Micro-Learning Video Scripting', 'Visual Slide Deck Design (Dual-Coding Theory)', 'Accessibility (Captions & Audio Descriptions)'],
        resources: [
          { title: 'Sal Khan on the Art of Teaching Online', provider: 'Khan Academy', url: 'https://www.khanacademy.org/', free: true },
          { title: 'Mayer’s Multimedia Principles Guide', provider: 'Harvard University Derek Bok Center', url: 'https://bokcenter.harvard.edu/', free: true }
        ],
        projectIdea: 'Produce a 3-part micro-learning video series demystifying Photosynthesis using dual-coding visual illustrations.',
        keyDeliverables: ['3 polished instructional video lessons with subtitles', 'Accompanying student worksheet PDF']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Learning Analytics & Adaptive Feedback',
        duration: '8 - 10 Months',
        subtitle: 'Formative vs Summative Assessment & Rubrics',
        description: 'Measure learning outcomes with psychometric precision: author balanced question items, track rubric scores, and iterate lessons.',
        skillsToLearn: ['Rubric Design for Complex Problem Solving', 'Item Difficulty & Discrimination Index', 'LMS Data Analytics & Gradebook Audits', 'Adaptive Learning Pathways', 'Continuous Course Feedback Loops'],
        resources: [
          { title: 'Assessment in Higher Education Guides', provider: 'Vanderbilt Center for Teaching', url: 'https://cft.vanderbilt.edu/', free: true }
        ],
        projectIdea: 'Design a rubric and automated diagnostic pre-test that branches students to remedial support or advanced challenges.',
        keyDeliverables: ['Complete diagnostic assessment instrument', 'Scoring rubric with calibrated anchor examples']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Instructional Portfolio & EdTech Case Studies',
        duration: '10 - 12 Months',
        subtitle: 'Portfolio Showcases, Pitching & Teaching Demonstrations',
        description: 'Package your courses, interactive simulations, and curricula into an elegant web portfolio for EdTech or corporate training roles.',
        skillsToLearn: ['Instructional Design Portfolio Storytelling', 'Live Teaching / Training Demonstration Skills', 'Corporate Training ROI (Kirkpatrick Model)', 'Interview Case Studies for EdTech'],
        resources: [
          { title: 'Devlin Peck Instructional Design Guides', provider: 'Devlin Peck YouTube', url: 'https://www.youtube.com/c/DevlinPeck', free: true }
        ],
        projectIdea: 'Comprehensive flagship learning program redesign addressing high student dropout rates in an introductory coding course.',
        keyDeliverables: ['Published interactive portfolio website', 'Kirkpatrick evaluation framework writeup']
      }
    ],
    courses: [
      { id: 'illinois-instructional', title: 'Instructional Design Foundations', provider: 'University of Illinois', duration: '4 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/learn/instructional-design-foundations', description: 'Core learning theories, learner analysis, and educational objectives.' },
      { id: 'fcc-teaching', title: 'How to Teach Tech Online', provider: 'freeCodeCamp', duration: '3 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Tips from Quincy Larson on creating free coding courses with zero fluff.' },
      { id: 'open-learn-education', title: 'Understanding Educational Research', provider: 'The Open University (OpenLearn)', duration: '15 hours', level: 'Beginner', isFree: true, link: 'https://www.open.edu/openlearn/', description: 'Foundations of educational inquiry, qualitative surveys, and classroom observations.' },
      { id: 'harvard-pedagogy', title: 'Higher Education Pedagogy Resources', provider: 'Harvard Bok Center', duration: 'Self-paced', level: 'Intermediate', isFree: true, link: 'https://bokcenter.harvard.edu/', description: 'Evidence-based teaching techniques and active classroom engagement.' }
    ],
    technologies: [
      { id: 'canvas-lms', name: 'Canvas LMS & Moodle', category: 'Learning Management', popularity: 96, learningCurve: 'Medium', whyImportant: 'Dominant global learning platform used across universities and schools worldwide.' },
      { id: 'articulate', name: 'Articulate 360 / Storyline', category: 'Authoring Software', popularity: 94, learningCurve: 'Medium', whyImportant: 'Industry standard for publishing interactive SCORM-compliant corporate e-learning.' },
      { id: 'kahoot', name: 'Kahoot & Mentimeter', category: 'Gamification', popularity: 91, learningCurve: 'Low', whyImportant: 'Engages learners with real-time interactive quizzes and active audience participation.' },
      { id: 'notion-edu', name: 'Notion & Miro', category: 'Curriculum Planning', popularity: 93, learningCurve: 'Low', whyImportant: 'Visual mind mapping and curriculum planning workspace for educational designers.' }
    ],
    books: [
      { id: 'make-it-stick', title: 'Make It Stick: The Science of Successful Learning', author: 'Peter C. Brown, Henry L. Roediger III, Mark A. McDaniel', year: '2014', description: 'Cognitive science principles of retrieval practice, interleaving, and desirable difficulties.', keyTakeaway: 'Learning that feels easy is often superficial; effortful retrieval builds durable neural pathways.' },
      { id: 'design-for-how-people-learn', title: 'Design for How People Learn', author: 'Julie Dirksen', year: '2015', description: 'Actionable visual guide to crafting sticky learning experiences that bridge knowledge gaps.', keyTakeaway: 'Determine whether the gap is knowledge, skill, motivation, or environment before building training.' },
      { id: 'pedagogy-of-the-oppressed', title: 'Pedagogy of the Oppressed', author: 'Paulo Freire', year: '1968', description: 'The fundamental treatise rejecting the "banking model" of education in favor of critical dialogue.', keyTakeaway: 'Education is an act of love and freedom; teachers must learn from students as co-investigators.' }
    ],
    movies: [
      { id: 'dead-poets-society', title: 'Dead Poets Society', type: 'Movie', year: '1989', description: 'An English teacher inspires his students through poetry, free thought, and authentic passion.', relevance: 'Inspiring testament to how a transformative educator awakens intellectual agency.' },
      { id: 'stand-and-deliver', title: 'Stand and Deliver', type: 'Movie', year: '1988', description: 'Jaime Escalante motivates his underprivileged East LA students to master advanced AP Calculus.', relevance: 'True story proving high pedagogical expectations and relentless belief unlock genius.' },
      { id: 'taare-zameen-par', title: 'Taare Zameen Par (Like Stars on Earth)', type: 'Movie', year: '2007', description: 'An observant art teacher discovers a dyslexic boy’s hidden artistic talent and transforms his life.', relevance: 'Heartwarming masterpiece showing personalized empathetic teaching over rote memorization.' }
    ]
  },
  {
    id: 'civil-transportation-engineer',
    slug: 'civil-transportation-engineer',
    title: 'Civil & Smart Transportation Infrastructure Engineer',
    category: 'Engineering & Infrastructure',
    field: 'Technical',
    summary: 'Plan sustainable transit corridors, structural bridges, urban mobility networks, and smart city infrastructure.',
    description: 'Civil and Transportation Engineers shape the physical world. Leveraging AutoCAD, GIS mapping, and traffic simulation models, you will design highway interchanges, high-speed rail corridors, flood-resilient stormwater systems, and smart sensor-enabled traffic grids.',
    salaryRangeINR: {
      entry: '₹4,50,000 - ₹7,50,000',
      mid: '₹8,50,000 - ₹15,00,000',
      senior: '₹17,00,000 - ₹32,00,000',
      averageDisplay: '₹11,50,000 / yr'
    },
    jobRoles: ['Transportation Planner', 'Civil Structural Engineer', 'Urban Infrastructure Analyst', 'BIM Coordinator', 'Traffic Flow Modeler'],
    tags: ['Engineering', 'Science', 'Problem Solving', 'Math', 'Technology'],
    requiredSkills: [
      { name: 'Problem Solving', weight: 0.28, minLevel: 7 },
      { name: 'Math', weight: 0.25, minLevel: 6 },
      { name: 'Leadership', weight: 0.18, minLevel: 5 },
      { name: 'Communication', weight: 0.15, minLevel: 5 },
      { name: 'Design', weight: 0.14, minLevel: 5 }
    ],
    difficulty: 'Intermediate',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill'],
    workStyleFit: ['Office', 'Hybrid'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Engineering Mechanics & Civil CAD',
        duration: '0 - 3 Months',
        subtitle: 'Statics, AutoCAD 2D/3D & Construction Standards',
        description: 'Build foundational spatial drafting capabilities: structural statics, moment distribution, and standard AutoCAD drafting.',
        skillsToLearn: ['Engineering Mechanics (Statics & Dynamics)', 'AutoCAD 2D Drafting & Tolerances', 'Civil Surveying Principles (Total Station/GPS)', 'Indian Roads Congress (IRC) Codes & Standards', 'Structural Material Properties (Concrete & Steel)'],
        resources: [
          { title: 'NPTEL Civil Engineering Lectures', provider: 'IIT Madras / NPTEL', url: 'https://nptel.ac.in/', free: true },
          { title: 'AutoCAD Free Student Learning', provider: 'Autodesk Design Academy', url: 'https://www.autodesk.com/education', free: true }
        ],
        projectIdea: 'Produce complete 2D construction drawings for an urban pedestrian underpass with cross-section drainage details.',
        keyDeliverables: ['AutoCAD DWG and PDF construction sheet', 'Structural calculation notes']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: GIS Spatial Analysis & Urban Mobility',
        duration: '3 - 6 Months',
        subtitle: 'QGIS, Remote Sensing & Demographic Catchment',
        description: 'Map urban networks with geographic information systems (GIS): identify transit deserts, overlay flood plains, and plan bus lanes.',
        skillsToLearn: ['QGIS Open-Source Spatial Analysis', 'Vector and Raster Geoprocessing', 'Transit Desert & Accessibility Indexing', 'OpenStreetMap Geospatial Data Querying', 'Environmental Impact Assessment (EIA)'],
        resources: [
          { title: 'QGIS Complete Tutorials', provider: 'QGIS.org & Ujaval Gandhi', url: 'https://www.qgistutorials.com/', free: true },
          { title: 'GIS Specialization Free Audit', provider: 'UC Davis / Coursera', url: 'https://www.coursera.org/specializations/gis', free: true }
        ],
        projectIdea: 'Interactive GIS accessibility heatmap analyzing metro station catchment zones and public bus connectivity in a major city.',
        keyDeliverables: ['Multi-layer QGIS spatial map package', 'Public transit equity report']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Traffic Flow Simulation & Signal Timing',
        duration: '6 - 9 Months',
        subtitle: 'VISSIM / SUMO Micro-Simulation & Highway Design',
        description: 'Model vehicle queues, calculate Level of Service (LOS), and optimize synchronized green lights using open-source simulation tools (SUMO).',
        skillsToLearn: ['Microscopic Traffic Simulation (Eclipse SUMO)', 'Signal Timing Calculations (Webster’s Formula)', 'Level of Service (LOS) Highway Capacity Manual', 'Roundabout vs Signalized Intersection Optimization', 'Pedestrian & Micro-mobility Integration'],
        resources: [
          { title: 'Eclipse SUMO Traffic Simulation Docs & Tutorials', provider: 'German Aerospace Center (DLR)', url: 'https://eclipse.dev/sumo/', free: true },
          { title: 'NPTEL Transportation Engineering Series', provider: 'IIT Kharagpur / NPTEL', url: 'https://nptel.ac.in/', free: true }
        ],
        projectIdea: 'Simulate a congested 4-way arterial intersection in SUMO and optimize green-split signal timings to reduce average vehicle delay by 25%.',
        keyDeliverables: ['SUMO simulation network files and video capture', 'Delay reduction analysis charts']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: BIM (Building Information Modeling) & Smart Cities',
        duration: '9 - 11 Months',
        subtitle: 'Revit / Civil 3D, IoT Sensors & Sustainable Materials',
        description: 'Step into 3D parametric infrastructure modeling: coordinate multi-disciplinary utility clash detection in Revit and explore smart IoT sensors.',
        skillsToLearn: ['Autodesk Civil 3D & Revit Infrastructure', 'Clash Detection & 4D Construction Scheduling', 'Smart City IoT Mobility Sensors', 'Pavement Life-Cycle Cost Analysis (LCCA)', 'Green Infrastructure (Permeable Pavements)'],
        resources: [
          { title: 'Civil 3D Essentials', provider: 'Autodesk Education', url: 'https://www.autodesk.com/', free: true },
          { title: 'Smart Cities – Management of Smart Urban Infrastructures', provider: 'EPFL / Coursera', url: 'https://www.coursera.org/learn/smart-urban-infrastructures', free: true }
        ],
        projectIdea: 'Civil 3D road alignment model featuring cut-and-fill earthwork calculations and solar-powered smart streetlighting placement.',
        keyDeliverables: ['3D Civil corridor model and mass haul diagram', 'Cost and quantity takeoff report']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Infrastructure Project Management & Portfolio',
        duration: '11 - 12 Months',
        subtitle: 'Tender Bidding, Primavera/MS Project & Public Works',
        description: 'Master public works contracts, prepare engineering bills of quantities (BOQ), and present major infrastructure proposals.',
        skillsToLearn: ['Tender Document Preparation & BOQ', 'Project Scheduling (Critical Path Method)', 'Contract Management & EPC Models', 'Chartered / Professional Engineer Exam Pathways'],
        resources: [
          { title: 'Construction Project Management', provider: 'Columbia University / Coursera', url: 'https://www.coursera.org/learn/construction-project-management', free: true }
        ],
        projectIdea: 'Comprehensive Project Feasibility Report for a 12-kilometer Bus Rapid Transit (BRT) corridor in a tier-2 city.',
        keyDeliverables: ['Full feasibility study including capital expenditure, ridership projections, and environmental safeguards', 'Engineering design portfolio']
      }
    ],
    courses: [
      { id: 'nptel-transport', title: 'Introduction to Transportation Engineering', provider: 'IIT Roorkee / NPTEL', duration: '12 weeks', level: 'Beginner', isFree: true, link: 'https://nptel.ac.in/', description: 'Highway geometric design, pavement engineering, and traffic flow mechanics.' },
      { id: 'qgis-full', title: 'QGIS for GIS and Remote Sensing', provider: 'freeCodeCamp', duration: '3 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Master coordinate systems, digitizing maps, and spatial analytics.' },
      { id: 'mit-urban-trans', title: 'Transportation Systems Analysis', provider: 'MIT OpenCourseWare', duration: '10 weeks', level: 'Intermediate', isFree: true, link: 'https://ocw.mit.edu/', description: 'Demand modeling, network equilibria, and transit operations research.' },
      { id: 'edx-smart-mobility', title: 'Smart Mobility for Sustainable Cities', provider: 'TU Delft / edX', duration: '6 weeks', level: 'Intermediate', isFree: true, link: 'https://www.edx.org/', description: 'Electric vehicles, shared mobility, and autonomous transit integrations.' }
    ],
    technologies: [
      { id: 'autocad-civil', name: 'AutoCAD & Civil 3D', category: 'CAD & Road Design', popularity: 97, learningCurve: 'Medium', whyImportant: 'Industry standard for civil blueprints, terrain leveling, and highway geometric design.' },
      { id: 'qgis', name: 'QGIS Spatial Platform', category: 'Geographic Information Systems', popularity: 93, learningCurve: 'Low', whyImportant: 'Free, powerful GIS platform used globally for spatial network routing and urban planning.' },
      { id: 'sumo-sim', name: 'Eclipse SUMO', category: 'Traffic Simulation', popularity: 89, learningCurve: 'Medium', whyImportant: 'Open-source microscopic traffic simulator capable of simulating city-wide vehicle networks.' },
      { id: 'revit-bim', name: 'Autodesk Revit (BIM)', category: '3D Infrastructure Modeling', popularity: 91, learningCurve: 'Medium', whyImportant: 'Enables multidisciplinary coordination, clash detection, and construction budgeting.' }
    ],
    books: [
      { id: 'the-death-and-life-of-great-american-cities', title: 'The Death and Life of Great American Cities', author: 'Jane Jacobs', year: '1961', description: 'The revolutionary critique of modernist urban planning in favor of human-scale streets.', keyTakeaway: 'Sidewalks with "eyes on the street" make neighborhoods safe, vibrant, and walkable.' },
      { id: 'traffic-why-we-drive', title: 'Traffic: Why We Drive the Way We Do', author: 'Tom Vanderbilt', year: '2008', description: 'Fascinating dive into the psychology of traffic jams, lane changing, and human road behavior.', keyTakeaway: 'Adding more road capacity often induces more traffic demand; bottleneck psychology matters.' },
      { id: 'principles-highway-eng', title: 'Principles of Highway Engineering and Traffic Analysis', author: 'Fred L. Mannering & Scott S. Washburn', year: '2020', description: 'The comprehensive engineering standard on highway capacity, signal timing, and pavement mechanics.', keyTakeaway: 'Rigorous mathematical mechanics determine human safety and transport throughput.' }
    ],
    movies: [
      { id: 'megastructures', title: 'Megastructures & Extreme Engineering', type: 'Series', year: '2004-2011', description: 'Documentary chronicles of building the world’s longest suspension bridges, tunnels, and skyscrapers.', relevance: 'Inspires deep awe for structural civil engineering and mega-project logistics.' },
      { id: 'bridge-on-river-kwai', title: 'The Bridge on the River Kwai', type: 'Movie', year: '1957', description: 'A British colonel oversees the construction of a railway bridge under extreme wartime conditions.', relevance: 'Explores engineering pride, structural excellence, and moral dilemmas in construction.' },
      { id: 'urbanized', title: 'Urbanized', type: 'Documentary', year: '2011', description: 'Gary Hustwit examines the design of cities, public transit networks, and architectural democracy.', relevance: 'Features world-renowned urban planners transforming cities like Bogota, Copenhagen, and Mumbai.' }
    ]
  },
  {
    id: 'business-analyst',
    slug: 'business-analyst',
    title: 'Business Analyst & Strategy Consultant',
    category: 'Business & Management',
    field: 'Business & Management',
    summary: 'Bridge business requirements with engineering execution, streamline processes, and recommend data-backed strategy.',
    description: 'Business Analysts decipher organizational workflows to eliminate operational waste. You will facilitate requirement gathering workshops, diagram BPMN business processes, define functional specifications, and perform financial cost-benefit calculations for digital transformations.',
    salaryRangeINR: {
      entry: '₹5,00,000 - ₹8,00,000',
      mid: '₹9,00,000 - ₹16,00,000',
      senior: '₹18,00,000 - ₹34,00,000',
      averageDisplay: '₹12,50,000 / yr'
    },
    jobRoles: ['Business Analyst', 'Systems Analyst', 'Management Consultant', 'Process Improvement Lead', 'Strategy Associate'],
    tags: ['Business', 'Communication', 'Problem Solving', 'Data', 'Leadership'],
    requiredSkills: [
      { name: 'Problem Solving', weight: 0.28, minLevel: 7 },
      { name: 'Communication', weight: 0.26, minLevel: 7 },
      { name: 'Leadership', weight: 0.18, minLevel: 6 },
      { name: 'SQL', weight: 0.16, minLevel: 5 },
      { name: 'Math', weight: 0.12, minLevel: 4 }
    ],
    difficulty: 'Beginner',
    recommendedForGoals: ['Get a job', 'Switch career', 'Learn a skill', 'Explore options'],
    workStyleFit: ['Hybrid', 'Office', 'Remote'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Stage 1: Business Process Modeling & Requirements',
        duration: '0 - 2 Months',
        subtitle: 'BPMN 2.0, Flowcharts, BRDs & Gap Analysis',
        description: 'Map "As-Is" versus "To-Be" operational workflows using standard BPMN swimlane diagrams and draft Business Requirements Documents (BRD).',
        skillsToLearn: ['BPMN 2.0 Diagramming & Swimlanes', 'Business Requirements Document (BRD) Writing', 'GAP Analysis & SWOT Frameworks', 'Stakeholder Interviewing Techniques', 'Use Case Specification & User Stories'],
        resources: [
          { title: 'Business Analysis Foundations', provider: 'IIBA (International Institute of Business Analysis)', url: 'https://www.iiba.org/', free: true },
          { title: 'Lucidchart BPMN Tutorial Series', provider: 'YouTube (Lucidchart)', url: 'https://www.youtube.com/user/lucidchart', free: true }
        ],
        projectIdea: 'Map the complete As-Is and To-Be procurement workflow for an enterprise, reducing approval steps from 12 to 4.',
        keyDeliverables: ['BPMN 2.0 process flow diagram in Lucidchart/Miro', 'Formal 10-page BRD specification document']
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Enterprise Data & Business Intelligence',
        duration: '2 - 5 Months',
        subtitle: 'SQL for Business Questions & Excel Financial Modeling',
        description: 'Extract business answers from data: write SQL queries to quantify revenue leakages and model payback periods.',
        skillsToLearn: ['SQL Querying for Business Intelligence', 'Cost-Benefit Analysis (ROI / Net Present Value)', 'Excel Pivot Modeling & Sensitivity Analysis', 'Power BI / Tableau Dashboards', 'Data Cleansing & Validation'],
        resources: [
          { title: 'SQL for Non-Programmers', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', free: true },
          { title: 'Corporate Finance Institute BA Guides', provider: 'CFI', url: 'https://corporatefinanceinstitute.com/', free: true }
        ],
        projectIdea: 'Build a financial cost-benefit model demonstrating $350k annual savings through robotic process automation (RPA).',
        keyDeliverables: ['Linked financial ROI spreadsheet model', 'Power BI executive summary dashboard']
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Agile Scrum & Systems Analysis',
        duration: '5 - 8 Months',
        subtitle: 'Jira User Stories, Acceptance Criteria & Technical Feasibility',
        description: 'Translate fuzzy executive desires into precise engineering user stories with Gherkin "Given-When-Then" acceptance criteria.',
        skillsToLearn: ['Gherkin Syntax & Acceptance Criteria', 'User Story Slicing & Backlog Grooming', 'API Basics & Data Mapping Matrices', 'UML Activity & Sequence Diagrams', 'Jira / Confluence Project Administration'],
        resources: [
          { title: 'Agile Business Analysis Essentials', provider: 'Scrum Alliance', url: 'https://www.scrumalliance.org/', free: true }
        ],
        projectIdea: 'Author 20 engineering user stories with Gherkin criteria and an API data mapping table for a loyalty points engine.',
        keyDeliverables: ['Jira-ready story backlog export', 'API data dictionary mapping table']
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Change Management & Solution Evaluation',
        duration: '8 - 10 Months',
        subtitle: 'Prosci ADKAR Model, User Acceptance Testing (UAT)',
        description: 'Ensure software actually gets adopted by employees: lead User Acceptance Testing (UAT) and author change management playbooks.',
        skillsToLearn: ['User Acceptance Testing (UAT) Test Cases', 'Defect Triage & Severity Categorization', 'Prosci ADKAR Change Management Model', 'Training Material Development & Runbooks', 'Post-Implementation Review (PIR)'],
        resources: [
          { title: 'Prosci Change Management Free Guides', provider: 'Prosci', url: 'https://www.prosci.com/', free: true }
        ],
        projectIdea: 'Author a complete UAT test execution script with 30 test scenarios and an ADKAR change management rollout plan.',
        keyDeliverables: ['UAT test matrix with pass/fail logs', 'Change management rollout playbook']
      },
      {
        stageNumber: 5,
        title: 'Stage 5: Consulting Case Interviews & ECBA Certification',
        duration: '10 - 12 Months',
        subtitle: 'Frameworks, Issue Trees, Client Presentations & ECBA',
        description: 'Tackle consulting case interviews using MECE issue trees, structure problem-solving decks, and prepare for IIBA ECBA certification.',
        skillsToLearn: ['MECE (Mutually Exclusive, Collectively Exhaustive) Principle', 'Hypothesis-Driven Problem Solving', 'Executive Slide Deck Storytelling (Pyramid Principle)', 'IIBA ECBA / CCBA Exam Preparation'],
        resources: [
          { title: 'Case in Point & Case Interview Prep', provider: 'Victor Cheng / CaseInterview.com', url: 'https://www.caseinterview.com/', free: true },
          { title: 'Strategy Simplified Podcast', provider: 'Management Consulted', url: 'https://managementconsulted.com/', free: true }
        ],
        projectIdea: 'Comprehensive Management Consulting Deck resolving profit decline for a retail chain using MECE issue trees.',
        keyDeliverables: ['25-slide executive presentation following the Pyramid Principle', 'ECBA exam prep completion certification']
      }
    ],
    courses: [
      { id: 'iiba-ecba', title: 'Entry Certificate in Business Analysis (ECBA) Prep', provider: 'IIBA Community', duration: '6 weeks', level: 'Beginner', isFree: true, link: 'https://www.iiba.org/business-analysis-certifications/ecba/', description: 'Foundations of the BABOK (Business Analysis Body of Knowledge) Guide.' },
      { id: 'fcc-business-analysis', title: 'Business Analysis Full Course', provider: 'freeCodeCamp', duration: '8 hours', level: 'Beginner', isFree: true, link: 'https://www.freecodecamp.org/', description: 'Complete practical walkthrough from requirements elicitation to software launch.' },
      { id: 'wharton-operations', title: 'Introduction to Operations Management', provider: 'Wharton / Coursera', duration: '4 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/learn/wharton-operations', description: 'Bottleneck analysis, process capacity, queueing theory, and Lean Six Sigma.' },
      { id: 'consulting-prep', title: 'Management Consulting Fundamentals', provider: 'Coursera / Emory', duration: '4 weeks', level: 'Beginner', isFree: true, link: 'https://www.coursera.org/', description: 'Structured problem solving, hypothesis generation, and client management.' }
    ],
    technologies: [
      { id: 'lucidchart', name: 'Lucidchart & Miro', category: 'Process Modeling', popularity: 97, learningCurve: 'Low', whyImportant: 'Industry standard for drafting BPMN process workflows and architecture diagrams.' },
      { id: 'jira-ba', name: 'Jira & Confluence', category: 'Requirements Management', popularity: 96, learningCurve: 'Low', whyImportant: 'Enables documenting user stories, BRDs, and tracking development delivery.' },
      { id: 'excel-ba', name: 'Advanced Excel & Power BI', category: 'Data Analysis', popularity: 98, learningCurve: 'Low', whyImportant: 'Indispensable for financial cost-benefit modeling and operational reporting.' },
      { id: 'sql-ba', name: 'SQL Workbench', category: 'Database Querying', popularity: 92, learningCurve: 'Medium', whyImportant: 'Allows direct verification of system database records without relying on engineers.' }
    ],
    books: [
      { id: 'babok-guide', title: 'A Guide to the Business Analysis Body of Knowledge (BABOK)', author: 'IIBA', year: '2015 (v3)', description: 'The global standard framework containing the 6 core business analysis knowledge areas.', keyTakeaway: 'Mastering elicitation, collaboration, and solution assessment creates organizational agility.' },
      { id: 'pyramid-principle', title: 'The Pyramid Principle: Logic in Writing and Thinking', author: 'Barbara Minto', year: '1987', description: 'McKinsey’s timeless guide on structuring executive thoughts from the conclusion downwards.', keyTakeaway: 'State the answer first, then group and summarize your supporting arguments hierarchically.' },
      { id: 'lean-six-sigma', title: 'The Lean Six Sigma Pocket Toolbook', author: 'Michael L. George et al.', year: '2005', description: 'Quick reference guide to 100 tools for improving process quality and speed.', keyTakeaway: 'Identify and remove non-value-added waste (Muda) to streamline velocity.' }
    ],
    movies: [
      { id: 'up-in-the-air', title: 'Up in the Air', type: 'Movie', year: '2009', description: 'A corporate downsizer faces digital transformation when an ambitious young analyst proposes remote firing.', relevance: 'Nuanced depiction of business efficiency versus human organizational change resistance.' },
      { id: 'office-space', title: 'Office Space', type: 'Movie', year: '1999', description: 'Two consultants ("The Bobs") interview office employees to eliminate redundant middle management.', relevance: 'The most famous satire highlighting inefficient corporate bureaucracy and paper trails.' },
      { id: 'enron-smartest-guys', title: 'Enron: The Smartest Guys in the Room', type: 'Documentary', year: '2005', description: 'The inside story of the collapse of the 7th largest company in America through corporate greed.', relevance: 'Demonstrates why governance, audit trails, and ethical business analysis are crucial.' }
    ]
  }
];
