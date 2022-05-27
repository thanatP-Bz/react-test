import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { initialState } from "../context/appContext";
import FormRow from "../components/FormRow";

const Form = () => {
  const { displayAlert, valueAdded } = useAppContext();

  const [values, setValues] = useState(initialState);

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let { firstName } = values;

    if (firstName) {
      const user = { firstName, id: Math.random() };
      valueAdded(user);
      setValues(initialState);
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
        <button type="submit">add</button>
      </form>
      {values.people.map((item) => {
        const { firstName, id } = item;
        return (
          <div key={id}>
            <h2>{firstName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
