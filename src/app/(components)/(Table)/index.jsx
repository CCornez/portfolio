import Image from 'next/image';
import styles from './Table.module.scss';

const Card = ({
  image_url = 'https://loremflickr.com/1920/1080', // TODO: fetch image
  title,
  description,
  date,
  code_used,
  // TODO: fetch alt
}) => {
  // TODO: add detail view
  return (
    <div className={styles.row}>
      <figure>
        {/* images are screen size = 1920 / 1080 */}
        <Image src={image_url} width='96' height='54' alt='temp' />
      </figure>
      <p>{title}</p>
      <p>{description}</p>
      <p>{code_used}</p>
      <p>{date}</p>
    </div>
  );
};

export default Card;
