import {
  Container,
  Message,
  SubTitleText,
  Title,
} from 'components/StyledComponents/CommonElemens.styled';
import { FormLink } from 'components/StyledComponents/Formik.styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Phonebook App</Title>
      <SubTitleText>
        👌 Everything you need to manage your contacts.
        <br />
        <br />
        👍 The application will help you quickly find the right contact and keep
        your phone book in order.
        <br />
        <br />
        😎 If you are not authorized, you will not be able to test App!
        <br />
        <br />
        😊 Feel free to test it with a fake email!
        <br />
        <br />
        😉 Feel free to test it with a existing account!
      </SubTitleText>
      <Title>Get started:</Title>
      <Message>Don't have an account?</Message>
      <FormLink onClick={() => navigate('/register', { replace: true })}>
        👉 Sign up
      </FormLink>
      <Message>Already have an account?</Message>
      <FormLink onClick={() => navigate('/login', { replace: true })}>
        👉 Log in
      </FormLink>
      <Message>Want to use test account?</Message>
      <FormLink
        onClick={() =>
          navigate('/login', {
            state: { email: 'kukusya@com.ua', password: 'Kukusya13' },
          })
        }
      >
        👉 Log in test account
      </FormLink>
    </Container>
  );
};

export default Home;
