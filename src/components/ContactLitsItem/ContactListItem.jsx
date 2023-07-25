import ContactButtonDel from 'components/ContactButtonDel/ContactButtonDel';

const ConactListItem = ({ contact }) => {
    return (
        <>
            <p style={{ margin: 0 }}>
                <span>{contact.name}</span> <span>{contact.phone}</span>
            </p>
            <ContactButtonDel
                // className={css.deleteContact_Button}
                contactId={contact.id}
            />
        </>
    );
};

export default ConactListItem;
