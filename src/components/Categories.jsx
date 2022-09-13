import React from "react";

const Categories = ({ categoryId, setCategoryId }) => {
  const cats = [
    { name: "Все" },
    { name: "Море" },
    { name: "Горы" },
    { name: "Архитектура" },
    { name: "Города" },
  ];
  return (
    <ul className="tags">
      {cats.map((obj, i) => {
        return (
          <li
            onClick={() => setCategoryId(i)}
            className={categoryId === i ? "active" : ""}
            key={obj.name}
          >
            {obj.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
