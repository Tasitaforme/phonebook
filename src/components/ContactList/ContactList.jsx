import { ListItem, Button, ButtonWrap } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Notification from 'components/Notification/Notification';
import { deleteContact, updateContact } from 'redux/operationsThunks';
import { RiDeleteBin6Line, RiEdit2Fill } from 'react-icons/ri';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ContactFormEdit from 'components/ContactFormEdit/ContactFormEdit';

const ContactList = () => {
  const [modalActive, setModalActive] = useState(false);
  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const [contact, setContact] = useState('');

  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleUpdate = body => {
    dispatch(updateContact({ id: contact.id, body }));
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleCall = number => {
    window.location = `tel:` + number;
  };

  return (
    <>
      {contacts &&
        (contacts.length === 0 ? (
          <Notification message="🤷‍♂️ Nothing found" />
        ) : (
          <ul>
            {contacts.map(contact => {
              const { id, name, number } = contact;
              return (
                <ListItem key={id}>
                  <>
                    <p>{name}:</p>
                    <p onClick={() => handleCall(number)}>{number}</p>

                    <ButtonWrap>
                      <Button
                        type="button"
                        onClick={() => {
                          setModalActive(true);
                          setContact(contact);
                        }}
                      >
                        <RiEdit2Fill />
                      </Button>
                      <Button type="button" onClick={() => handleDelete(id)}>
                        <RiDeleteBin6Line />
                      </Button>
                    </ButtonWrap>
                  </>
                </ListItem>
              );
            })}
          </ul>
        ))}
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ContactFormEdit
            update={handleUpdate}
            contact={contact}
            setContact={setContact}
            setActive={setModalActive}
          />
        </Modal>
      )}
    </>
  );
};
export default ContactList;
