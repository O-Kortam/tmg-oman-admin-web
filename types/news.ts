

export type newsData = {
  title?: string;
  descOne?: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  videoLink?: string;
  img: {
    url: string;
  };
  img2?: {
    url?: string;
  };
  hero?: newsHeroData[];
};

export type newsHeroData = {
  img: {
    url: string;
  };
  date?: string;
  title?: string;
};
