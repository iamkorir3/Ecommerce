import { useState } from "react";

export default function Registration() {
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
      <RegistrationLogo />
      <form className="regis_form" onSubmit={handleOnsubmit}>
        <label>Email Address</label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <p className={`error_p ${noData ? "" : "err"}`}>Email valid email</p>

        <label>Phone number</label>
        <input
          type="country"
          name="phoneNUmber"
          value={userPhoneNum}
          onChange={(e) => setUserPhoneNum(e.target.value)}
        />
        {userPhoneNum.length > 1 && userPhoneNum.length < 11 ? (
          <p className="error_p">invalid phone number</p>
        ) : (
          <p className={`error_p ${noNumber ? "" : "err"}`}>
            {userPhoneNum < 11
              ? "invalid phone number"
              : " phone number is required"}
          </p>
        )}

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
