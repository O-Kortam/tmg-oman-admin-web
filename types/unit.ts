

export type unitData = {

  hero?: unitHeroData[];
    info?: unitInfoData[];

};

export type unitHeroData = {
  img: {
    url: string;
  };
  project: string;
  title: string;
};

export type unitInfoData = {
  project: string;
  title: string;
  phase: string;
  area: number;
  type: string;
    bed: number; 
  bath: number;
  finishing: string;

};
  export type UnitGalleryProps = GalleryItem[];

export interface GalleryItem {
  title?: string;
  desc?: string;
  img: {
    url: string;
  };
}

  
  export type UnitfloorPlanProps = floorPlanItem[];

export interface floorPlanItem {
  title?: string;
  desc?: string;
  img: {
    url: string;
  };
}

  