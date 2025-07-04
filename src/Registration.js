import { useEffect, useState } from "react";

export default function Registration() {
  const [user, setUser] = useEffect();

  function createUser(user) {
    setUser(user);
  }

  return (
    <div className="registration_container">
      <Form Onsubmission={createUser} />
    </div>
  );
}

function Form({ Onsubmission }) {
  const [userEmail, setUserEmail] = useState();
  const [userPhoneNum, setUserPhoneNum] = useState();

  function handleOnsubmit(e) {
    console.log("reacgede");
    e.preventDefault();

    if (!userEmail || !userPhoneNum) return;

    const createUser = {
      userEmail,
      userPhoneNum,
    };

    Onsubmission(createUser);
  }
  return (
    <form className="regis_form" onSubmit={handleOnsubmit}>
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
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <button type="submit">submit</button>
    </form>
  );
}
