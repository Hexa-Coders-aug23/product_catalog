/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { OnChangeValue } from 'react-select';
import classNames from 'classnames';
import * as phoneService from '../../api/phones';
import styles from './CatalogPage.module.scss';
import { Phone } from '../../types/Phone';
import { Option } from '../../types/Option';
import { ProductsList } from '../shared/components/ProductsList';
import { CustomSelect } from '../shared/components/CustomSelect/CustomSelect';
import prevArrow from '../../static/icons/Chevron_Arrow_Left.svg';
import nextArrow from '../../static/icons/Chevron_Arrow_Right.svg';

const sortOptions: Option[] = [
  { value: 'age', label: 'Newest' },
  { value: 'title', label: 'Alphabetically' },
  { value: 'price', label: 'Cheapest' },
];

const amountOptions: Option[] = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
  { value: 'all', label: 'all' },
];

export const CatalogPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [offset, setOffset] = useState(0);
  const [itemsCount, setItemsCount] = useState<string | number>(16);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);

  const newRows = itemsCount === 'all'
    ? totalCount
    : itemsCount;

  const getPhones = useCallback(async () => {
    const { count, rows } = await phoneService.getPhones(page + 1, itemsCount);

    setTotalCount(count);
    setPhones(rows);
  }, [itemsCount, page]);

  useEffect(() => {
    getPhones();
  }, [page, itemsCount, getPhones]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    const newItems = event.rows === totalCount
      ? 'all'
      : event.rows;

    setPage(event.page);
    setOffset(event.first);
    setItemsCount(newItems);
  };

  const onSelectAmount = (selectedOption: OnChangeValue<Option, false>) => {
    if (selectedOption) {
      const newItems = selectedOption.value === 'all'
        ? selectedOption.value
        : +selectedOption.value;

      setPage(0);
      setItemsCount(newItems);
    }
  };

  const template = {
    layout: 'PrevPageLink PageLinks NextPageLink',
    PrevPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={styles.circleWithChevrone}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <img
            alt="Prev"
            src={prevArrow}
            className={styles.arrow}
          />
        </button>
      );
    },
    NextPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={styles.circleWithChevrone}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <img
            alt="Next"
            src={nextArrow}
            className={styles.arrow}
          />
        </button>
      );
    },
    PageLinks: (options: any) => {
      return (
        <button
          type="button"
          className={classNames(styles.circleButton, {
            [styles.activeButton]: options.page === page,
          })}
          onClick={options.onClick}
        >
          {options.page + 1}
        </button>
      );
    },
  };

  return (
    <main className={styles.container}>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.homeIcon} />
        <div className={styles.iconNext} />
        <NavLink to="phones" className={styles.step}>
          Phones
        </NavLink>
      </div>
      <h1 className={styles.title}>Mobile phones</h1>
      <p className={styles.amount}>{`${totalCount} models`}</p>
      <div className={styles.selects}>
        <CustomSelect
          label="Sort by"
          options={sortOptions}
          defaultOptionId={0}
        />
        <CustomSelect
          label="Items on page"
          options={amountOptions}
          defaultOptionId={2}
          onSelectAmount={onSelectAmount}
        />
      </div>
      <ProductsList phones={phones} />
      <Paginator
        template={template}
        first={offset}
        rows={newRows as number}
        totalRecords={totalCount}
        onPageChange={onPageChange}
      />
    </main>
  );
};
