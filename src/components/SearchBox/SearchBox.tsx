import styles from './SearchBox.module.scss';

import { useEffect, useRef, useState } from 'react';
import { SearchDropdown } from '@/components';
import { useDebounce } from '@/utils/useDebounce';
import { useMovieFilter } from '@/hooks/useMovies';
import { getUnifiedQueryState } from '@/utils/getUnifiedQueryState';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@/assets/search-icon.svg?react';
import ClearIcon from '@/assets/clear-icon.svg?react';

export const SearchBox = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)
  const boxRef = useRef<HTMLDivElement>(null);

  const movieQuery = useMovieFilter(
    { title: useDebounce(value, 400) },
    { initialCount: 5 }
  );
  const unifiedMovieQuery = getUnifiedQueryState(movieQuery);

  const handleFieldClick = () => {
    inputRef.current?.focus();
    setIsOpen(true);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setValue('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return(
    <search className={styles.search} ref={boxRef} role='search' onClick={handleFieldClick}>
      <form className={styles.search__field}>
        <SearchIcon className={styles.search__icon}/>
        <input
          className={styles.search__input}
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          name='search'
          placeholder='Поиск'
        />
        {value &&
          <button
            className={styles.search__btn}
            type='button'
            onClick={handleClear}
          >
            <ClearIcon className={styles['search__btn-icon']} />
          </button>
        }
      </form>

      {value && isOpen &&
        <SearchDropdown dataQuery={unifiedMovieQuery} />
      }
    </search>
  )
}
