import { useState } from "react";

const questions = [
  {
    quiz: "Which line are you using in this Application",
    option: ["1.MTN", "2.AIRTEL"],
    id: 1,
  },
  {
    quiz: "Which line are you using in this Application",
    option: ["1.MTN", "2.AIRTEL"],
    id: 2,
  },
  {
    quiz: "Which line are you using in this Application",
    option: ["1.MTN", "2.AIRTEL"],
    id: 3,
  },
];

export default function Prom() {
  const [home, setHome] = useState(true);
  const [hometwo, setHometwo] = useState(false);
  const [register, setRegister] = useState(false);
  const [land, setLand] = useState(false);
  const [users, setUsers] = useState({});

  function createUser(user) {
    setUsers(user);
    // setUsers((user) => [...users, user]);
  }
  // console.log(users.userEmail);

  function handleSetHome() {
    setHome(false);
    setHometwo(true);
  }

  function handleRegistration() {
    setRegister(true);
    setHometwo(false);
  }

  function handleLnding() {
    setRegister(false);
    setLand(true);
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

      <ChoosingOption home={hometwo} onregister={handleRegistration} />
      <Registration
        register={register}
        setRegister={setRegister}
        onland={handleLnding}
        createUser={createUser}
      />
      <LandingPage land={land} custoName={users} />
    </div>
  );
}

function Promlogo() {
  return <img src="/prologo.jpg" className="prom_logo" alt="prologo" />;
}

function ChoosingOption({ home, onregister }) {
  return (
    <div>
      {home ? (
        <div className="home2">
          <p>Millions of People have already received This Funds</p>
          <span>Note that this Are not Loan they are Donations/Free</span>
          <h5>Create or Login If You have an Account</h5>
          <button className="btn_apply" onClick={onregister}>
            Create Account
          </button>
          <button className="btn_apply">Login to your Account</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function Registration({ register, setRegister, onland, createUser }) {
  return (
    <>
      {register ? (
        <div className="registration_container">
          <Form
            Onsubmission={createUser}
            register={register}
            setRegister={setRegister}
            onland={onland}
          />
        </div>
      ) : (
        " "
      )}
    </>
  );
}

function Form({ register, setRegister, Onsubmission, onsetName, onland }) {
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
      name,
      age,
      userEmail,
      country,
      userPhoneNum,
    };

    Onsubmission(createUser);
    onland();
  }

  return (
    <>
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

        <select
          className="select_country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="Zambia">Zambia</option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Uganda">Uganda</option>
        </select>
        <button type="submit">Continue</button>
      </form>
    </>
  );
}

function LandingPage({ land, custoName }) {
  const { name, age, country } = custoName;
  // console.log(name);
  return (
    <>
      {land ? (
        <div className="landing_page">
          <ProfileCusto name={name} country={country} />
          <h6>
            Congratulations for Creating Account Succefully you are Ready to
            start application{" "}
          </h6>
          {/* <h4> Welcome {name} you are Ready to start applicatio </h4> */}
          <p>
            Your have been reqistered <strong>successfully</strong> in our
            funding Programme. Now you are required to answer few questions,and
            at the end you are required to choose the amount of Funds that you
            need, Thank You.
          </p>
          <button>Start Questions</button>
          <Quizes />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function ProfileCusto({ name, country }) {
  return (
    <div className="custo_container">
      <div className="custoprof">
        <div className="profilecusto">
          <ion-icon name="person-circle-outline"></ion-icon>
        </div>
        <h2>
          {name} , Country: {country}.
          <span>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </span>
        </h2>
      </div>
      <p>Welcome your Account is Ready</p>
    </div>
  );
}

function Quizes() {
  return (
    <div>
      {questions.map((quiz) => (
        <div key={quiz.id}>
          {console.log(quiz)}; hello
          <h4>{quiz.question}</h4>
          {quiz.option.map((opt) => (
            <button>{opt}</button>
          ))}
        </div>
      ))}
    </div>
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
