// import Registration from "../Registration";
// import Navigation from "./Navigation";
import Productimg from "./Productimg";
import useProduct from "./useProduct";
// import Prom from "./prom";

export default function App() {
  const { clothes } = useProduct();
  return (
    <div className="">
      {/* <Registration /> */}
      {/* <Navigation /> */}
      {/* <Prom /> */}
      <Productimg />
      <CreateProduct />
    </div>
  );
}

function CreateProduct() {
  return <div></div>;
}
