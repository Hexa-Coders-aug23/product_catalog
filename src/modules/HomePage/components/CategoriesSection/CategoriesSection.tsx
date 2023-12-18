import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getPhonesLength,
  getTabletsLength,
  getAccessoriesLength,
} from '../../../../api/categoriesAmount';
import styles from './CategoriesSection.module.scss';
import categoryPhonesImg from '../../../../static/categoryImg-Phones.png';
import categoryTabletsImg from '../../../../static/categoryImg-Tablets.png';
import categoryAccImg from '../../../../static/categoryImg-Accessories.png';

export const CategoriesSection: React.FC = () => {
  const [phonesAmount, setPhonesAmount] = useState(0);
  const [tabletsAmount, setTabletsAmount] = useState(0);
  const [accessoriesAmount, setAccessoriesAmount] = useState(0);

  const getPhones = async () => {
    const data = await getPhonesLength();

    setPhonesAmount(data.phonesCount);
  };

  const getTablets = async () => {
    const data = await getTabletsLength();

    setTabletsAmount(data.tabletsCount);
  };

  const getAccessories = async () => {
    const data = await getAccessoriesLength();

    setAccessoriesAmount(data.accessoriesCount);
  };

  useEffect(() => {
    getPhones();
    getTablets();
    getAccessories();
  }, []);

  const productCategories = [
    {
      to: '/phones',
      title: 'Mobile phones',
      amount: phonesAmount,
      img: categoryPhonesImg,
    },
    {
      to: '/tablets',
      title: 'Tablets',
      amount: tabletsAmount,
      img: categoryTabletsImg,
    },
    {
      to: '/accessories',
      title: 'Accessories',
      amount: accessoriesAmount,
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
