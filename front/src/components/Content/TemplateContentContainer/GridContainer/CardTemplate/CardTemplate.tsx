import React, { memo, useState } from "react";
import { Card, Tag, Button, message } from "antd";
import classes from "./CardTemplate.module.css";
import ImageNotFound from "../../../../../assets/image-not-found.jpg";

interface CardTemplateProps {
  template: Template;
  onClick?: () => void;
}

const CardTemplate: React.FC<CardTemplateProps> = memo(
  ({ template, onClick }) => {
    const { id, name, image = ImageNotFound, niche, categ, price } = template;

    const [isFavorite, setIsFavorite] = useState(false);
    const [inCart, setInCart] = useState(false);

    const handleAddToFavorites = () => {
      setIsFavorite((prev) => !prev);
      message.success(
        isFavorite ? "Removed from favorites" : "Added to favorites"
      );
    };

    const handleAddToCart = () => {
      setInCart((prev) => !prev);
      message.success(inCart ? "Removed from cart" : "Added to cart");
    };

    return (
      <Card
        key={id}
        hoverable
        className={classes.card}
        cover={<img alt={name} src={image} className={classes.coverImage} />}
        onClick={onClick}
      >
        <Card.Meta title={name} />

        <div className={classes.tags}>
          <Tag color="green">{niche}</Tag>
          <Tag color="blue">Category {categ}</Tag>
        </div>

        <div className={classes.cardDetails}>
          <div className={classes.price}>${price}</div>

          <div className={classes.actions}>
            <Button
              type={isFavorite ? "primary" : "default"}
              onClick={handleAddToFavorites}
              className={classes.favoriteButton}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
            <Button
              type={inCart ? "primary" : "default"}
              onClick={handleAddToCart}
              className={classes.cartButton}
            >
              {inCart ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </Card>
    );
  }
);

export default CardTemplate;
