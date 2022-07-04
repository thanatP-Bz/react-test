import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import FormRow from "../components/FormRow";

const Form = () => {
  const { people, displayAlert, valueAdded } = useAppContext();

  const [values, setValues] = useState({});

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (values.firstName) {
      valueAdded({ ...values, id: Math.random() });
      setValues({});
    } else {
      displayAlert();
    }
  };

  return (
    <div>
      <FormRow />
      <form onSubmit={submitHandler}>
        <label htmlFor="">name</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={onChangeHandler}
        />

        <button type="submit">add</button>
      </form>
      {people.map((item) => {
        const { firstName, lastName, id } = item;
        return (
          <div key={id}>
            <h2>
              {firstName} {lastName}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
