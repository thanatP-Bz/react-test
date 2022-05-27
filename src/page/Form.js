import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import FormRow from "../components/FormRow";

const initialState = {
  firstName: "",
  showAlert: false,
  alertText: "",
};

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
      valueAdded();
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
    </div>
  );
};

export default Form;
