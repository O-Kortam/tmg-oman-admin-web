export type GalleryImage = {
  url?: string;
};

export type GalleryData = {
  title?: string;
  desc?: string;
  img?: GalleryImage[];
};

export type HeroData = {
  img: {
    url: string;
  };
  title?: string;
  subtitle?: string;
  desc?: string;
};

export interface AboutSectionData {
  title?: string;
  subtitle?: string;
  desc?: string;
  desc2?: string;
  desc3?: string;
  img: {
    url: string;
  };
}

export type NumbersCard = {
  title?: string;
  number?: string | number;
  icon: {
    url: string;
    alternativeText?: string;
  };
};

export type NumbersSection = {
  title?: string;
  desc?: string;
  card: NumbersCard[];
};

export interface AchievementsProps {
  title?: string;
  desc?: string;
  card: {
    id?: string | number;
    date?: string;
    title?: string;
    desc?: string;
    img: {
      url: string;
      alternativeText?: string;
    };
  }[];
}

export interface VisionProps {
  title?: string;
  desc?: string;
  vision: {
    title: string;
    desc: string;
    img: {
      url: string;
      alternativeText?: string;
    };
  }[];
}
