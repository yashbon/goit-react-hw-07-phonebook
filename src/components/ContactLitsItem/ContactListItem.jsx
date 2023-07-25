import ContactButtonDel from 'components/ContactButtonDel/ContactButtonDel';

const ConactListItem = ({ contact }) => {
    return (
        <>
            <p style={{ margin: 0 }}>
                <span>{contact.name}</span> <span>{contact.phone}</span>
            </p>
            <ContactButtonDel contactId={contact.id} />
        </>
    );
};

export default ConactListItem;
