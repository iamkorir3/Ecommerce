import { useEffect, useState } from "react";
import StarRating from "./StarRating";
const initialclothes = [
  {
    image: "src",
    description: "fncldkvl",
    gender: "men",
    size: "24",
    key: 1,
  },
  {
    image: "src",
    description: "home",
    gender: "men",
    size: "24",
    key: 2,
  },
];

export default function Productimg() {
  const [clothes, setClothes] = useState([]);

  useEffect(function () {
    async function getClothes() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("something went wrong");
        const data = await res.json();

        setClothes(data || []);
      } catch (err) {
        console.log(err.message);
      }
    }
    getClothes();
  }, []);
  console.log(clothes);
  //   const { img, description } = clothes;
  return (
    <div className="container_prod">
      <div className="products">
        {clothes.map((clothe) => (
          <div key={clothe.id} className="product">
            <h4>{clothe.title}</h4>
            <img src={clothe.image} className="imagesize" alt="meinc" />
            <button className="like">
              <ion-icon name="heart-outline"></ion-icon>
            </button>
            <span className="ratings">
              <strong> {clothe.rating.rate} ⭐</strong> from{" "}
              {clothe.rating.count} people
            </span>
            <span className="price">{clothe.price} USD</span>
            {/* <p className="product_description">{clothe.description}</p> */}
            <StarRating />
            <span style={{ opacity: "0" }}>height</span>
            <button className="btn_addtocart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
