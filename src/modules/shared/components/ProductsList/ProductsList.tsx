import styles from './ProductsList.module.scss';
import { Card } from '../Card';
import { Phone } from '../../../../types/Phone';

type Props = {
  phones: Phone[];
};

export const ProductsList: React.FC<Props> = ({ phones }) => (
  <div className={styles.itemsContainer}>
    {phones.map(({
      // itemId,
      image,
      name,
      price,
      fullPrice,
      screen,
      capacity,
      ram,
    }) => {
      return (
        <Card
          // itemId={itemId}
          image={image}
          name={name}
          price={price}
          fullPrice={fullPrice}
          screen={screen}
          capacity={capacity}
          ram={ram}
        />
      );
    })}
  </div>
);
