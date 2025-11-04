import { StaticImageData } from "next/image";
import { VARIANTS } from "./enum";

export interface BEST_SERVICE_CARD_PROPS {
  heading?: string;
  boldHeading?: string;
  iconPosition: "top" | "bottom";
  backgroundImage: string;
  height?: string;
}

export interface ARROW_CARD_PROPS {
  title: string;
  backgroundColor: string;
  textColor: string;
  iconBgColor: string;
  iconColor: string;
  secondTitle: string;
}

export interface SECTION_CARD_PROPS {
  title: string;

  variant: VARIANTS;
}

export interface WORK_CARD_PROPS {
  number?: string;
  title: string;
  description: string;
  img: string;
}

export interface TESTIMONIAL_CARD_PROPS {
  img?: StaticImageData;
  name: string;
  designation: string;
  description: string;
}

export interface FAQ_CARD_DATA {
  question: string;
  answer: string;
}
