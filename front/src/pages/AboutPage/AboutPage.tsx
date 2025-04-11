import Circle from "../../components/UI/Geometry/Circle";
import classes from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={classes.aboutPage}>
      <Circle style={{ left: 25, top: -100, width: "100%", height: 220 }} />
      <div className={classes.content}>
        <h1 className={classes.title}>About BulkWeb.io</h1>

        <p className={classes.paragraph}>
          <strong>BulkWeb.io</strong> is a next-generation platform designed to
          simplify and scale the website creation process. Whether you're
          launching a single landing page or managing hundreds of niche
          websites, BulkWeb.io empowers users with intuitive tools, powerful
          automation, and seamless deployment options.
        </p>

        <h2 className={classes.sectionTitle}>What We Offer</h2>
        <ul className={classes.list}>
          <li>Create single or bulk websites effortlessly</li>
          <li>
            Search and purchase custom domains directly through the dashboard
          </li>
          <li>
            Choose from a variety of niches and dynamically tailored categories
          </li>
          <li>
            Pick from 50+ high-quality templates with preview and search options
          </li>
          <li>
            Flexible hosting: download your site or host on BulkWeb.io servers
          </li>
          <li>
            Credits-based payment system with crypto, card, or bank transfer
            options
          </li>
        </ul>

        <h2 className={classes.sectionTitle}>Our Vision</h2>
        <p className={classes.paragraph}>
          We believe creating and managing websites should be fast, scalable,
          and accessible to everyone. BulkWeb.io removes the friction from
          traditional web development by combining elegant UI design with smart
          automation tools.
        </p>

        <h2 className={classes.sectionTitle}>Who It's For</h2>
        <p className={classes.paragraph}>
          From digital marketers and entrepreneurs to developers and SEO
          professionals — BulkWeb.io is built for anyone who needs to launch
          websites at scale without compromising on quality or performance.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
