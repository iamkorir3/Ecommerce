import { useEffect } from "react";

export default function Registration() {
  const [userEmail, setUserEmail] = useEffect();
  const [userPhoneNum, setUserPhoneNum] = useEffect();

  function handleOnsubmit(e) {
    console.log("reacgede");
    e.preventDefault();

    if (!userEmail || !userPhoneNum) return;

    const createUser = {
      userEmail,
      userPhoneNum,
    };
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
      <input type="email" value={userEmail} />

      <label for phoneNUmber>
        Enter your Phone number
      </label>
      <input type="number" name="phoneNUmber" value={userPhoneNum} />

      <button type="submit">submit</button>
    </form>
  );
}
