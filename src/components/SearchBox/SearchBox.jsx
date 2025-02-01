import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);

  return (
    <div className={styles.form}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Type a name to search..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
