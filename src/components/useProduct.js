import { useEffect, useState } from "react";
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

  //   const { img, description } = clothes;
  return { clothes };
  //    (
  //     <div className="products">
  //       {clothes.map((clothe) => (
  //         <div key={clothe.id}>
  //           <h4>{clothe.title}</h4>
  //           <img src={clothe.image} className="imagesize" alt="meinc" />
  //           <button>
  //             <ion-icon name="heart-outline"></ion-icon>
  //           </button>
  //           <span>
  //             {clothe.rating.rate} from {clothe.rating.count} people
  //           </span>
  //           <span>{clothe.price} USD</span>
  //           <p className="product_description">{clothe.description}</p>
  //           <button>Add to Cart</button>
  //         </div>
  //       ))}
  //     </div>
  //   );
}
