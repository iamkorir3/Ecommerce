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
  const [clothes, setClothes] = useState([initialclothes]);

  //   useEffect(function () {
  //     async function getClothe() {
  //       fetch("https://fakestoreapi.com/products/1")
  //         .then((res) => res.json())
  //         .then((json) => setClothes(json));
  //       // .then(setClothes(res.Search || [initialclothes]));
  //     }
  //     getClothe();
  //   }, []);

  useEffect(function () {
    async function getClothes() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/1");
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
    <div>
      {clothes.map((clothe) => (
        <div>
          <img src={clothe.image} alt="meinc" />
          <p>{clothe.description}</p>
        </div>
      ))}
    </div>
  );
}
