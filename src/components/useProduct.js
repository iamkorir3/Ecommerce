import { useState, useEffect } from "react";

export default function useProduct({ img, description }) {
  const [clothes, setClothes] = useState([]);

  useEffect(function () {
    async function getClothe() {
      fetch("https://fakestoreapi.com/products/1")
        .then((res) => res.json())
        .then((json) => setClothes(json));
      // .then(setClothes(res.Search || [initialclothes]));
    }
    getClothe();
  }, []);

  //   useEffect(function () {
  //     async function getClothes() {
  //       try {
  //         const res = await fetch("https://fakestoreapi.com/products/1");
  //         if (!res.ok) throw new Error("something went wrong");
  //         const data = await res.json();

  //         setClothes(data || []);
  //       } catch (err) {
  //         console.log(err.message);
  //       }
  //     }
  //     getClothes();
  //   }, []);
  console.log(clothes);
  return { clothes };
}
