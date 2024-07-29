import React from "react";

const Product = () => {
  var objProd = [
    { name: "prod1" ,price :500},
    { name: "prod2" ,price :600},
    { name: "prod3" ,price :700},
    { name: "prod4" ,price :800},
  ];
  return (
    <>
      {objProd.map((item) => (
        <p>
          {item.name} : {item.price}
        </p>
      ))}
    </>
  );
};

export default Product;
