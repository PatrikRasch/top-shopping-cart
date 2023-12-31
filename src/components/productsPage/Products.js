import "./products.css";
import Product from "./Product";

import shirt1 from "./../../images/clothing/shirt1.webp";
import shirt2 from "./../../images/clothing/shirt2.webp";
import shirt3 from "./../../images/clothing/shirt3.webp";
import shirt4 from "./../../images/clothing/shirt4.webp";
import shirt5 from "./../../images/clothing/shirt5.webp";
import shirt6 from "./../../images/clothing/shirt6.webp";
import shirt7 from "./../../images/clothing/shirt7.webp";
import shirt11 from "./../../images/clothing/shirt11.webp";
import shirt15 from "./../../images/clothing/shirt15.webp";
import shirt16 from "./../../images/clothing/shirt16.webp";
import tshirt1 from "./../../images/clothing/tshirt1.webp";
import tshirt2 from "./../../images/clothing/tshirt2.webp";
import jacket1 from "./../../images/clothing/jacket1.webp";
import jacket3 from "./../../images/clothing/jacket3.webp";
import jacket4 from "./../../images/clothing/jacket4.webp";
import hoodie1 from "./../../images/clothing/hoodie1.webp";
import polo1 from "./../../images/clothing/polo1.webp";
import shoes1 from "./../../images/clothing/shoes1.webp";
import shoes2 from "./../../images/clothing/shoes2.webp";
import shoes3 from "./../../images/clothing/shoes3.webp";

const Products = () => {
  return (
    <div>
      <div className="all-products-background">
        <div className="all-products">
          <Product image={shirt7} title={"White Cotton Polo Shirt"} price={159.99} />
          <Product image={shirt2} title={"Light Blue Signature Twill Dress Shirt "} price={79.99} />
          <Product image={jacket4} title={"Black Leather Jacket"} price={99.99} />
          <Product image={shirt1} title={"White Four-Way Stretch Dress Shirt"} price={99.99} />
          <Product image={shoes3} title={"Black Formal Leather Shoes"} price={99.5} />
          <Product image={polo1} title={"Black Cotton Polo Shirt"} price={99.99} />
          <Product image={shirt3} title={"Gray Business Casual Stretch Shirt"} price={49.99} />
          <Product image={shoes1} title={"Brown Formal Leather Shoes"} price={99.99} />
          <Product image={tshirt1} title={"Grey Premium Stretch T-shirt"} price={99.5} />
          <Product image={shirt6} title={"Black Premium Stretch Dress Shirt"} price={99.99} />
          <Product image={shirt5} title={"White Linen Shirt - Short Sleeve"} price={109.5} />
          <Product image={shirt11} title={"Blue Wrinkle Free Cotton Linen Shirt"} price={69.5} />
          <Product image={hoodie1} title={"Black Casual Hoodie"} price={99.99} />
          <Product image={shirt15} title={"Shirt Bundle of 6"} price={99} />
          <Product image={shirt16} title={"Light Blue Denim Shirt"} price={99.99} />
          <Product image={shoes2} title={"Blue Business Casual Fabric Shoes"} price={99.99} />
          <Product image={tshirt2} title={"Black Premium Cotton T-shirt"} price={99.99} />
          <Product image={jacket1} title={"Green Winter Casual Overcoat Jacket"} price={99.99} />
          <Product image={shirt4} title={"White Stretch Twill Shirt"} price={79.99} />
          <Product image={jacket3} title={"Black Formal Button Up Jacket"} price={99.5} />
        </div>
      </div>
    </div>
  );
};

export default Products;
