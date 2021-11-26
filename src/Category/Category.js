import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dnt from "./Dnt";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  const fetching = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const result = await data.json();
    // await console.log(result)
    setCategories(result.categories);
    console.log(result.categories);
  };

  useEffect(() => {
    fetching();
  }, []);

  // console.log(categories)

  return (
    <div>
      <Dnt />
      {(categories &&
        categories.map((category) => {
          return (
            <div>
              <Link to={`/catde/${category.strCategory}`}>
                {category.idCategory % 2 == 1 ? (
                  // ini kalau ganjil
                  <p
                    style={{ fontWeight: "bold" }}
                    className="textganjil"
                    key={category.idCategory}
                  >
                    {category.strCategory}
                  </p>
                ) : (
                  // ini kalau genap
                  <p
                    style={{ fontStyle: "italic" }}
                    className="textgenap"
                    key={category.idCategory}
                  >
                    {category.strCategory}
                  </p>
                )}
              </Link>
              {/* <p key={category.idCategory}>{category.strCategory}</p> */}
              <img src={category.strCategoryThumb} />
            </div>
          );
        })) ||
        "Loading. . ."}
    </div>
  );
};

export default Categories;
