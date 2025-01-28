import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  setFilter,
} from "../../redux/contacts/contactsSlice";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "../../redux/contacts/operations";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [newContact, setNewContact] = useState({ name: "", number: "" });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = () => {
    if (!newContact.name.trim() || !newContact.number.trim()) {
      alert("Both fields are required!");
      return;
    }
    dispatch(addContact(newContact));
    setNewContact({ name: "", number: "" });
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.taskContainer}>
      <h1 className={styles.taskTitle}>Your Contacts</h1>
      <div className={styles.taskInputContainer}>
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          className={styles.taskInput}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newContact.number}
          onChange={(e) => setNewContact({ ...newContact, number: e.target.value })}
          className={styles.taskInput}
        />
        <button onClick={handleAddContact} className={styles.taskButton}>
          Add Contact
        </button>
      </div>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={handleFilterChange}
        className={styles.searchInput}
      />
      <ul className={styles.taskList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.taskItem}>
            <span className={styles.taskText}>{contact.name}</span>
            <span className={styles.contactPhone}>{contact.number}</span>
            <button
              onClick={() => handleDeleteContact(contact.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
