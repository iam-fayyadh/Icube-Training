import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categorydetail = () => {
  let params = useParams();
  const [detail, setDetail] = useState(null);

  const fetching = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
    );
    const result = await data.json();
    // await console.log(result);
    setDetail(result.meals);
    // console.log(result.categories)
  };

  useEffect(() => {
    fetching();
  }, []);

  console.log(detail);

  return (
    <>
      <div>
        <h2 className="title">Search result for "{params.id}"</h2>
        {detail &&
          detail.map((meal) => {
            return (
              <>
                <h3 key={meal.idMeal}>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Categorydetail;
