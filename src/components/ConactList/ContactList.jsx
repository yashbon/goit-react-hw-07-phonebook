import ConactListItem from 'components/ContactLitsItem/ContactListItem';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

const ContactList = () => {
    // Отримуємо необхідну частину стану
    const contacts = useSelector(state => state.contacts.list);
    // console.log(contacts);
    const filter = useSelector(state => state.filter.filter);
    // console.log(filter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

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
