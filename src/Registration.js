import { useEffect } from "react";

export default function Registration() {
  const [userEmail, setUserEmail] = useEffect();
  const [userPhoneNum, setUserPhoneNum] = useEffect();

  function handleOnsubmit(email) {
    console.log("reacgede");
    setUserEmail(email);
  }

  return (
    <div className="registration_container">
      <Form
        userEmail={userEmail}
        Onsubmission={handleOnsubmit}
        userPhoneNum={userPhoneNum}
      />
    </div>
  );
}

function Form({ userEmail, userPhoneNum, Onsubmission }) {
  return (
    <form className="regis_form" onSubmit={Onsubmission}>
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
