import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import { selectLoading } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <Loader />}
      {/* {error && <h2>Something went wrong!</h2>} */}
    </div>
  );
};

export default ContactsPage;