export function Categories({value, onCategoryClick}) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li 
              key={index} 
              className={value === index ? 'active' : ''}
              onClick={() => onCategoryClick(index)}>
                {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
