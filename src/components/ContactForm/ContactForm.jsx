import { useDispatch, useSelector } from 'react-redux';
// import { customAlphabet } from 'nanoid';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

// const nanoid = customAlphabet('1234567890', 2);

const ContactForm = () => {
    const contacts = useSelector(state => state.contacts);
    // console.log(contacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        // console.log('submit: name', event.target.name);
        // console.log('submit: number', event.target.number);
        // console.dir(event.target);
        const { name, phone } = event.target.elements;
        // console.log(name.value);

        if (
            contacts.list.find(
                contact =>
                    contact.name.toLowerCase() === name.value.toLowerCase()
            )
        ) {
            alert(`${name.value} is already in contacts`);
        } else {
            const newContact = {
                name: name.value,
                phone: phone.value,
            };
            // console.log(newContact);
            dispatch(addContact(newContact));
        }
        event.target.reset();
    };

    // const handleSubmit = contact => {
    //     event.preventDefault();
    //     console.log(contact);

    //     // if (
    //     //     contacts.find(
    //     //         item => item.name.toLowerCase() === contact.name.toLowerCase()
    //     //     )
    //     // ) {
    //     //     alert(`${contact.name} is already in contacts`);
    //     // } else {
    //     //     const newContact = {
    //     //         id: 'id-' + nanoid(),
    //     //         name: contact.name,
    //     //         number: contact.number,
    //     //     };
    //     //     // console.log('newContact: ', newContact);
    //     //     // this.setState(({ contacts }) => ({
    //     //     //     contacts: [newContact, ...contacts],
    //     //     // }));
    //     //     // contacts = [newContact, ...contacts];
    //     //     dispatch([newContact, ...contacts]);
    //     //     // setContacts(contacts => [newContact, ...contacts]);
    //     //     // console.log('contacts: ', contacts);
    //     // }
    // };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
                Name
                <br />
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    // value={name}
                    // onChange={handleChange}
                />
            </label>
            <br />
            <label
                className={css.label}
                // htmlFor=""
            >
                Phone
                <br />
                <input
                    className={css.input}
                    type="tel"
                    name="phone"
                    pattern="^[0-9]+$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    // value={number}
                    // onChange={handleChange}
                />
            </label>
            <br />
            <button className={css.form_button} type="submit">
                Add contact
            </button>
        </form>
    );
};

export default ContactForm;
