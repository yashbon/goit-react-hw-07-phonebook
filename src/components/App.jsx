import { useSelector } from 'react-redux';
import ContactList from './ConactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export const App = () => {
    const { isLoading, error } = useSelector(state => state.contacts);

    return (
        <div
            style={{
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // fontSize: 40,
                color: '#010101',
                backgroundColor: 'lightsteelblue',
            }}
        >
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            {isLoading && !error && (
                <>
                    <br />
                    <b>Request in progress...</b>
                    <br />
                </>
            )}
            <Filter />
            <ContactList />
        </div>
    );
};
