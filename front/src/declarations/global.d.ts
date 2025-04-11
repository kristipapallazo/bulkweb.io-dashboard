interface User {
  id: number;
  name: string;
  email: string;
  credits: number;
}
type BulkCreationRequest = {
  numberOfSites: number;
  baseDomain: string;
  niche: Niche;
  category: Category;
  template: Template;
  hosting: HostingPreference;
  totalCredits: number;
};

type Module =
  | "template"
  | "home"
  | "about"
  | "pricing"
  | "login"
  | "signup"
  | "contact"
  | "terms"
  | "privacy"
  | "faq"
  | "blog"
  | "blog-post"
  | "404";
type SubModule = "favorites" | "history" | "pricing";
