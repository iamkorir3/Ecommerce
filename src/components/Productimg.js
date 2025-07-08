import { useEffect } from "react";

export default function Productimg() {
  const [clothes, setClothes] = useEffect([]);

  useEffect(function () {
    async function getClothes(params) {
      fetch("https://fakestoreapi.com/")
        .then((res) => res.json())
        .then((data) => setClothes(data));
    }
    getClothes();
  }, []);
  console.log(clothes);
  return <div>{clothes}</div>;
}
