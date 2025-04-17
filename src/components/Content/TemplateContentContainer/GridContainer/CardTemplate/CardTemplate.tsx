import React, { memo } from "react";
import { Card, Tag, Button, message } from "antd";
import ImageNotFound from "../../../../../assets/image-not-found.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreState } from "../../../../../redux";

import classes from "./CardTemplate.module.css";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import {
  addFavorite,
  removeFavorite,
} from "../../../../../redux/Slices/TemplatesSlice";
import { setTemplate } from "../../../../../redux/Slices/FlowSlice";
import { removeCredits } from "../../../../../redux/Slices/UserSlice";

interface CardTemplateProps {
  id: TemplateId;
  template: Template;
  isFavorite: boolean;
  isSelected: boolean;
  isMyTemplate: boolean;
}

const CardTemplate: React.FC<CardTemplateProps> = memo(
  ({ template, isSelected, isFavorite, isMyTemplate, id }) => {
    const { name, image = ImageNotFound, niche, categ, price } = template;

    // const [inCart, setInCart] = useState(false);
    // const { myTemplates } = useSelector(
    //   (state: RootStoreState) => state.templates
    // );
    const credits = useSelector((state: RootStoreState) => state.user.credits);

    const dispatch = useDispatch<AppDispatch>();

    const handleFavoriteChange = () => {
      dispatch(isFavorite ? removeFavorite(id) : addFavorite(id));

      /* Todo: there is an error with this message */
      message.success(
        isFavorite ? "Removed from favorites" : "Added to favorites"
      );
    };
    const handleTemplateSelect = () => {
      dispatch(setTemplate(isSelected ? null : id));

      /* Todo: there is an error with this message */
      message.success(isFavorite ? "Select" : "Unselect");
    };

    // const handleAddToCart = () => {
    //   setInCart((prev) => !prev);
    //   message.success(inCart ? "Removed from cart" : "Added to cart");
    // };
    const handleBuy = (creditAmounts: number) => {
      if (credits < creditAmounts) {
        //not sufficient credits
        message.error("Not enough credits to buy! Purchase some credits first");
      } else {
        dispatch(removeCredits(creditAmounts));
        // dispatch(addMyTemplates(id));
        // setInCart((prev) => !prev);
        message.success("Template was bought successfully!");
      }
    };

    return (
      <Card
        key={id}
        hoverable
        className={classes.card}
        cover={
          <img
            // style={{ height: "100%" }}
            // height={"100%"}
            height={"200px"}
            alt={name}
            src={image}
            className={classes.coverImage}
          />
        }
      >
        <Card.Meta title={name} />

        <div className={classes.tags}>
          <Tag color="green">{niche}</Tag>
          <Tag color="blue">Category {categ}</Tag>
        </div>

        <div className={classes.cardDetails}>
          <div className={classes.priceRow}>
            <div className={classes.price}>${price}</div>
            <Button
              type={isFavorite ? "primary" : "default"}
              onClick={handleFavoriteChange}
              className={classes.favoriteButton}
              icon={
                isFavorite ? (
                  <FaHeart
                    className=".icon"
                    style={{ color: "var(--accent-color)" }}
                  />
                ) : (
                  <FaHeartBroken className=".icon" />
                )
              }
            ></Button>
          </div>

          <div className={classes.actions}>
            <Button
              type={isSelected ? "primary" : "default"}
              onClick={handleTemplateSelect}
              className={classes.cartButton}
            >
              {isSelected ? "Setup" : "Un setup"}
            </Button>

            {!isMyTemplate && (
              <Button
                type={isMyTemplate ? "primary" : "default"}
                onClick={() => handleBuy(price)}
                className={classes.cartButton}
              >
                Buy
              </Button>
            )}
          </div>
        </div>
      </Card>
    );
  }
);

export default CardTemplate;
