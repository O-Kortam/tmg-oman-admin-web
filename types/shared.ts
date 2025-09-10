export interface BannerData {
  title?: string;
  subtitle?: string;
}

export interface BannerProps {
  data?: BannerData;
  variant?: "light" | "dark";
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  reason: string;
  country: string;
  interested: string;
  message: string;
  project?: string;
}

export interface ContactDropdownsResponse {
  country: {
    country: string[];
  };
  reason: {
    reasons: string[];
  };
}
