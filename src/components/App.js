// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../Registration";
import Navigation from "./Navigation";
import Productimg from "./Productimg";
// import useProduct from "./useProduct";

export default function App() {
  return (
    <div>
      <Navigation />
      <Productimg />
      {/* <BrowserRouter>
        <Routes>
          {/* <Registration /> */}
      {/* <Route path="hel" element={<Productimg />} />
          <Route path="hel" element={<Registration />} />
          <Navigation />
          <Productimg />
        </Routes> */}
      {/* </BrowserRouter>  */}
    </div>
  );
}
