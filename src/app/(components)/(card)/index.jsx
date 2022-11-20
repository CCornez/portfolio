import styles from './Card.module.scss';

const Card = ({ image_url, title, description }) => {
  console.log(image_url, title, description);
  return (
    <div className={styles.card}>
      <img src={image_url} alt='' />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
