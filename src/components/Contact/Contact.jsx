import s from "./Contact.module.css";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contactInfo: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contact}>
      <div className={s.contactInfo}>
        <div className={s.icon}>
          <FaRegUser size={20} />
          <span className={s.contactValue}>{name}</span>
        </div>
        <div className={s.icon}>
          <FiPhone size={20} />
          <span className={s.contactValue}>{number}</span>
        </div>
      </div>
      <button onClick={onDelete} className={s.onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;