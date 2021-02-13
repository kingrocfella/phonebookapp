import { useState } from "react";
import Modal from "../components/Modal";
import AddContact from "./addContact";
import ContactList from "./contactList";
import ContactDetails from "./contactDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/App.scss";
import {
  BsPersonPlus,
  BsPersonDash,
  BsExclamationCircle,
} from "react-icons/bs";

function App() {
  const [contacts, handleContacts] = useState([]);
  const [showModal, handleShowModal] = useState(false);
  const [title, handleTitle] = useState("Contact Information");
  const [modalType, handleModalType] = useState("");
  const [selectedID, setSelectedID] = useState("");
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [detail, setDetail] = useState({});

  const CONSTANTS = {
    contact: "1",
    viewdetails: "2",
    editdetails: "3",
    deletedetails: "4",
  };

  const addContacts = (data) => {
    handleShowModal(false);
    const arr = [...contacts, data];
    handleContacts(arr);
    toast.success("Contact created!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleViewDetails = (id) => {
    const detail = contacts.filter((contact) => contact.id === id)[0];
    setDetail(detail);
    handleModalType(CONSTANTS.viewdetails);
    handleShowModal(true);
    setSelectedID(id);
  };

  const handleEditContact = () => {
    handleModalType(CONSTANTS.editdetails);
    handleTitle("Edit Contact");
  };

  const saveEditedContact = (data) => {
    const contactList = contacts.filter((contact) => contact.id !== selectedID);
    const newList = [...contactList, data];
    handleContacts(newList);
    handleShowModal(false);
    toast.success("Contact successfully edited!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleCheckboxClick = (id) => {
    let arr = [...contacts];
    let checked = false;
    arr.forEach((contact) => {
      if (contact.id === id) contact.check = !contact.check;
      if (contact.check) checked = true;
    });
    handleContacts(arr);
    setDeleteBtn(checked);
  };

  const getCheckedContacts = () => {
    let total = 0;
    contacts.forEach((contact) => {
      if (contact.check) total += 1;
    });
    return total;
  };

  const handleDeleteContact = () => {
    const newarr = contacts.filter((contact) => !contact.check);
    handleContacts(newarr);
    handleShowModal(false);
    setDeleteBtn(false);
    toast.success("Contact(s) deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <ToastContainer />
      {showModal && (
        <Modal
          show={showModal}
          handleClose={() => handleShowModal(false)}
          title={
            deleteBtn
              ? "Delete Contact(s)"
              : modalType === CONSTANTS.contact
              ? "Add Contact"
              : title
          }
          body={
            modalType === CONSTANTS.contact ||
            modalType === CONSTANTS.editdetails ? (
              <AddContact
                addContacts={addContacts}
                enableEditing={modalType === CONSTANTS.editdetails}
                saveEditedContact={saveEditedContact}
                details={detail}
              />
            ) : modalType === CONSTANTS.viewdetails ? (
              <ContactDetails
                details={detail}
                handleEditContact={handleEditContact}
              />
            ) : modalType === CONSTANTS.deletedetails ? (
              <div className="text-center m-5">
                You are about to delete {getCheckedContacts()} contact(s).
              </div>
            ) : null
          }
          footer={
            deleteBtn ? (
              <button
                className="btn delete-button"
                onClick={handleDeleteContact}
              >
                CONFIRM
              </button>
            ) : null
          }
        />
      )}
      <div className="container text-white">
        <div className="space-between mt-5">
          <h3>Phonebook App</h3>
          <button
            className={`btn datatest-2 ${deleteBtn ? "delete-button" : "primary-button"}`}
            onClick={() => {
              handleShowModal(true);
              handleModalType(
                deleteBtn ? CONSTANTS.deletedetails : CONSTANTS.contact
              );
            }}
          >
            {deleteBtn ? <BsPersonDash /> : <BsPersonPlus />} &nbsp;&nbsp;
            {deleteBtn ? "Delete Checked Contact(s)" : "Add Contact"}
          </button>
        </div>
        <div className="mt-5">
          {contacts.length > 0 ? (
            <ContactList
              arr={contacts}
              handleViewDetails={handleViewDetails}
              handleCheckboxClick={handleCheckboxClick}
            />
          ) : (
            <div className="text-center pt-5 datatest-1">
              <BsExclamationCircle /> &nbsp; You have no contacts!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
