import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { menu_items } from "./items";
import "./style.css";

const MainApp = () => {
  const [list, setList] = useState(menu_items);
  const [categoriesList, setCategoriesList] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setList(menu_items);
    } else {
      setList(
        menu_items.filter((item) => {
          return item.type === category;
        })
      );
    }
  };

  useEffect(() => {
    let categoriesListSet = [
      ...new Set(
        menu_items.map((item) => {
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
        {categoriesList.map((category, index) => {
          return (
            <>
              <button onClick={() => filterItems(category)} key={index}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </>
          );
        })}
      </div>
      <section id='menu-items'>
        {list.map((item) => {
          const { img, name, price, description, id } = item;
          return (
            <MenuItem
              img={img}
              name={name}
              cost={price}
              description={description}
              key={id}
            ></MenuItem>
          );
        })}
      </section>
    </section>
  );
};

const MenuItem = (props) => {
  const { img, name, cost, description } = props;
  return (
    <>
      <section id='item-section'>
        <img src={img} alt='' />
        <span>
          <div className='title'>
            <h6>{name}</h6>
            <p>{cost}</p>
          </div>
          <div className='details'>
            <hr />
            <p>{description}</p>
          </div>
        </span>
      </section>
    </>
  );
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
