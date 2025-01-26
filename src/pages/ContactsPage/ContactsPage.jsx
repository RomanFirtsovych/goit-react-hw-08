import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
  setFilter,
} from "../../redux/tasks/contactsSlice";
import {
  fetchContacts,
  deleteContact,
  updateContact,
} from "../../redux/tasks/tasksOperations";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector((state) => state.contacts.filter);

  const [editingContactId, setEditingContactId] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: "", number: "" });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEditClick = (contact) => {
    setEditingContactId(contact.id);
    setUpdatedData({ name: contact.name, number: contact.number });
  };

  const handleUpdateContact = (id) => {
    dispatch(updateContact({ contactId: id, updatedData }));
    setEditingContactId(null);
    setUpdatedData({ name: "", number: "" });
  };

  const handleCancelEdit = () => {
    setEditingContactId(null);
    setUpdatedData({ name: "", number: "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Contacts</h1>
      <input
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={handleFilterChange}
        className={styles.searchInput}
      />
      {isLoading && <p className={styles.loadingText}>Loading contacts...</p>}
      {error && <p className={styles.errorText}>Error: {error}</p>}
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.listItem}>
            {editingContactId === contact.id ? (
              <div className={styles.editForm}>
                <input
                  type="text"
                  value={updatedData.name}
                  onChange={(e) =>
                    setUpdatedData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className={styles.editInput}
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={updatedData.number}
                  onChange={(e) =>
                    setUpdatedData((prev) => ({
                      ...prev,
                      number: e.target.value,
                    }))
                  }
                  className={styles.editInput}
                  placeholder="Phone Number"
                />
                <button
                  onClick={() => handleUpdateContact(contact.id)}
                  className={styles.saveButton}
                >
                  Save
                </button>
                <button onClick={handleCancelEdit} className={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            ) : (
              <div className={styles.contactInfo}>
                <span className={styles.contactName}>{contact.name}</span>
                <span className={styles.contactPhone}>{contact.number}</span>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditClick(contact)}
                  className={styles.editButton}
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {contacts.length === 0 && !isLoading && !error && (
        <p className={styles.noContactsText}>No contacts found</p>
      )}
    </div>
  );
};

export default ContactsPage;
