export type Language = 'ja' | 'en';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    getInTouch: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    whatIDo: string;
    fullstack: string;
    mobile: string;
    design: string;
    business: string;
  };
  projects: {
    title: string;
    viewProject: string;
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  ja: {
    nav: {
      about: '私について',
      projects: 'プロジェクト',
      contact: 'お問い合わせ',
    },
    hero: {
      greeting: 'こんにちは、私は',
      title: 'Sotaro です',
      subtitle: 'コンピューターサイエンス学生 & 開発者',
      description: '革新的なアプリケーションの構築と最先端技術の探求に情熱を持っています。現在Orange Coast Collegeで学びながら、インパクトのあるソリューションを作成しています。',
      viewProjects: 'プロジェクトを見る',
      getInTouch: 'お問い合わせ',
    },
    about: {
      title: '私について',
      description1: '私はOrange Coast Collegeのコンピューターサイエンス学生で、現実の問題を解決する意味のあるアプリケーションを作成することに情熱を持っています。技術への私の旅は好奇心とコードを通じてポジティブな影響を与えたいという願望によって推進されています。',
      description2: 'ウェブアプリケーションの立ち上げからビジネスコンペティションへの参加まで、技術的専門知識とビジネスセンスを組み合わせた多様なスキルセットを開発してきました。継続的な学習と技術の可能性の限界を押し広げることを信じています。',
      whatIDo: '私の専門分野',
      fullstack: 'フルスタックWeb開発',
      mobile: 'モバイルアプリ開発',
      design: 'UI/UXデザイン',
      business: 'ビジネス戦略とイノベーション',
    },
    projects: {
      title: '注目のプロジェクト',
      viewProject: 'プロジェクトを見る',
    },
    contact: {
      title: 'お問い合わせ',
      description: '新しい機会やコラボレーションに常に興味があります。一緒に仕事をしたい、またはただ挨拶したい場合は、お気軽にお連絡ください！',
    },
    footer: {
      copyright: '© 2024 Sotaro Ichii. Next.jsとTailwind CSSで構築。',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Sotaro',
      subtitle: 'Computer Science Student & Developer',
      description: 'Passionate about building innovative applications and exploring cutting-edge technologies. Currently studying at Orange Coast College and creating impactful solutions.',
      viewProjects: 'View Projects',
      getInTouch: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      description1: 'I\'m a dedicated Computer Science student at Orange Coast College with a passion for creating meaningful applications that solve real-world problems. My journey in technology has been driven by curiosity and a desire to make a positive impact through code.',
      description2: 'From launching web applications to participating in business competitions, I\'ve developed a diverse skill set that combines technical expertise with business acumen. I believe in continuous learning and pushing the boundaries of what\'s possible with technology.',
      whatIDo: 'What I Do',
      fullstack: 'Full-stack web development',
      mobile: 'Mobile app development',
      design: 'UI/UX design',
      business: 'Business strategy & innovation',
    },
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
    },
    contact: {
      title: 'Let\'s Connect',
      description: 'I\'m always interested in new opportunities and collaborations. Feel free to reach out if you\'d like to work together or just say hello!',
    },
    footer: {
      copyright: '© 2024 Sotaro Ichii. Built with Next.js and Tailwind CSS.',
    },
  },
}; 