// React
import { useState, useEffect } from "react";
// Data
import { menuItems } from "./data";
// Components
import MenuItem from "./MenuItem";

const Menu = () => {
  const [items, setItems] = useState(menuItems);
  const [categoriesList, setCategoriesList] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menuItems);
    } else {
      setItems(
        menuItems.filter((item) => {
          return item.type === category;
        })
      );
    }
  };

  useEffect(() => {
    let categoriesListSet = [
      ...new Set(
        menuItems.map((item) => {
          return item.type;
        })
      ),
      "all",
    ];
    setCategoriesList(categoriesListSet);
  }, []);

  return (
    <section id='main-section'>
      <h1>Our Menu</h1>
      <hr />
      <div id='button-div'>
        {categoriesList.map((category) => {
          return (
            <button onClick={() => filterItems(category)} key={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          );
        })}
      </div>
      <section id='menu-items'>
        {items.map((item) => {
          const { img, name, price, description, id } = item;
          return (
            <MenuItem
              img={img}
              name={name}
              cost={price}
              description={description}
              key={id}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Menu;
