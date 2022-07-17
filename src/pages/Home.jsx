import { useState, useEffect } from 'react';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { PizzaBlock } from '../components/PizzaBlock';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
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
    console.log(searchValue)

    fetch(
      `https://62cdeb00066bd2b6992e0b81.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}${search}`
      )
      .then((res) => res.json())
      .then((arr) => {
        setIsLoading(false);
        return setItems(arr);
      });
      window.scrollTo(0,0)
  }, [categoryId, sortType, searchValue]);

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
    </div>
  );
};

export default Home;
