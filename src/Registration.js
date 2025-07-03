import { useEffect } from "react";

export default function Registration() {
  const [userEmail, setUserEmail] = useEffect();
  const [userPhoneNum, setUserPhoneNum] = useEffect();

  function handleUserEmail(email) {
    console.log("reacgede");
    setUserEmail(email);
  }

  function handleUserPhoneNum(number) {
    console.log("reacgede");
    setUserEmail(number);
  }

  return (
    <div className="registration_container">
      <Form
        userEmail={userEmail}
        setUserEmail={handleUserEmail}
        userPhoneNum={userPhoneNum}
        setUserPhoneNum={handleUserPhoneNum}
      />
    </div>
  );
}

function Form({ userEmail, setUserEmail, userPhoneNum, setUserPhoneNum }) {
  return (
    <form className="regis_form">
      <label for email>
        Enter your email
      </label>
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <label for phoneNUmber>
        Enter your Phone number
      </label>
      <input
        type="number"
        name="phoneNUmber"
        value={userPhoneNum}
        onChange={(e) => setUserPhoneNum(e.target.value)}
      />

      <button type="submit">submit</button>
    </form>
  );
}
