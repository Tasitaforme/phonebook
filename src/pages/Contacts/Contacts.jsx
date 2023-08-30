import { ContactForm } from 'components/ContactFormAdd/ContactFormAdd';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';
import {
  Container,
  Title,
  toastOptions,
} from 'components/StyledComponents/CommonElemens.styled';

import { useSelector } from 'react-redux';
import { selectContactsInfo } from 'redux/selectors';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const { items: contacts, isLoading, error } = useSelector(selectContactsInfo);

  const isEmptyContactList = contacts?.length < 0;

  return (
    <Container>
      <h1 hidden>Phonebook</h1>
      <Title>Your phonebook</Title>
      <Notification message="👇 Add number to contacts" />
      <ContactForm />

      <Title>Contacts</Title>
      {isEmptyContactList ? (
        <Notification message="🤦‍♂️ Your phonebook is empty" />
      ) : (
        <Filter />
      )}
      {isLoading && !contacts && <Loader />}
      {error && <Notification message={error} />}
      {contacts && <ContactList />}

      <Toaster toastOptions={toastOptions} />
    </Container>
  );
};

export default Contacts;
