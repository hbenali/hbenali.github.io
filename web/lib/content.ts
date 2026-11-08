export type Lang = "en" | "fr";

export type Role = { title: string; points: string[]; tags?: string[] };
export type Job = {
  company: string;
  date: string;
  place: string;
  title: string;
  roles?: Role[];
  points?: string[];
};
export type SkillGroup = { name: string; items: string[] };
export type Project = { year: string; name: string; desc: string; tech: string };

export type Content = {
  htmlLang: string;
  path: string;
  altPath: string;
  altLabel: string;
  altName: string;
  role: string;
  intro: string;
  places: string;
  nav: { id: string; label: string }[];
  log: { stage: string; tools: string; status: string }[];
  logCommand: string;
  logDone: string;
  sections: {
    experience: string;
    experienceNote: string;
    skills: string;
    projects: string;
    credentials: string;
    certifications: string;
    education: string;
    contact: string;
  };
  jobs: Job[];
  skills: SkillGroup[];
  projects: Project[];
  certs: { name: string; issuer: string; year: string }[];
  education: { dates: string; school: string; degree: string }[];
  contact: { lead: string; cv: string; email: string };
  ui: { open: string; close: string; skip: string; home: string; back: string };
  notFound: { title: string; body: string; command: string; output: string };
};

const skillsEn: SkillGroup[] = [
  { name: "Programming", items: ["Python", "JavaScript", "Java", "Bash", "Groovy", "Go", "SQL"] },
  {
    name: "Cloud and DevOps",
    items: ["Google Cloud", "Docker", "Jenkins", "GitHub Actions", "Puppet", "Ansible", "Terraform"],
  },
  {
    name: "Security and monitoring",
    items: ["CodeQL", "SonarCloud", "Grafana", "ELK Stack", "Acunetix", "Nessus", "Cosign"],
  },
  { name: "AI", items: ["Claude Code", "AI/RAG deployment"] },
];

export const content: Record<Lang, Content> = {
  en: {
    htmlLang: "en",
    path: "/",
    altPath: "/fr/",
    altLabel: "FR",
    altName: "Français",
    role: "DevOps and SecOps engineer",
    intro:
      "I build and secure the pipelines that ship software: CI/CD, release engineering, cloud infrastructure and signed artifacts. More than eight years in, at eXo Platform.",
    places: "Tunisia, France and remote",
    nav: [
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "credentials", label: "Credentials" },
      { id: "contact", label: "Contact" },
    ],
    log: [
      { stage: "build", tools: "Jenkins, Maven, Nexus staging", status: "passed" },
      { stage: "scan", tools: "CodeQL, SonarCloud, Fortify", status: "passed" },
      { stage: "sign", tools: "Cosign, Docker Content Trust", status: "passed" },
      { stage: "publish", tools: "Docker Hub, ghcr.io", status: "passed" },
    ],
    logCommand: "release --signed",
    logDone: "released and signed by hbenali",
    sections: {
      experience: "Experience",
      experienceNote: "Newest first. Open a role to read what I did in it.",
      skills: "Skills",
      projects: "Projects",
      credentials: "Credentials",
      certifications: "Certifications",
      education: "Education",
      contact: "Contact",
    },
    jobs: [
      {
        company: "eXo Platform",
        date: "Mar. 2020 – Present",
        place: "Tunis, Nantes, remote",
        title: "DevOps Engineer",
        roles: [
          {
            title: "Software Factory",
            points: [
              "Manage Jenkins with Seed jobs using DSL/Groovy, create pipelines, prepare and integrate Jenkins agents",
              "Ensure upgrades for Sonatype Nexus, Grafana, Sonarqube, SquashTM",
              "Implement CI/CD for mobile applications (Android/iOS) with Fastlane, GitHub Actions, Appaloosa Store",
              "Add code security checks using CodeQL, SonarCloud, and Fortify",
              "Build custom Docker images (Nginx + HTTP3 with QUIC)",
            ],
            tags: ["Jenkins", "Groovy", "Nexus", "GitHub Actions", "Docker"],
          },
          {
            title: "Hosting and Cloud",
            points: [
              "Create and manage instances using Google Cloud and OVH",
              "Configuration management with Puppet 7, 6, and 3.7",
              "Resolve incidents: disk saturation, memory shortage, Docker daemon issues",
              "Add third-party integrations: SAML2, OpenID, LDAP/AD",
            ],
            tags: ["Google Cloud", "OVH", "Puppet", "Vagrant"],
          },
          {
            title: "Infrastructure and SecOps",
            points: [
              "Configure bare-metal servers with LVM partitioning",
              "Configure services: Tomcat, Nginx, Apache2, Traefik with security headers",
              "SSL configuration, DNS setup (CAA, DNSSEC), secure SMTP",
              "Deploy ELK, InfluxDB, HAProxy, provision with Ansible",
              "Security scanning with CodeQL, SonarCloud, Acunetix",
            ],
            tags: ["Nginx", "Ansible", "ELK", "CodeQL"],
          },
          {
            title: "Release and deployment tooling",
            points: [
              "Release manager: GA/RC/CI-CD releases with Nexus staging and Maven plugins; signed Docker images (DCT, Cosign) published to Docker Hub and ghcr.io",
              "Main contributor (500+ commits since 2020) to ADT, the internal tool that deploys eXo/Meeds acceptance and demo environments: upgrades, restore, SAML keystore provisioning via Keycloak, AI/RAG deployment, dashboards",
              "Maintain eXo/Meeds, CI and release Docker images (JDK 8 to 25, Ubuntu 24.04/26.04, Maven 3.9/4) and shared workflow scripts",
              "Author of a GitHub Action that routes pull request notifications to the company Tasks application",
            ],
            tags: ["ADT", "Docker", "Cosign", "Nexus", "Maven"],
          },
          {
            title: "Generative AI",
            points: [
              "Daily use of AI assistants (Claude Code) to automate and speed up scripting, code review, security hardening, testing and documentation, always verifying the results",
              "Set up the AI/RAG deployment in ADT",
            ],
            tags: ["Claude Code", "RAG"],
          },
        ],
      },
      {
        company: "eXo Platform",
        date: "Dec. 2018 – Feb. 2020",
        place: "Tunis",
        title: "Support Engineer",
        points: [
          "Resolve client technical issues: Tomcat/JBoss configuration, JMX, Database connectors",
          "Create CLI tools for the support team, security checks with Acunetix, Nessus",
          "Contribute to J2EE/AngularJS support ticket management application",
        ],
      },
      {
        company: "SW Consulting",
        date: "Jan. 2018 – Dec. 2018",
        place: "Monastir",
        title: "Frontend Developer",
        points: ["Build Forum application with Angular 4, CSS, SCSS", "Project management with GitLab"],
      },
    ],
    skills: [
      ...skillsEn,
    ],
    projects: [
      { year: "2026", name: "LiveboxMonitor Android", desc: "Android port: widgets, live alerts, local/remote mode", tech: "Kotlin" },
      { year: "2025–26", name: "Web inspection tools", desc: "SSL, DKIM, SPF, DMARC, CAA, DNSSEC, BIMI, RDAP, IP", tech: "HTML/JS" },
      { year: "2026", name: "logscrub", desc: "Masks secrets and personal data in logs", tech: "Go" },
      { year: "2019", name: "Support Ticket System", desc: "Full-stack application", tech: "J2EE/VueJS" },
      { year: "2017", name: "3D Human Skeleton AR", desc: "Augmented reality visualization", tech: "Matlab" },
      { year: "2015", name: "Clustering Validation", desc: "Data mining algorithm", tech: "Java/R" },
    ],
    certs: [
      { name: "Mobile Application Developer", issuer: "IBM MobileFirst", year: "2017" },
      { name: "IPv6 Certification", issuer: "ENISo", year: "2015" },
    ],
    education: [
      { dates: "2015 – 2017", school: "National School of Engineers of Sousse (ENISo)", degree: "Master's in Telecommunications Engineering" },
      { dates: "2012 – 2015", school: "ISIMM, Monastir", degree: "Bachelor's in Computer Science" },
    ],
    contact: {
      lead: "Want a detailed CV, or have a pipeline that needs fixing? Write to me.",
      cv: "Request the detailed CV",
      email: "contact@hbenali.ovh",
    },
    ui: { open: "Show details", close: "Hide details", skip: "Skip to content", home: "Go to the homepage", back: "Go back", },
    notFound: {
      title: "This page does not exist",
      body: "The address may be mistyped, or the page has moved. Start again from the homepage.",
      command: "curl -I",
      output: "HTTP/1.1 404 Not Found",
    },
  },
  fr: {
    htmlLang: "fr",
    path: "/fr/",
    altPath: "/",
    altLabel: "EN",
    altName: "English",
    role: "Ingénieur DevOps et SecOps",
    intro:
      "Je construis et sécurise les chaînes qui livrent le logiciel : CI/CD, release engineering, infrastructure cloud et artefacts signés. Plus de huit ans de métier, chez eXo Platform.",
    places: "Tunisie, France et télétravail",
    nav: [
      { id: "experience", label: "Expérience" },
      { id: "skills", label: "Compétences" },
      { id: "projects", label: "Projets" },
      { id: "credentials", label: "Parcours" },
      { id: "contact", label: "Contact" },
    ],
    log: [
      { stage: "build", tools: "Jenkins, Maven, staging Nexus", status: "ok" },
      { stage: "scan", tools: "CodeQL, SonarCloud, Fortify", status: "ok" },
      { stage: "signature", tools: "Cosign, Docker Content Trust", status: "ok" },
      { stage: "publication", tools: "Docker Hub, ghcr.io", status: "ok" },
    ],
    logCommand: "release --signed",
    logDone: "livré et signé par hbenali",
    sections: {
      experience: "Expérience",
      experienceNote: "Du plus récent au plus ancien. Ouvrez un rôle pour lire ce que j'y ai fait.",
      skills: "Compétences",
      projects: "Projets",
      credentials: "Parcours",
      certifications: "Certifications",
      education: "Formation",
      contact: "Contact",
    },
    jobs: [
      {
        company: "eXo Platform",
        date: "Mars 2020 – Présent",
        place: "Tunis, Nantes, télétravail",
        title: "Ingénieur DevOps",
        roles: [
          {
            title: "Software Factory et CI/CD",
            points: [
              "Gestion de Jenkins avec Seed jobs en DSL/Groovy, création de pipelines",
              "CI/CD pour applications mobiles avec Fastlane, GitHub Actions",
              "Sécurité du code avec CodeQL, SonarCloud et Fortify",
            ],
          },
          {
            title: "Infrastructure et cloud",
            points: [
              "Gestion d'instances Google Cloud et OVH avec Puppet",
              "Configuration serveurs, services Nginx, Traefik, ELK",
              "Provisionnement avec Ansible, sécurité réseau",
            ],
          },
          {
            title: "Release et outillage de déploiement",
            points: [
              "Release manager : versions GA/RC/CI-CD avec staging Nexus et plugins Maven ; images Docker signées (DCT, Cosign) publiées sur Docker Hub et ghcr.io",
              "Contributeur principal (500+ commits depuis 2020) d'ADT, l'outil interne de déploiement des environnements d'acceptance et de démo eXo/Meeds : montées de version, restauration, keystores SAML via Keycloak, déploiement IA/RAG, tableaux de bord",
              "Maintenance des images Docker eXo/Meeds, CI et release (JDK 8 à 25, Ubuntu 24.04/26.04, Maven 3.9/4) et des scripts de workflows partagés",
              "Auteur d'une GitHub Action qui notifie l'application Tâches des pull requests",
            ],
            tags: ["ADT", "Docker", "Cosign", "Nexus", "Maven"],
          },
          {
            title: "Sécurité (SecOps)",
            points: [
              "TLS et en-têtes (CSP, HSTS, OCSP), DNS (CAA, DNSSEC), messagerie (SPF, DKIM, DMARC)",
              "Profils seccomp pour les services Docker, filtrage haproxy et VPN",
              "Scans réguliers CodeQL/SonarCloud et suivi des alertes de vulnérabilités",
            ],
          },
          {
            title: "IA générative",
            points: [
              "Usage quotidien d'assistants IA (Claude Code) pour automatiser et accélérer scripts, revues de code, durcissement sécurité, tests et documentation, avec vérification systématique des résultats",
              "Mise en place du déploiement IA/RAG dans ADT",
            ],
            tags: ["Claude Code", "RAG"],
          },
        ],
      },
      {
        company: "eXo Platform",
        date: "Déc. 2018 – Fév. 2020",
        place: "Tunis",
        title: "Ingénieur Support",
        points: ["Support technique clients, outils CLI, tests de sécurité"],
      },
      {
        company: "SW Consulting",
        date: "Jan. 2018 – Déc. 2018",
        place: "Monastir",
        title: "Développeur Frontend",
        points: ["Application Forum en Angular 4"],
      },
    ],
    skills: [
      { name: "Programmation", items: skillsEn[0].items },
      { name: "Cloud et DevOps", items: skillsEn[1].items },
      { name: "Sécurité et supervision", items: skillsEn[2].items },
      { name: "IA", items: ["Claude Code", "Déploiement IA/RAG"] },
    ],
    projects: [
      { year: "2026", name: "LiveboxMonitor Android", desc: "Port Android : widgets, alertes, mode local/distant", tech: "Kotlin" },
      { year: "2025–26", name: "Outils web d'inspection", desc: "SSL, DKIM, SPF, DMARC, CAA, DNSSEC, BIMI, RDAP, IP", tech: "HTML/JS" },
      { year: "2026", name: "logscrub", desc: "Masque secrets et données personnelles dans les logs", tech: "Go" },
      { year: "2019", name: "Système de tickets", desc: "Application full-stack", tech: "J2EE/VueJS" },
      { year: "2017", name: "Squelette 3D en RA", desc: "Visualisation en réalité augmentée", tech: "Matlab" },
      { year: "2015", name: "Validation de clustering", desc: "Algorithme d'exploration de données", tech: "Java/R" },
    ],
    certs: [
      { name: "Développeur Mobile", issuer: "IBM MobileFirst", year: "2017" },
      { name: "Certification IPv6", issuer: "ENISo", year: "2015" },
    ],
    education: [
      { dates: "2015 – 2017", school: "ENISo, Sousse", degree: "Master en Télécommunications" },
      { dates: "2012 – 2015", school: "ISIMM, Monastir", degree: "Licence en Informatique" },
    ],
    contact: {
      lead: "Besoin d'un CV détaillé, ou d'une chaîne de livraison à remettre d'aplomb ? Écrivez-moi.",
      cv: "Demander le CV détaillé",
      email: "contact@hbenali.ovh",
    },
    ui: { open: "Voir le détail", close: "Masquer le détail", skip: "Aller au contenu", home: "Retour à l'accueil", back: "Page précédente" },
    notFound: {
      title: "Cette page n'existe pas",
      body: "L'adresse est peut-être mal saisie, ou la page a été déplacée. Repartez de l'accueil.",
      command: "curl -I",
      output: "HTTP/1.1 404 Not Found",
    },
  },
};
