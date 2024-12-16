import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ContactList.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-item">
          <div className="contact-details">
            <div>
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span className="contact-name">{contact.name}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span className="contact-number">{contact.number}</span>
            </div>
          </div>
          <button
            className="delete-button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <FontAwesomeIcon icon={faTimes} className="delete-icon" />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
