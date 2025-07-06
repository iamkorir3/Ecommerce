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

      <div className="promtext">
        <p>
          The African Development Fund (ADF) contributes to the promotion of
          economic and social development in least developed African countries
          by providing concessional funding for projects and programs, as well
          as technical assistance for studies and capacity-building activities.
        </p>
        <img src="/prom2.jpg" alt="pron" />
      </div>
      <button className="btn_apply">Apply Now</button>
    </div>
  );
}

function Promlogo() {
  return <img src="/prologo.jpg" className="prom_logo" alt="prologo" />;
}
