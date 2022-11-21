import styles from './Card.module.scss';

const Card = ({
  image_url = 'http://via.placeholder.com/640x360',
  title,
  description,
  date,
  code_used,
}) => {
  return (
    <div className={styles.card}>
      <img src={image_url} alt='' />
      <p>{code_used}</p>
      <h1>
        {title}
        <span>{date}</span>
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
