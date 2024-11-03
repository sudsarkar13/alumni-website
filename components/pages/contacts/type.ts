export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

export interface ContactCard {
  icon: JSX.Element;
  title: string;
  content: string;
  gradient: string;
}
