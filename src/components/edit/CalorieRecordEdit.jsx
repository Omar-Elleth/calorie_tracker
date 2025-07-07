import { useState } from "react";
import styles from "./CalorieRecordEdit.module.css";

function CalorieRecordEdit(props) {
  const DEAFULT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: 0,
  };
  const [mealRecord, setMealRecord] = useState(DEAFULT_VALUE);

  const onDateChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  };
  const onMealChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };
  const onContentChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
  };
  const onCaloriesChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      calories: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setMealRecord(DEAFULT_VALUE);
  };

  const onCancelHandler = () => {
    setMealRecord(DEAFULT_VALUE);
    props.onCancel();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="date">Date : </label>
      <input
        type="date"
        id="date"
        value={mealRecord.date}
        onChange={onDateChangeHandler}
      />
      <label htmlFor="meal">Meal : </label>
      <select id="meal" value={mealRecord.meal} onChange={onMealChangeHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>
      <label htmlFor="content">Content : </label>
      <input
        type="text"
        id="content"
        value={mealRecord.content}
        // defaultValue="bread"
        onChange={onContentChangeHandler}
      />
      <label htmlFor="calories">Calories : </label>
      <input
        type="number"
        id="calories"
        value={mealRecord.calories}
        onChange={onCaloriesChangeHandler}
        className={`${styles["calories-input"]} ${
          mealRecord.calories < 0 ? styles.error : ""
        }`}
      />
      <div className={styles.footer}>
        <button>Add Record</button>
        <button
          className={styles["secondary"]}
          type="button"
          onClick={onCancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CalorieRecordEdit;
