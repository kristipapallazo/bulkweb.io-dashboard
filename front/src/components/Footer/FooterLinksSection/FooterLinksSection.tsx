import { FC } from "react";
import classes from "./FooterLinksSection.module.css";
import { Link } from "react-router";

type Links = string[];
interface FooterLinksSection {
  [key: string]: Links;
}

const FOOTER_LINKS_DICT: FooterLinksSection = {
  Platform: [
    "Website Builder",
    "Domain Management",
    "Template Gallery",
    "Hosting Options",
    "Credit System",
    "Bulk Site Creation",
    "SEO Tools",
    "Analytics Integration",
    "Custom Code Support",
    "Auto Publishing",
  ],
  Resources: [
    "Getting Started Guide",
    "How to Launch 100 Sites",
    "Design Tips & Tricks",
    "Domain Name Strategy",
    "Performance Optimization",
    "Template Customization",
    "Content Planning Guide",
    "Website Maintenance 101",
    "Top Niches for Monetization",
  ],
  "Use Cases": [
    "Affiliate Marketers",
    "Ecommerce Sellers",
    "Agencies",
    "Startup Founders",
    "Landing Page Funnels",
    "Niche Website Builders",
    "Lead Generation",
    "SaaS Product Pages",
  ],
  Company: [
    "About BulkWeb",
    "Meet the Team",
    "Careers",
    "Press",
    "Contact Us",
    "Blog",
    "Partnerships",
  ],
  Support: [
    "Help Center",
    "FAQs",
    "System Status",
    "Feature Requests",
    "Community Forum",
    "API Documentation",
    "Contact Support",
  ],
};

interface ListProps {
  links: Links;
}
const List: FC<ListProps> = ({ links }) => {
  const items = links.map((link, index) => (
    <Link key={index} to={link} className={classes.item}>
      {link}
    </Link>
  ));

  return <ul className={classes.list}>{items}</ul>;
};

const FooterLinksSection = () => {
  const links = Object.entries(FOOTER_LINKS_DICT).map(([section, links]) => (
    <div className={classes.column} key={section}>
      <h4 className={classes.title}>{section}</h4>
      <List links={links} />
    </div>
  ));
  return <div className={classes.footerLinksSection}>{links}</div>;
};

export default FooterLinksSection;
