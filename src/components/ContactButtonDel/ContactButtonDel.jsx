import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactButtonDel.module.css';

const ContactButtonDel = ({ contactId }) => {
    const dispatch = useDispatch();
    const handleDeleteContact = contactId => dispatch(deleteContact(contactId));
    return (
        <>
            <button
                className={css.deleteContact_Button}
                type="button"
                onClick={() => handleDeleteContact(contactId)}
            >
                delete
            </button>
        </>
    );
};

export default ContactButtonDel;
