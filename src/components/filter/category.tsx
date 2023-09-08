'use client';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { categoriesState } from '@/states/categories';
import { pageState } from '@/states/page';
import { isTouchDevice } from '@/utils/is-touch-device';

export default function Category({ category }: { category: string }) {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const setPage = useSetRecoilState(pageState);
  const checked = categories.selected.includes(category);
  const active = categories.active.includes(category);

  const handleCategoryClick = (category: string) => () => {
    setCategories((prevCategories) => {
      if (prevCategories.selected.includes(category)) {
        return {
          ...prevCategories,
          selected: prevCategories.selected.filter(
            (value) => value !== category
          ),
        };
      } else {
        return {
          ...prevCategories,
          selected: [...prevCategories.selected, category],
        };
      }
    });

    setPage(1);
  };

  return (
    <button
      onClick={handleCategoryClick(category)}
      className={`my-2 mr-6 cursor-pointer rounded-full px-6 py-2 ring-customGreen-base transition-all duration-300 hover:ring-offset-4 dark:ring-offset-customGray-dark ${
        checked
          ? 'bg-customBlue-dark text-white ring-[3px] ring-offset-4 dark:bg-white dark:text-black'
          : 'bg-customGray-base'
      } ${!active && 'pointer-events-none opacity-25'} ${
        active && !isTouchDevice() && 'hover:ring-[3px]'
      }`}
    >
      {category}
    </button>
  );
}
