export interface FeaturesSection {
  title: string;
  desc: string;
  card: FeatureCard[];
}

export interface FeatureCard {
  img: {
    url: string;
  };
  title: string;
}



export interface GalleryImage {
  url: string;
  alt?: string;
}

export interface GalleryData {
  title: string;
  subtitle: string;
  desc: string;
  img: GalleryImage[];
}


export interface HeroSlide {
  title: string;
  desc: string;
  img: {
    url: string;
    alt?: string;
  };
}

export type HeroData = HeroSlide[];


export interface InfoSection {
  videoLink?: string;
  title?: string;
  descOne?: string;
  descTwo?: string;
}

export interface OverviewSection {
  subtitle: string;
  title: string;
  desc: string;
  btnText: string;
  btnText2: string;
  btnLink: string;
   pdf: {
      url: string;
    };
  img: {
    url: string;
  }[];
 
}
export interface UnitTypesSection {
  title: string;
  desc: string;
  card: {
    title: string;
    bed: number;
    bath: number;
    area: string;
    finish: string;
    type: string;
    documentId:string;
    unitPage?: { documentId?: string };
    id: string;
    img: {
      url: string;
    };
   
  }[];
}
