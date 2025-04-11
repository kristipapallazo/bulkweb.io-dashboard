import CardTemplate from "./CardTemplate/CardTemplate";
import { FC, useEffect, useState } from "react";
import classes from "./GridContainer.module.css";
export const TEMPLATES: Template[] = [
  {
    id: 1,
    name: "Modern Landing Page",
    niche: "landing-page",
    categ: 1,
    price: 49,
  },
  {
    id: 2,
    name: "Fantasy Sports Hub",
    niche: "sport-fantasy",
    categ: 2,
    price: 79,
  },
  {
    id: 3,
    name: "Casino Social Site",
    niche: "social-casino",
    categ: 3,
    price: 89,
  },
  {
    id: 4,
    name: "E-commerce Express",
    niche: "ecommerce",
    categ: 4,
    price: 59,
  },
  {
    id: 5,
    name: "Sports Betting Platform",
    niche: "sport-fantasy",
    categ: 2,
    price: 99,
  },
  {
    id: 6,
    name: "Social Casino Hub",
    niche: "social-casino",
    categ: 3,
    price: 75,
  },
  {
    id: 7,
    name: "Shop Smart E-commerce",
    niche: "ecommerce",
    categ: 4,
    price: 55,
  },
  {
    id: 8,
    name: "Luxury Landing Page",
    niche: "landing-page",
    categ: 1,
    price: 69,
  },
  {
    id: 9,
    name: "Online Poker Arena",
    niche: "social-casino",
    categ: 3,
    price: 95,
  },
  {
    id: 10,
    name: "Minimalist E-commerce",
    niche: "ecommerce",
    categ: 4,
    price: 45,
  },
  {
    id: 11,
    name: "Gaming Fantasy League",
    niche: "sport-fantasy",
    categ: 2,
    price: 85,
  },
  {
    id: 12,
    name: "E-commerce Marketplace",
    niche: "ecommerce",
    categ: 4,
    price: 65,
  },
  {
    id: 13,
    name: "Creative Landing Page",
    niche: "landing-page",
    categ: 1,
    price: 50,
  },
  {
    id: 14,
    name: "Casino VIP Club",
    niche: "social-casino",
    categ: 3,
    price: 99,
  },
  {
    id: 15,
    name: "E-commerce Fashion Hub",
    niche: "ecommerce",
    categ: 4,
    price: 60,
  },
  {
    id: 16,
    name: "Fantasy Sports Hub 2.0",
    niche: "sport-fantasy",
    categ: 2,
    price: 89,
  },
  {
    id: 17,
    name: "Interactive Casino Site",
    niche: "social-casino",
    categ: 3,
    price: 95,
  },
  {
    id: 18,
    name: "Landing Page Showcase",
    niche: "landing-page",
    categ: 1,
    price: 52,
  },
  {
    id: 19,
    name: "E-commerce for Creators",
    niche: "ecommerce",
    categ: 4,
    price: 58,
  },
  {
    id: 20,
    name: "Virtual Casino Games",
    niche: "social-casino",
    categ: 3,
    price: 90,
  },
  {
    id: 21,
    name: "Fantasy Sports Dashboard",
    niche: "sport-fantasy",
    categ: 2,
    price: 99,
  },
  {
    id: 22,
    name: "E-commerce Digital Store",
    niche: "ecommerce",
    categ: 4,
    price: 60,
  },
  {
    id: 23,
    name: "Modern Casino Experience",
    niche: "social-casino",
    categ: 3,
    price: 95,
  },
  {
    id: 24,
    name: "Premium Landing Page",
    niche: "landing-page",
    categ: 1,
    price: 70,
  },
  {
    id: 25,
    name: "E-commerce Grocery Store",
    niche: "ecommerce",
    categ: 4,
    price: 55,
  },
  {
    id: 26,
    name: "Fantasy Sports Betting",
    niche: "sport-fantasy",
    categ: 2,
    price: 92,
  },
  {
    id: 27,
    name: "Casino Games Hub",
    niche: "social-casino",
    categ: 3,
    price: 88,
  },
  {
    id: 28,
    name: "Simple E-commerce Site",
    niche: "ecommerce",
    categ: 4,
    price: 48,
  },
  {
    id: 29,
    name: "Sport Fantasy League 2025",
    niche: "sport-fantasy",
    categ: 2,
    price: 99,
  },
  {
    id: 30,
    name: "Casino Tournament Platform",
    niche: "social-casino",
    categ: 3,
    price: 98,
  },
  {
    id: 31,
    name: "Creative E-commerce Shop",
    niche: "ecommerce",
    categ: 4,
    price: 62,
  },
  {
    id: 32,
    name: "Landing Page Professional",
    niche: "landing-page",
    categ: 1,
    price: 55,
  },
  {
    id: 33,
    name: "Exclusive Fantasy Sports",
    niche: "sport-fantasy",
    categ: 2,
    price: 97,
  },
  {
    id: 34,
    name: "Casino Club Hub",
    niche: "social-casino",
    categ: 3,
    price: 90,
  },
  {
    id: 35,
    name: "E-commerce Marketplace 2.0",
    niche: "ecommerce",
    categ: 4,
    price: 66,
  },
  {
    id: 36,
    name: "Gaming Fantasy League Pro",
    niche: "sport-fantasy",
    categ: 2,
    price: 94,
  },
  {
    id: 37,
    name: "Luxury Casino Site",
    niche: "social-casino",
    categ: 3,
    price: 99,
  },
  {
    id: 38,
    name: "Tech Landing Page",
    niche: "landing-page",
    categ: 1,
    price: 58,
  },
  {
    id: 39,
    name: "E-commerce Tech Shop",
    niche: "ecommerce",
    categ: 4,
    price: 65,
  },
  {
    id: 40,
    name: "Fantasy Sports 2025",
    niche: "sport-fantasy",
    categ: 2,
    price: 93,
  },
  {
    id: 41,
    name: "Casino Games Arena",
    niche: "social-casino",
    categ: 3,
    price: 89,
  },
  {
    id: 42,
    name: "Premium E-commerce Store",
    niche: "ecommerce",
    categ: 4,
    price: 67,
  },
  {
    id: 43,
    name: "Modern Fantasy Sports",
    niche: "sport-fantasy",
    categ: 2,
    price: 91,
  },
  {
    id: 44,
    name: "Casino Night Online",
    niche: "social-casino",
    categ: 3,
    price: 96,
  },
  {
    id: 45,
    name: "Landing Page Boost",
    niche: "landing-page",
    categ: 1,
    price: 56,
  },
  {
    id: 46,
    name: "Smart E-commerce Store",
    niche: "ecommerce",
    categ: 4,
    price: 59,
  },
  {
    id: 47,
    name: "Global Fantasy League",
    niche: "sport-fantasy",
    categ: 2,
    price: 88,
  },
  {
    id: 48,
    name: "Casino Roulette Site",
    niche: "social-casino",
    categ: 3,
    price: 97,
  },
  {
    id: 49,
    name: "Elegant Landing Page",
    niche: "landing-page",
    categ: 1,
    price: 61,
  },
  {
    id: 50,
    name: "Digital Goods E-commerce",
    niche: "ecommerce",
    categ: 4,
    price: 63,
  },
  {
    id: 51,
    name: "Fantasy Sports PRO",
    niche: "sport-fantasy",
    categ: 2,
    price: 98,
  },
  {
    id: 52,
    name: "Slots Casino Online",
    niche: "social-casino",
    categ: 3,
    price: 95,
  },
  {
    id: 53,
    name: "Landing Page Creator",
    niche: "landing-page",
    categ: 1,
    price: 54,
  },
  {
    id: 54,
    name: "Artisan E-commerce",
    niche: "ecommerce",
    categ: 4,
    price: 60,
  },
  {
    id: 55,
    name: "Pro Fantasy Sports",
    niche: "sport-fantasy",
    categ: 2,
    price: 96,
  },
  {
    id: 56,
    name: "Online Blackjack Hub",
    niche: "social-casino",
    categ: 3,
    price: 94,
  },
  {
    id: 57,
    name: "Landing Page Focus",
    niche: "landing-page",
    categ: 1,
    price: 52,
  },
  {
    id: 58,
    name: "Modern Shop E-commerce",
    niche: "ecommerce",
    categ: 4,
    price: 62,
  },
  {
    id: 59,
    name: "Ultimate Fantasy League",
    niche: "sport-fantasy",
    categ: 2,
    price: 99,
  },
  {
    id: 60,
    name: "Vegas Online Casino",
    niche: "social-casino",
    categ: 3,
    price: 99,
  },
];

export const niches: AllNiches = [
  { id: "landing-page", name: "Landing Page" },
  { id: "sport-fantasy", name: "Sport Fantasy" },
  { id: "social-casino", name: "Social Casino" },
  { id: "ecommerce", name: "E-commerce" },
];

export const categs: AllCategs = [
  { id: 1, name: "One", niche: "landing-page" },
  { id: 2, name: "Two", niche: "sport-fantasy" },
  { id: 3, name: "Three", niche: "social-casino" },
  { id: 4, name: "Four", niche: "ecommerce" },
];

interface GridTemplatesProps {
  templates: Templates;
}

const GridTemplates: FC<GridTemplatesProps> = ({ templates }) => {
  /* Todo: define better the below fn */
  const handleCardClick = () => {};

  const items = templates.map((template) => (
    <CardTemplate
      key={template.id}
      template={template}
      onClick={handleCardClick}
    />
  ));

  return <div className={classes.grid_templates}>{items}</div>;
};

const GridContainer = () => {
  const [currPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [paginatedTemplates, setPaginatedTemplates] = useState<Templates>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePageSize = (pageSize: number) => {
    setPageSize(pageSize);
  };

  useEffect(() => {
    const tempTemplates = TEMPLATES.slice(
      (currPage - 1) * pageSize,
      currPage * pageSize
    );
    setPaginatedTemplates(tempTemplates);
  }, [currPage]);
  return (
    <div className={classes.grid_container}>
      <GridTemplates templates={paginatedTemplates} />
    </div>
  );
};

export default GridContainer;
