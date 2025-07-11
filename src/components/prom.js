import { useState } from "react";

export default function Prom() {
  const [home, setHome] = useState(true);
  const [hometwo, setHometwo] = useState(false);

  function handleSetHome() {
    setHome(false);
    setHometwo(true);
  }

  return (
    <div className="prom-container">
      {home ? (
        <div>
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
            <h2 className="heading">{home ? "home" : ""}AFRICAN DEV'T FUNDS</h2>
            <p>Apply now, Receive Funds now</p>
          </div>

          <div className="promtext">
            <p>
              The African Development Fund (ADF) contributes to the promotion of
              economic and social development in least developed African
              countries by providing concessional funding for projects and
              programs, as well as technical assistance for studies and
              capacity-building activities.
            </p>
            <img src="/prom2.jpg" alt="pron" />
          </div>
          <button className="btn_apply" onClick={handleSetHome}>
            Apply Now
          </button>
        </div>
      ) : (
        ""
      )}
      <ChoosingOption home={home} />
    </div>
  );
}

function Promlogo() {
  return <img src="/prologo.jpg" className="prom_logo" alt="prologo" />;
}

function ChoosingOption({ home }) {
  return (
    <div>
      {!home ? (
        <div>
          <h5>
            Create Account with us but if you already have an Account then Login
          </h5>
          <button className="btn_apply">Create Account</button>
          <button className="btn_apply">Login to your Account</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
