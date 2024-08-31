import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import { useId } from "react";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const id = useId();
  const value = useSelector(selectFilter);
  return (
    <div className={s.searchBox}>
      <label htmlFor={id} className={s.searchLabel}>
        Find contacts by name
      </label>
      <input
        className={s.search}
        id={id}
        type="text"
        value={value}
        placeholder="Enter name"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;