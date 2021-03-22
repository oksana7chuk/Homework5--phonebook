import React from "react";
import PropTypes from "prop-types";
import styles from "./contactsForm.module.css";

const ContactListItem = ({ name, number, onDeleteContact }) => (
  <div className={styles.contactItem}>
    <div className={styles.contactName}>{name}</div>
    <div className={styles.contactName}>{number}</div>
    <button
      className={styles.deleteButton}
      onClick={onDeleteContact}
      type="button"
    >
      Delete
    </button>
  </div>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
