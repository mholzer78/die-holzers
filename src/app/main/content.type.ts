export interface Content {
  de: LanguageContent;
  en: LanguageContent;
}

export interface LanguageContent {
  is: Is;
  work: Work;
  skills: Skills;
  qanda: Qanda;
  contact: Contact;
}

export interface Is {
  headline: string;
  text: string[];
  tableRows: TableRow[];
}
export interface Work {
  headline: string;
  jobs: { company: string; tableRows: TableRow[] }[];
}
export interface Skills {
  headline: string;
  overview: {
    headline: string;
    tableRows: TableRow[];
  };
  courses: {
    headline: string;
    tableRows: TableRowSkills[];
  };
}
export interface Qanda {
  headline: string;
  list: { question: string; answer: string[]; answerType: string }[];
}
export interface Contact {
  headline: string;
  items: {
    icon: string;
    link: string;
    alt: string;
  }[];
}

interface TableRow {
  index: string;
  value: string;
}
interface TableRowSkills {
  index: string;
  date: string;
  link: string;
}
