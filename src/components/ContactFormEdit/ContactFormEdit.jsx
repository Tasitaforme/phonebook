import Notification from 'components/Notification/Notification';
import {
  FormikButton,
  FormikStyledErrorMessage,
  FormikStyledField,
  FormikStyledForm,
} from 'components/StyledComponents/Formik.styled';
import { Formik } from 'formik';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { contactSchema } from 'schemas/formik';

const ContactFormEdit = ({ update, contact, setContact, setActive }) => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = contacts.filter(el => el.id !== contact.id);

  const onSubmit = async values => {
    const isNameExist = filteredContacts.find(
      contact => values.name.toLowerCase() === contact.name.toLowerCase()
    );

    const isNumberExist = filteredContacts.find(
      contact => values.number.toLowerCase() === contact.number.toLowerCase()
    );

    if (isNameExist) {
      toast.error(
        `${values.name} is already exists in contacts with the name ${isNameExist.number}`,
        {
          duration: 1500,
        }
      );
      return;
    }
    if (isNumberExist) {
      toast.error(
        `Number ${values.number} already exists in contacts with the name ${isNumberExist.name}.`
      );
      return;
    }

    update(values);
    setContact('');
    setActive(false);
  };

  return (
    <>
      <Notification message="👇 Edit contact" />
      <Formik
        initialValues={{
          name: contact.name || '',
          number: contact.number || '',
        }}
        validationSchema={contactSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, isValid, dirty }) => (
          <FormikStyledForm>
            <label>Name</label>
            <FormikStyledField
              type="text"
              name="name"
              className={errors.name && touched.name ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="name" />

            <label>Phone number</label>
            <FormikStyledField
              type="tel"
              name="number"
              className={errors.number && touched.number ? 'input-error' : ''}
            />
            <FormikStyledErrorMessage component="p" name="number" />

            <FormikButton
              type="submit"
              disabled={!isValid || isSubmitting || !dirty}
            >
              Edit contact
            </FormikButton>
          </FormikStyledForm>
        )}
      </Formik>
    </>
  );
};

export default ContactFormEdit;
