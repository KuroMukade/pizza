import { useState, useEffect, useContext } from 'react';

import Pagintaion from '../components/Pagintaion';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { PizzaBlock } from '../components/PizzaBlock';
import { SearchContext } from '../App';


const Home = () => {
  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating', 
  });

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((index) => <Skeleton key={index} />);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://62cdeb00066bd2b6992e0b81.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}${search}`
      )
      .then((res) => res.json())
      .then((arr) => {
        setIsLoading(false);
        return setItems(arr);
      });
      window.scrollTo(0,0)
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onCategoryClick={(id) => setCategoryId(id)}/>
        <Sort value={sortType} onSortClick={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletons : pizzas}
      </div>
      <Pagintaion onChangePage={number => setCurrentPage(number)}/>
    </div>
  );
};

export default Home;
