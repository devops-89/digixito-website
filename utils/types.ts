import { StaticImageData } from "next/image";
import { VARIANTS } from "./enum";

export interface BEST_SERVICE_CARD_PROPS {
  heading?: string;
  boldHeading?: string;
  iconPosition?: "top" | "bottom";
  backgroundImage: string;
  height?: string;
  isStar?: boolean;
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

export interface SECURE_CONNECTED_CARD {
  backgroundImage: string;
  img: StaticImageData;
  heading: string;
  description: string;
  isButton: boolean;
}

export interface URLPROPS {
  label: string;
  url?: string;
}
export interface LINK_LIST {
  heading: string;
  data: URLPROPS[];
}

export interface VALUE_CARD_PROPS {
  number?: string | number;
  title: string;
  description: string;
}

export interface COUNT_UP_CARD_PROPS {
  number: number;
  suffix: string;
  title: string;
}

export interface HEADER_DATA_PROPS {
  label?: string;
  url?: string;
  subData?: URLPROPS[];
}

export interface HEADER_LIST_PROPS {
  heading: string;
  data: HEADER_DATA_PROPS[];
}

export interface LIST {
  label?: string;
  value?: string;
}

export interface OUR_SERVICES_CARD {
  service_name: string;
  service_description: string;
  // list: LIST[];
}

export interface PROJECT_CARD_PROPS {
  project_name: string;
  project_description: string;
  img: StaticImageData;
}

export interface DEVELOPMENT_PROCESS_CARD_PROPS {
  process_number: string | number;
  process_title: string;
  process_description: string;
}

export interface DETAILS_PAGE_PROPS {
  slug: string;
  title: string;
  heroSection: {
    heading: string;
    description: string;
  };
  ourServices: {
    heading: string;
    description: string;
    services_data: OUR_SERVICES_CARD[];
  };
  project_data: PROJECT_CARD_PROPS[];
  development_process: DEVELOPMENT_PROCESS_CARD_PROPS[];
}

export interface WHAT_LIST {
  serial_number: string;
  heading: string;
  description: string;
}

export interface VALUE_LIST_PROPS {
  data: WHAT_LIST[];
  img: StaticImageData;
  isReverse?: boolean;
}

export interface WORK_AT_DIGIXITO_CARD_PROPS {
  serial_number: string;
  heading: string;
  description: string;
}
