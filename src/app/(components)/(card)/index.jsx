import Image from 'next/image';
import styles from './Card.module.scss';

const Card = ({
  image_url = 'https://loremflickr.com/1920/1080', // TODO: fetch image
  title,
  description,
  date,
  code_used = '',
}) => {
  // TODO: add detail view
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <figure>
          <Image
            src={image_url}
            fill
            objectFit='cover'
            alt={title || 'Project Image'}
          />
        </figure>
        <div className={styles.code}>
          {code_used.split(', ').map((code, i) => (
            <p key={i} className={styles[code] || styles.Default}>
              {code}
            </p>
          ))}
        </div>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default Card;
