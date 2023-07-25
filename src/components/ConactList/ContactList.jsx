import ConactListItem from 'components/ContactLitsItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
    // Отримуємо необхідну частину стану
    const contacts = useSelector(state => {
        // console.log('state', state);
        return state.contacts.list;
        // console.log(fetchContacts());
        // return fetchContacts();
    });
    // console.log('contacts', contacts);
    const filter = useSelector(state => state.filter.filter);
    // console.log('filter:', filter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
        // console.log('render list');
    }, [dispatch]);

    // console.log(contacts);
    return (
        <>
            {filteredContacts.length > 0 && (
                <ul className={css.contactList}>
                    {filteredContacts.map(contact => (
                        <li
                            className={css.contactListItem}
                            key={contact.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ConactListItem contact={contact} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ContactList;
