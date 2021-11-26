import React, { useState, useEffect } from "react";

const Tampil = () => {
  const [categories, setCategories] = useState(null);

  const fetching = async () => {
    const data = await fetch("www.themealdb.com/api/json/v1/1/categories.php");
    const result = await data.json();
    // await console.log(result)
    setCategories(result.categories);
    // console.log(result.categories)
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      {(categories &&
        categories.map((category) => (
          <li key={category.idCategory}>{category.strCategory}</li>
        ))) ||
        "loading..."}
    </div>
  );
};

export default Tampil;
