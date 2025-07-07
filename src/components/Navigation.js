import { useState } from "react";

export default function Navigation() {
  const [searchQerry, setSearchQerry] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [navMouseEvents, setNavMouseEvents] = useState(false);

  function handleNavOpen() {
    setNavOpen(navOpen === true ? false : true);
  }
  function handleNavOpenEnter() {
    setNavMouseEvents(true);
  }
  function handleNavOpenLeave() {
    setNavMouseEvents(false);
  }

  function handleSetQuerry(querry) {
    setSearchQerry(querry);
  }

  return (
    <>
      <div className="nav_container">
        <button
          className="nav_btn"
          onClick={handleNavOpen}
          onMouseEnter={handleNavOpenEnter}
          onMouseLeave={handleNavOpenLeave}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <Logo />
        <SearchBar searchQerry={searchQerry} onSetQuerry={handleSetQuerry} />
        <Profile />
        <Cart />
      </div>
      <SideMenu navOpen={navOpen} navMouseEvents={navMouseEvents} />
    </>
  );
}

function Logo() {
  return (
    <div>
      <h2>ECOMMERCE⭐</h2>
    </div>
  );
}

function SearchBar({ searchQerry, onSetQuerry }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="men's clothings"
        value={searchQerry}
        onChange={(e) => onSetQuerry(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <button className="nav_btn">
        {" "}
        <ion-icon name="person-outline"></ion-icon> <span>Account</span>
      </button>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <button className="nav_btn">
        <ion-icon name="cart-outline"></ion-icon> <span>Cart</span>
      </button>
    </div>
  );
}

function SideMenu({ navOpen, navMouseEvents }) {
  return (
    <>
      {navOpen || navMouseEvents ? (
        <div className="menu">
          <button>jkcfvvnv</button>
          <button>Korir btn</button>
          <button>Korir btn</button>
          <button>Korir btn</button>
          <button>Korir btn</button>
          <button>Korir btn</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
