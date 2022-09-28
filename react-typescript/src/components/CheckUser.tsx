import React, { useState } from "react";

const users = [{ name: "Mikes" }, { name: "James" }, { name: "Linda" }];

const CheckUser = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string } | undefined>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClickHandler = () => {
    let foundUser = users.find((user) => {
      return user.name === name;
    });

    setName("");

    setUser(foundUser);
  };

  return (
    <div>
      <h2>find name</h2>

      <input type="text" value={name} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>find</button>

      <div>{user?.name}</div>
    </div>
  );
};

export default CheckUser;
