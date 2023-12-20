import styles from './EmptyPageContent.module.scss';

type Props = {
  gadgets: string;
};

export const EmptyPageContent: React.FC<Props> = ({ gadgets }) => {
  return (
    <>
      <h2 className={styles.outOfStockTitle}>
        {`Notice: Currently Out of Stock on ${gadgets}`}
      </h2>

      <p className={styles.outOfStockText}>
        {`We're currently out of stock on ${gadgets.toLowerCase()}.`}
        <br />
        Our team is working hard to restock.
        <br />
        Apologies for any inconvenience.
        <br />
        Explore other exciting products in the meantime.
        <br />
        Thank you for your understanding.
        <br />
        <br />
        Nice Gadgets!
      </p>
    </>
  );
};
