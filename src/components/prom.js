export default function Prom() {
  return (
    <div className="prom-container">
      <div className="top_nav">
        <button className="nav_btn">
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="nav_btn">
          {" "}
          <ion-icon name="person-outline"></ion-icon> <span>Account</span>
        </button>
      </div>
      <Promlogo />
      <div className="header">
        <h2 className="heading">AFRICAN DEV'T FUNDS</h2>
        <p>Apply now, Receive Funds now</p>
      </div>

      <div>
        <p></p>
      </div>
    </div>
  );
}

function Promlogo() {
  return <img src="/prologo.jpg" className="prom_logo" alt="prologo" />;
}
