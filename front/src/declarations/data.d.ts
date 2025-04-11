/* Flow => Niche => Categ => Template  */

type NicheId = "landing-page" | "ecommerce" | "sport-fantasy" | "social-casino";

interface Niche {
  id: NicheId;
  name: string;
}
type AllNiches = Niche[];

type CategId = number;
interface Categ {
  id: CategId;
  name: string;
  niche: NicheId;
}
type AllCategs = Categ[];

type TemplateId = number;
interface Template {
  id: TemplateId;
  name: string;
  image?: string;
  niche: NicheId;
  categ: CategId;
  price: number;
}
type Templates = Template[];

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

type WebsiteCreationFlow = {
  domain: DomainOption;
  niche: Niche;
  category: Category;
  template: Template;
  hosting: HostingPreference;
  payment: PaymentInfo;
};

type WebsiteEntry = {
  id: string;
  domain: string;
  createdAt: string;
  status: "active" | "processing" | "failed";
};
