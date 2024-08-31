import styles from "./Options.module.css";

export default function Options({
  good,
  neutral,
  bad,
  onUpdate,
  onReset,
  totalFeedback,
}) {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => onUpdate("good")}>Good {good}</button>
      <button onClick={() => onUpdate("neutral")}>Neutral {neutral}</button>
      <button onClick={() => onUpdate("bad")}>Bad {bad}</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
