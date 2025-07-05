export default function Navigation() {
  return (
    <div className="nav_container">
      <button className="nav_btn">
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <Logo />
      <SearchBar />
      <Profile />
      <Cart />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h2>ECOMMERCE⭐</h2>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search">
      <input type="text" placeholder="men's clothings" value={null} />
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
