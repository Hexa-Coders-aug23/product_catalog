/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PaginatorPageChangeEvent } from 'primereact/paginator';
import { OnChangeValue } from 'react-select';
import * as phoneService from '../../api/phones';
import styles from './CatalogPage.module.scss';
import { Phone } from '../../types/Phone';
import { Option } from '../../types/Option';
import { ProductsList } from '../shared/components/ProductsList';
import { CustomSelect } from '../shared/components/CustomSelect/CustomSelect';
import { Pagination } from '../shared/components/Pagination/Pagination';

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
  const [sortBy, setSortBy] = useState('age');

  const getPhones = useCallback(async () => {
    const { count, rows } = await phoneService.getPhones(page + 1, itemsCount, sortBy);

    setTotalCount(count);
    setPhones(rows);
  }, [itemsCount, page, sortBy]);

  useEffect(() => {
    getPhones();
  }, [getPhones]);

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

  const onSelectSort = (selectedOption: OnChangeValue<Option, false>) => {
    if (selectedOption) {
      setSortBy(selectedOption.value);
    }
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
          onSelectSort={onSelectSort}
        />
        <CustomSelect
          label="Items on page"
          options={amountOptions}
          defaultOptionId={2}
          onSelectAmount={onSelectAmount}
        />
      </div>

      <ProductsList phones={phones} />

      {phones?.length !== totalCount && (
        <Pagination
          activePage={page}
          offset={offset}
          rows={itemsCount}
          totalCount={totalCount}
          onPageChange={onPageChange}
        />
      )}
    </main>
  );
};
