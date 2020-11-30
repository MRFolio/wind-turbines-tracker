import { HalfCircleSpinner } from "react-epic-spinners";
import styles from "./Spinner.module.scss";

const Spinner = () => (
  <HalfCircleSpinner className={styles.spinner} color="#32CD32" size={45} />
);

export default Spinner;
