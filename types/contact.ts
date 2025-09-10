export type FaqItem = {
  question?: string;
  answer?: string;
};

export type FaqSection = {
  title?: string;
  desc?: string;
  card: FaqItem[];
};

export type HotlineSection = {
  img: {
    url: string;
  };
  subtitle?: string;
  title?: string;
  titleOne?: string;
  descOne?: string;
  titleTwo?: string;
  descTwo?: string;
};

export type Branch = {
  id?: string | number;
  title?: string;
  desc?: string;
  slug?: string;
  direction?: string;
  icon?: {
    url?: string;
  };
};

export type BranchesSection = {
  title?: string;
  subtitle?: string;
  branchInfo?: Branch[];
};

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  country: string;
  interested: string;
  project?: string;
  message: string;
};

export type ContactDropdownsResponse = {
  country: {
    country: string[];
  };
  reason: {
    reasons: string[];
  };
};
