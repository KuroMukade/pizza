import { useState } from "react";

export function Categories() {

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const [active, setActive] = useState(0);

  function onCategoryClick(index) {
    setActive(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li 
              key={index} 
              className={index === active ? 'active' : ''}
              onClick={() => onCategoryClick(index)}>{category}</li>
          );
        })}
      </ul>
    </div>
  );
}
