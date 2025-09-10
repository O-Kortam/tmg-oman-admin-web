export interface ImageData {
  url?: string;
}

export interface ButtonData {
  text?: string;
  url?: string;
}

export interface HeroSlide {
  img?: ImageData;
  title?: string;
  desc?: string;
  btnText?: string;
  btnUrl?: string;
}

export type HeroData = HeroSlide[];

export interface NewsCardData {
  title?: string;
  subtitle?: string;
  desc?: string;
  date?: string;
  img?: ImageData;
   newsPage?: { documentId?: string };
}

export interface NewsSectionData {
  subtitle?: string;
  title?: string;
  desc?: string;
  primary?: NewsCardData;
  card?: NewsCardData[];
}

export interface ProjectType {
  title?: string;
  subtitle?: string;
  img?: ImageData;
}

export interface ProjectItem {
  title?: string;
  subtitle?: string;
  desc?: string;
  type?: ProjectType[];
  button?: ButtonData;
}

export type ProjectsData = ProjectItem[];

export interface LegacyCardItem {
  img?: { url?: string };
  icon?: { url?: string };
  title?: string;
}

export interface LegacySectionData {
  title?: string;
  desc?: string;
  card: LegacyCardItem[];
}

export interface CommunityCard {
  title?: string;
  subtitle?: string;
  desc?: string;
  link?: string;
  btnText?: string;
  img?: {
    url?: string;
  };
}

export interface CommunitiesSectionData {
  title?: string;
  subtitle?: string;
  desc?: string;
  card: CommunityCard[];
}

export interface AboutSectionData {
  title?: string;
  desc?: string;
  subtitle?: string;
}
