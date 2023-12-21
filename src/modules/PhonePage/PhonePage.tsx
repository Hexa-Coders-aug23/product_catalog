/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import * as phoneService from '../../api/phones';
import { PhoneDetailed } from '../../types/Phone';

import { HeaderComponent } from './Header';
import { ProductCard } from './ProductCard';
import AboutArticle from './AboutArticle/AboutArticle';
import TechSpecsArticle from './TechArticle/TechArticle';
import { ProductsSlider } from '../shared/components/ProductsSliderLib';

import styles from './PhonePage.module.scss';
import loadingIcon from './wifi.png';

export const PhonePage: React.FC = () => {
  const navigate = useNavigate();
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [phone, setPhone] = useState<PhoneDetailed | null>(null);
  const [newColor, setNewColor] = useState('');
  const [newCapacity, setNewCapacity] = useState('');
  const [, setCurrentMainPhoto] = useState('');

  const [phoneLink, setPhoneLink] = useState(window.location.hash.slice(9));

  const fetchPhoneById = async () => {
    try {
      const data = await phoneService.getPhone(phoneLink);

      setPhone(data);
    } catch (error) {
      console.error('Error fetching phone:', error);
    }
  };

  const fetchRecommended = async () => {
    try {
      const data = await phoneService.getRecommendedPhones(phoneLink);

      setRecommended(data);
    } catch (error) {
      console.error('Error fetching recommended phones:', error);
      navigate('/page-not-found');
    } finally {
      setIsLoading(true);
    }
  };

  console.log(isLoading);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchPhoneById();
    fetchRecommended();
  }, [phoneLink]);

  useEffect(() => {
    if (phone) {
      setCurrentMainPhoto(phone.images[0]);
    }
  }, [phone, newColor, newCapacity]);

  useEffect(() => {
    setPhoneLink(window.location.hash.slice(9));
    setNewCapacity('');
    setNewColor('');
  }, [window.location.href]);

  if (!phone) {
    return (
      <div className={styles.loading}>
        <img
          className={styles.loadingIcon}
          src={loadingIcon}
          alt="loading Icon"
        />
        <NavLink to="/" className={styles.loadingText}>
          Check your link please or click me and go home
        </NavLink>
      </div>
    );
  }

  const updateUrl = (newLink: string) => {
    navigate(`/phones/${newLink}`);
  };

  const {
    name,
    description,
  } = phone;

  return (
    <main className={styles.productPage}>
      {isLoading
        ? (
          <div className={styles.loading}>
            <img
              className={styles.loadingIcon}
              src={loadingIcon}
              alt="loading Icon"
            />
            <NavLink to="/" className={styles.loadingText}>
              Check your link please or click me and go home
            </NavLink>
          </div>
        )
        : (
          <>
            <HeaderComponent name={name} />
            <ProductCard
              phone={phone}
              newColor={newColor}
              setNewColor={setNewColor}
              newCapacity={newCapacity}
              setNewCapacity={setNewCapacity}
              setPhoneLink={setPhoneLink}
              updateUrl={updateUrl}
            />
            <div className={styles.articlesBlock}>
              <AboutArticle description={description} />
              <TechSpecsArticle phone={phone} />
            </div>
            <ProductsSlider sectionTitle="You may also like" phones={recommended} isLoading={isLoading} />
          </>
        )}
    </main>
  );
};
