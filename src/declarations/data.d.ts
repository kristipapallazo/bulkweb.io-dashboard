/* Flow => Niche => Categ => Template  */

type NicheId =
  | "all-niches"
  | "landing-page"
  | "ecommerce"
  | "sport-fantasy"
  | "social-casino";

interface Niche {
  id: NicheId;
  name: string;
  categs: CategAllIds;
}
type NicheAllIds = NicheId[];
type AllNiches = Niche[];

// interface NichesById {
//   [nicheId: NicheId]: Niche;
// }
type NichesById = Record<NicheId, Niche>;

/* Categories */
type CategId = number;
interface Categ {
  id: CategId;
  name: string;
  niche: NicheId;
}
interface CategById {
  [categId: CategId]: Categ;
}
type AllCategs = Categ[];
type CategAllIds = CategId[];

/* Templates */
type TemplateId = number;
interface Template {
  name: string;
  image?: string;
  niche: NicheId;
  categ: CategId;
  price: number;
}
type AllTemplates = Template[];
type TemplateAllIds = TemplateId[];
interface TemplateById {
  [templateId: TemplateId]: Template;
}

interface Product {
  niche: NicheId;
  category: CategId;
  template: TemplateId;
}

type HostingPref = "self_hosted" | "bulkweb_hosted";
type Hosting = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  hosting_pref: HostingPref;
};

type PaymentMethod = "crypto" | "bank_transfer" | "credit_card";

type PaymentInfo = {
  creditsToUse: number;
  additionalCreditsNeeded?: number;
  paymentMethod?: PaymentMethod;
};

interface PaginationObject {
  currentPage: number;
  pageSize: number;
}
type SearchQuery = string;

interface WebsiteCreationFlow {
  domain: string | null;
  niche: NicheId;
  category: CategId | null;
  template: TemplateId | null;
  hosting: HostingPref | null;
  payment: PaymentInfo | null;
  selectedTemplates: TemplateAllIds;
  searchQuery: SearchQuery;
  pagination: {
    currentPage: number;
    pageSize: number;
  };
  nicheById: NichesById;
  nicheAllIds: NicheAllIds;
  categById: CategById;
  categAllIds: CategAllIds;
  filteredCategs: CategAllIds;
}
type WebsiteId = number;
interface Website {
  id?: number;
  domain: string;
  template: TemplateId;
  url: string;
  hosting?: HostingPref;
  createdAt?: string;
}
type AllWebsites = Website[];
// interface Websites {
//   [websitesId: WebsiteId]: Website;
// }
interface UserState {
  user: string | undefined;
  websites: AllWebsites;
  credits: number;
  purchaseHistory: number[]; // TemplateId[]
  burgerBttnIsOpen: boolean;
}
