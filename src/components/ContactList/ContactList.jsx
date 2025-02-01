import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p>{name}: {number}</p>
          <button onClick={() => dispatch(deleteContact(id))} className={s.deleteButton}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
