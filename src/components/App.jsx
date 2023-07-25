import {
    // useDispatch,
    useSelector,
} from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { useEffect } from 'react';
import ContactList from './ConactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export const App = () => {
    // const dispatch = useDispatch();
    // Отримуємо частини стану
    const {
        // list,
        isLoading,
        error,
    } = useSelector(state => state.contacts);

    // Викликаємо операцію
    // useEffect(() => {
    //     dispatch(fetchContacts());
    // }, [dispatch]);

    // Рендерим розмітку в залежності від значень у стані
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
