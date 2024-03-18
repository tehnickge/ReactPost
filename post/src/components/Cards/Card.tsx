import { Post } from "@/app/posts/page";
import styles from "./Card.module.scss";
import { Typography } from "@mui/material";

const Card = ({ cardData }: { cardData: Post }) => {
  const { userId, id, title, body, name } = cardData;

  return (
    <div className={styles[`wrapper`]}>
      <div className={styles[`card`]}>
        <div className={styles[`card__title`]}><Typography variant="h4">{title}</Typography></div>
        <div className={styles[`card__body`]}><Typography variant="h6">{body}</Typography></div>
        <div className={styles['card__info']}>
            <div>
                <Typography  variant="h6">author: {name}</Typography>
                <Typography  variant="h6">user id: {userId}</Typography>
                <Typography  variant="h6">post id: {id}</Typography>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
