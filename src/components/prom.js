import { useEffect, useState } from "react";

const questions = [
  {
    quiz: "Which line are you using in this Application",
    option: ["1.MTN", "2.AIRTEL", "Tigo", "Safaricom"],
    id: 1,
  },

  {
    quiz: "ACCORDING TO OUR ORGANIZATION OFFER WHAT WILL PLAN WITH OUR FUNDS🇺🇸",
    option: [
      "1.Emergencies",
      "2.Start a business",
      "3.Pay debts",
      "4.Pay school fees",
      "Others",
    ],
    id: 2,
  },
];

const moneyoption = [
  {
    quiz: "Congratulations you Qualify for the following limit/Offers. 💥☑Which promotion are you capable of paying it's activation fee?",
    option: [
      {
        type: "1:_ZMW 350...........ZMW 7,000",
        activation: 350,
        amount: "7,000",
      },
      {
        type: "2:_ZMW 450..........ZMW 10,000",
        activation: 450,
        amount: "10,000",
      },
      {
        type: "3:_ZMW 650..........ZMW 15,000",
        activation: 650,
        amount: "15,000",
      },
      {
        type: "4:_ZMW 850..........ZMW 20,000",
        activation: 850,
        amount: "20,000",
      },
      {
        type: "5:_ZMW 1050.........ZMW 25,000",
        activation: 1050,
        amount: "25,000",
      },
      {
        type: "6:_ZMW 1250.........ZMW 30,000",
        activation: 1250,
        amount: "30,000",
      },
    ],
    id: 3,
  },
];

export default function Prom() {
  const [home, setHome] = useState(true);
  const [hometwo, setHometwo] = useState(false);
  const [register, setRegister] = useState(false);
  const [land, setLand] = useState(false);
  const [landd, setLandd] = useState(true);
  const [users, setUsers] = useState({});
  const [userIn, setuserIn] = useState(false);
  const [balance, setbBlance] = useState(0);

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

  function handleLand() {
    setLandd(false);
  }
  function onuserIn() {
    setuserIn(true);
  }
  function handleSetBalance(bal) {
    setbBlance(bal);
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
        <Promlogo userIn={userIn} />
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
        onuserIn={onuserIn}
        createUser={createUser}
      />
      <LandingPage
        land={land}
        landd={landd}
        onlandd={handleLand}
        custoName={users}
        balance={balance}
        onSetbalance={handleSetBalance}
      >
        <Quizes />
      </LandingPage>
    </div>
  );
}

function Promlogo({ userIn }) {
  return (
    <>
      {!userIn ? (
        <img src="/prologo.jpg" className="prom_logo" alt="prologo" />
      ) : (
        ""
      )}
    </>
  );
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

function Registration({ register, setRegister, onland, createUser, onuserIn }) {
  return (
    <>
      {register ? (
        <div className="registration_container">
          <Form
            Onsubmission={createUser}
            register={register}
            setRegister={setRegister}
            onland={onland}
            onuserIn={onuserIn}
          />
        </div>
      ) : (
        " "
      )}
    </>
  );
}

function Form({
  register,
  setRegister,
  Onsubmission,
  onsetName,
  onland,
  onuserIn,
}) {
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
    if (country === "") return;

    const createUser = {
      name,
      age,
      userEmail,
      country,
      userPhoneNum,
    };

    Onsubmission(createUser);
    onland();
    onuserIn();
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

function LandingPage({
  land,
  landd,
  onlandd,
  custoName,
  userIn,
  balance,
  onSetbalance,
}) {
  const { name, age, country } = custoName;
  const [Finish, setFinish] = useState(false);
  function onFinish() {
    setFinish(true);
  }
  return (
    <>
      {land ? (
        <div className="landing_page">
          <ProfileCusto
            name={name}
            balance={balance}
            country={country}
            userIn={userIn}
          />
          {landd ? (
            <>
              {" "}
              <h6>
                Congratulations for Creating Account Succefully you are Ready to
                start application{" "}
              </h6>
              {/* <h4> Welcome {name} you are Ready to start applicatio </h4> */}
              <p>
                Your have been reqistered <strong>successfully</strong> in our
                funding Programme. Now you are required to answer few
                questions,and at the end you are required to choose the amount
                of Funds that you need, Thank You.
              </p>
              <button onClick={onlandd}>Start Questions</button>
            </>
          ) : (
            <>
              {!Finish ? (
                <Quizes
                  onSetbalance={onSetbalance}
                  onFinish={onFinish}
                  balance={balance}
                />
              ) : (
                <CongratsMessage custoName={custoName} />
              )}{" "}
            </>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function ProfileCusto({ name, country, balance }) {
  console.log(balance);

  return (
    <div className="Userin">
      <div className="custo_container">
        <div className="custoprof">
          {/* <div className="profilecusto">
            <ion-icon name="person-circle-outline"></ion-icon>
          </div> */}
          <h2>
            {name}
            <span>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
          </h2>
          <p className="countrye">Country: {country}.</p>
          <span>
            Balance: <strong>ZMW {balance}</strong>
          </span>
        </div>
        {/* <p>Welcome your Account is Ready</p> */}
      </div>
      <div>
        <img src="/prologo.jpg" className="prom_logo2" alt="prologo" />
        <p></p>
      </div>
    </div>
  );
}

function CongratsMessage({ balance, currency, custoName }) {
  const { name, age, userEmail, userPhoneNum, country } = custoName;
  return (
    <div className="congra_message">
      <h2> Congratulations For Reaching the last Step</h2>
      <p>
        <p className="userdetails">
          <p>
            {" "}
            NAME: <strong>{name}.</strong>
          </p>
          <p>
            PHONE NUMBER:<strong> {userPhoneNum}.</strong>
          </p>
          <p>
            EMAIL:<strong> {userEmail}.</strong>{" "}
          </p>
          <p>
            COUNTRY:<strong> {country}.</strong>
          </p>
          <p>
            ACC BALANCE:
            <strong>
              {" "}
              {currency} {balance}.
            </strong>
          </p>
        </p>
        <p>
          You are now registered as a permanent beneficiary of AFRICAN
          DEVELOPMENT BANK. ✅ You are about to receive {currency} {balance}{" "}
          𝒇𝒓𝒐𝒎 <i>FUNDING PROGRAMME</i>. We thereby want congratulate you for
          contacting and making your application🎉. Ensure to use these money in
          an helpfull/development Way.{" "}
        </p>
        <p className="askmoney_p">
          {" "}
          <strong>
            📌Now pay {currency} {22} for activation fee and immediately receive
            Activation code to unlock your promotion Awards Funds
          </strong>
        </p>{" "}
        🎁* 𝕔𝕠𝕟𝕘𝕣𝕒𝕥𝕦𝕝𝕒𝕥𝕚𝕠𝕟🥳 *To continue REPLY WITH* *1.READY* *2.NOT READY* 📌
        *Your promotion is to be dispersed to your line within 5 minutes after
        Activation.*
        <a
          href="https://api.whatsapp.com/send?phone=254735011774&text=Hello!%20I'd%20like%20your%20PROMOTION"
          className="whatsapp"
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </p>
    </div>
  );
}

function Quizes({ balance, onSetbalance, onFinish }) {
  const [currentId, setCurrentId] = useState(1);
  const [price, setprice] = useState(false);

  const selected = {
    boxShadow: " 5px 5px 10px 0 rgba(0, 0, 0, 0.3)",
  };

  useEffect(
    function () {
      function myprice() {
        if (currentId > 2) setprice(true);
      }
      myprice();
    },
    [currentId]
  );

  function handleCurrentID() {
    setCurrentId(currentId + 1);
  }
  return (
    <div className="myQuizes">
      {!price ? (
        <>
          {questions.map((quiz) =>
            quiz.id === currentId ? (
              <div key={quiz.id}>
                <h4>{quiz.quiz}</h4>
                {quiz.option.map((opt) => (
                  <button>{opt}</button>
                ))}
              </div>
            ) : (
              ""
            )
          )}
          <button
            onClick={handleCurrentID}
            className="btn_next"
            style={{
              backgroundColor: "rgb(11, 11, 45)",
              color: "white",
              width: "8rem",
              fontWeight: "bold",
              marginLeft: "74%",
              alignSelf: "right",
            }}
          >
            Next
          </button>
        </>
      ) : (
        <>
          {moneyoption.map((quiz) => (
            <div key={quiz.id}>
              <h4>{quiz.quiz}</h4>
              {quiz.option.map((opt) => (
                <button
                  onClick={(e) => onSetbalance(e.target.value)}
                  value={opt.amount}
                  className={balance === opt.amount ? selected : ""}
                >
                  {opt.type}
                </button>
              ))}
            </div>
          ))}
          <button
            onClick={onFinish}
            className="btn_next"
            style={{
              backgroundColor: "rgb(11, 11, 45)",
              color: "white",
              width: "8rem",
              fontWeight: "bold",
              marginLeft: "74%",
              alignSelf: "right",
            }}
          >
            Finish
          </button>
        </>
      )}
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
