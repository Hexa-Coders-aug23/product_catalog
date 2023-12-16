import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as phoneService from '../../../../api/phones';
import styles from './CategoriesSection.module.scss';
import { Phone } from '../../../../types/Phone';
import categoryPhonesImg from '../../../../static/categoryImg-Phones.png';
import categoryTabletsImg from '../../../../static/categoryImg-Tablets.png';
import categoryAccImg from '../../../../static/categoryImg-Accessories.png';

export const CategoriesSection: React.FC = () => {
  const [, setPhones] = useState<Phone[]>([]);

  const getPhones = async () => {
    const data = await phoneService.getPhones();

    setPhones(data);
  };

  useEffect(() => {
    getPhones();
  }, []);

  const productCategories = [
    {
      to: '/phones',
      title: 'Mobile phones',
      amount: 95,
      img: categoryPhonesImg,
    },
    {
      to: '/tablets',
      title: 'Tablets',
      amount: 36,
      img: categoryTabletsImg,
    },
    {
      to: '/accessories',
      title: 'Accessories',
      amount: 123,
      img: categoryAccImg,
    },
  ];

  return (
    <>
      <section className={styles.categoriesSection}>
        <h2 className={styles.blockName}>Shop by category</h2>
        <div className={styles.blockWrapper}>
          {productCategories.map((category) => (
            <Link
              key={category.title}
              to={category.to}
              className={styles.categoryBlock}
            >
              <img
                src={category.img}
                alt="Mobile phones category"
                className={styles.categoryImg}
              />
              <div className={styles.categoryInfo}>
                <h4 className={styles.categoryTitle}>{category.title}</h4>
                <span className={styles.categoryAmount}>
                  {`${category.amount} models`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
