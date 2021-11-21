import * as React from "react";
import { addNewUser, resetList } from "../../Redux/Reducers";
import { useDispatch } from "react-redux";
import "./Form.scss";

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    const name = document.querySelector(".input_name") as HTMLInputElement;
    const age = document.querySelector(".input_age") as HTMLInputElement;
    dispatch(addNewUser({ name: name.value, age: age.value }));
  };
  const reset = () => {
    dispatch(resetList());
  };
  return (
    <div className="form-wrapper">
      <input
        type="text"
        placeholder="Name"
        className="form-input input_name"
        data-testid="test-name"
      />
      <input
        type="number"
        placeholder="Age"
        className="form-input input_age"
        data-testid="test-age"
      />
      <button
        className="submit_btn"
        data-testid="test-submit"
        onClick={clickHandler}
      >
        Create user!
      </button>
      <button className="reset_btn" onClick={reset} data-testid="test-reset">
        Reset
      </button>
    </div>
  );
};

export default Form;
