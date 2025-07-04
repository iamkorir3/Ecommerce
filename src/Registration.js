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

  function handleOnsubmit(e) {
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
      <label>Enter your email</label>
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <label>Enter your Phone number</label>
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
