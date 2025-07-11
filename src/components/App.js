// import Registration from "../Registration";
import Navigation from "./Navigation";
import Productimg from "./Productimg";
// import useProduct from "./useProduct";
// import Prom from "./prom";

export default function App() {
  return (
    <div className="">
      {/* <Registration /> */}
      <Navigation />
      {/* <Prom /> */}
      <Productimg />
    </div>
  );
}

// function CreateProduct({ clothe }) {
//   const { img, description } = clothe;
//   console.log(description);
//   return (
//     <div>
//       <img src={img} alt={description} />
//     </div>
//   );
// }
