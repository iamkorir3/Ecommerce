import { useState } from "react";

export default function Prom() {
  const [home, setHome] = useState(true);
  const [hometwo, setHometwo] = useState(false);

  function handleSetHome() {
    setHome(false);
    setHometwo(false);
  }

  return (
    <div className="prom-container">
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
          <h2 className="heading">AFRICAN DEV'T FUNDS</h2>
          <p style={{ color: "rgb(68, 183, 55)" }}>
            Apply now, Receive Funds now
          </p>
        </div>
        {home ? (
          <div>
            <div className="promtext">
              <p>
                The African Development Fund (ADF) contributes to the promotion
                of economic and social development in least developed African
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
      </div>

      <ChoosingOption home={home} />
      <Registration home={home} />
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
        <div className="home2">
          <p>Millions of People have already received This Funds</p>
          <span>Note that this Are not Loan they are Donations/Free</span>
          <h5>Create or Login If You have an Account</h5>
          <button className="btn_apply">Create Account</button>
          <button className="btn_apply">Login to your Account</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function Registration() {
  const [users, setUsers] = useState([]);

  function createUser(user) {
    setUsers((user) => [...users, user]);
    console.log(user.userEmail);
  }

  return (
    <div className="registration_container">
      <Form Onsubmission={createUser} />
    </div>
  );
}

function Form({ Onsubmission }) {
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [noData, setnoData] = useState(false);
  const [noNumber, setnoNumber] = useState(false);

  // function hi() {
  //   userPhoneNum.length > 0 ? setnoNumber(true) : setnoNumber(false);
  // }

  function handleOnsubmit(e) {
    e.preventDefault();

    if (!userEmail) {
      setnoData(true);
    }
    if (!userPhoneNum) {
      setnoNumber(true);

      return;
    }

    const createUser = {
      userEmail,
      userPhoneNum,
    };

    Onsubmission(createUser);
  }
  return (
    <>
      {/* <RegistrationLogo /> */}
      <form className="regis_form" onSubmit={handleOnsubmit}>
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Phone number</label>
        <input
          type="country"
          name="phoneNUmber"
          value={userPhoneNum}
          onChange={(e) => setUserPhoneNum(e.target.value)}
        />
        <label>Email </label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <p className={`error_p ${noData ? "" : "err"}`}>Email valid email</p>

        {userPhoneNum.length > 1 && userPhoneNum.length < 11 ? (
          <p className="error_p">invalid phone number</p>
        ) : (
          <p className={`error_p ${noNumber ? "" : "err"}`}>
            {userPhoneNum < 11
              ? "invalid phone number"
              : " phone number is required"}
          </p>
        )}
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option>Zambia</option>
          <option>Kenya</option>
          <option>Tanzania</option>
          <option>Uganda</option>
        </select>
        <button type="submit">Continue</button>
      </form>
    </>
  );
}

function RegistrationLogo() {
  return (
    <>
      <div className="logo">
        <img src="/korir.jpg" className="logo-img" alt="korir" />
      </div>
      <h3 className="logo_heading">Create account at korir Ecommerce</h3>
    </>
  );
}
