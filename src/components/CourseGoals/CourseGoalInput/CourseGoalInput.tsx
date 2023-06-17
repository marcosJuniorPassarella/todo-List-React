import { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseGoalInput.css";

const CourseInput = (props: { onAddGoal: (goal: string) => void }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    setEnteredValue(eventValue);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Goals to be achieved</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;