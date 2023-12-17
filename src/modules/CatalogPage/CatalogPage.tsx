import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { PaginatorPageChangeEvent } from 'primereact/paginator';
import { OnChangeValue } from 'react-select';
import * as phoneService from '../../api/phones';
import styles from './CatalogPage.module.scss';
import { Phone } from '../../types/Phone';
import { Option } from '../../types/Option';
import { ProductsList } from '../shared/components/ProductsList';
import { CustomSelect } from '../shared/components/CustomSelect/CustomSelect';
import { Pagination } from '../shared/components/Pagination/Pagination';
import { getSearchWith } from '../../utils/searchWithParams';
import { Loader } from '../shared/components/Loader';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const pageQuery = +(searchParams.get('page') || 0);
  const perPage = searchParams.get('perPage') || 16;
  const sortBy = searchParams.get('sort') || 'age';

  const itemsCount = perPage === 'all' ? perPage : +perPage;
  const page = pageQuery === 0 ? pageQuery : pageQuery - 1;

  const currentSort = sortOptions.find(option => option.value === sortBy)
    || sortOptions[0];

  const getPhones = useCallback(async () => {
    const { count, rows } = await phoneService.getPhones(
      page + 1,
      itemsCount,
      sortBy,
    );

    setIsLoading(false);
    setTotalCount(count);
    setPhones(rows);
  }, [itemsCount, page, sortBy]);

  useEffect(() => {
    getPhones();
  }, [getPhones]);

  const setSearchWith = (params: any) => {
    const search = getSearchWith(params, searchParams);

    setSearchParams(search);
  };

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    const newItems = event.rows === totalCount
      ? null
      : event.rows;

    const pagePaginator = event.page === 0
      ? null
      : event.page + 1;

    setSearchWith({ page: pagePaginator, perPage: newItems });
    setOffset(event.first);
  };

  const onSelectAmount = (selectedOption: OnChangeValue<Option, false>) => {
    if (selectedOption) {
      const amount = selectedOption.value === 'all'
        ? null
        : selectedOption.value;

      setSearchWith({ page: null, perPage: amount });
    }
  };

  const onSelectSort = (selectedOption: OnChangeValue<Option, false>) => {
    if (selectedOption) {
      setSearchWith({ sort: selectedOption.value });
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
          value={currentSort.label}
          onSelectSort={onSelectSort}
        />
        <CustomSelect
          label="Items on page"
          options={amountOptions}
          value={itemsCount}
          onSelectAmount={onSelectAmount}
        />
      </div>

      {isLoading ? (
        <Loader times={4} className={styles.loader} />
      ) : (
        <ProductsList phones={phones} />
      )}

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
