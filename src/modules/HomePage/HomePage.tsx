import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { BannerSection } from './components/BannerSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductsSlider } from '../shared/components/ProductsSliderLib';
import { Phone } from '../../types/Phone';
import { SliderCategory } from '../../types/SliderCategory';
import { getSliderPhones } from '../../api/sliderApi';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [discountedPhones, setDiscountedPhones] = useState<Phone[]>([]);
  const [isNewLoading, setIsNewLoading] = useState(true);
  const [isDiscountedLoading, setIsDiscountedLoading] = useState(true);

  useEffect(() => {
    const getNewPhones = async () => {
      const phones = await getSliderPhones(SliderCategory.New);

      setIsNewLoading(false);
      setNewPhones(phones);
    };

    const getDiscountedPhones = async () => {
      const phones = await getSliderPhones(SliderCategory.Discount);

      setIsDiscountedLoading(false);
      setDiscountedPhones(phones);
    };

    getNewPhones();
    getDiscountedPhones();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <BannerSection />
      <ProductsSlider
        sectionTitle="Brand new models"
        phones={newPhones}
        isLoading={isNewLoading}
      />
      <CategoriesSection />
      <ProductsSlider
        sectionTitle="Hot prices"
        phones={discountedPhones}
        isLoading={isDiscountedLoading}
      />
    </main>
  );
};
