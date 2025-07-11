// import Registration from "../Registration";
// import Navigation from "./Navigation";
import Productimg from "./Productimg";
// import useProduct from "./useProduct";
// import Prom from "./prom";

export default function App() {
  // const { clothes } = useProduct();

  return (
    <div className="">
      {/* <Registration /> */}
      {/* <Navigation /> */}
      {/* <Prom /> */}
      <Productimg />
      {/* {clothes?.map((clothe) => (
        <CreateProduct img={clothe.image} description={clothe.description} />
      ))} */}
    </div>
  );
}

function CreateProduct({ img, description }) {
  console.log(description);
  return (
    <div>
      <img src={img} alt={description} />
    </div>
  );
}
