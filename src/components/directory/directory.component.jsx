import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem category={item} key={item.id} />
      ))}
    </div>
  );
};

export default Directory;
