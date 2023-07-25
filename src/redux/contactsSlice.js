// import { nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { customAlphabet } from 'nanoid';

// ************ Persit
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleFulfilled = (state, action) => {
    // console.log('handleFulfilled');
    state.isLoading = false;
    state.error = null;
    state.list = action.payload;
    // console.log(state.list);
};

const handleAddContactFulfilled = (state, action) => {
    // console.log('state from addContact', state);
    state.isLoading = false;
    state.error = null;
    state.list.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
    // console.log('delete contact');
    // console.log('state from del contact', state);
    // console.log('state.list 1', state.list);
    // console.log('data contact:', action.payload);
    state.isLoading = false;
    state.error = null;
    //  state.list.filter(contact => contact.id !== action.payload);
    // state.list.push(action.payload);
    // console.log('state.list 2', state.list);

    const index = state.list.findIndex(
        contact => contact.id === action.payload.id
    );
    // console.log(index);

    state.list.splice(index, 1);

    // state.list.filter(contact => contact.id !== action.payload);
};

// const contactsInitialState = {
//     list: [],
//     isLoading: false,
//     error: null,
// };

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        list: [],
        isLoading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, handleAddContactFulfilled)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
            .addCase(deleteContact.rejected, handleRejected);
    },
});
// contactsSlice.list = fetchContacts();
export const contactsReducer = contactsSlice.reducer;
// contactsSlice.list = fetchContacts();
// const persistConfig = {
//     key: 'root',
//     storage,
// };

//** mockAPI */

// let initialStateContacts;
// async function contactsFromMockAPI() {
//     await fetch(
//         'https://64b6ecf1df0839c97e164649.mockapi.io/contacts/contacts',
//         {
//             method: 'GET',
//             headers: { 'content-type': 'application/json' },
//         }
//     )
//         .then(res => {
//             if (res.ok) {
//                 console.log('Status:', res.statusText);
//                 // initialStateContacts = res.json();
//                 return res.json();
//                 // handle error
//             }
//         })
//         .then(contacts => {
//             console.log('contacts:', contacts);
//             // Do something with the list of tasks
//         })
//         .catch(error => {
//             // handle error
//         });
// }
// console.log(initialStateContacts);

//** end mockAPI */

// export const persistor = persistStore(store);
//************* Persit E N D */

//     ?? [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const initialStateContacts = {
//     list: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
// };

// get LocalStorage

// export const deleteContact = createAction('contacts/delete');

// export const addContact = createAction('contacts/add', newContact => {
//     const nanoid = customAlphabet('1234567890', 2);
//     return {
//         payload: { id: 'id-' + nanoid(), ...newContact },
//     };
// });

// const nanoid = customAlphabet('1234567890', 2);

// const contactsSlice = createSlice({
//     name: 'contacts',

//     // get LocalStorage
//     //JSON.parse(localStorage.getItem('contacts')) ?? dataContacts

//     // initialState: [
//     //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     // ],
//     initialState: contactsFromMockAPI(),
//     error: null,
//     reducers: {
//         deleteContact(state, action) {
//             console.log('delete contact');
//             console.log(state);
//             console.log(action);

// return {
//     list: state.list.filter(
//         contact => contact.id !== action.payload
//     ),
//             // };

//             // state.list.splice(action.contactId, 1);
//             // window.localStorage.setItem('contacts', JSON.stringify(state));
//         },

//         addContact: {
//             reducer(state, action) {
//                 state.list.unshift(action.payload);
//                 // window.localStorage.setItem('contacts', JSON.stringify(state));
//             },
//             prepare(newContact) {
//                 return {
//                     payload: {
//                         id: 'id-' + nanoid(),
//                         ...newContact,
//                     },
//                 };
//             },
//             // window.localStorage.setItem('contacts', JSON.stringify(contacts))
//         },
//         fetchingInProgress(state) {},
//         fetchingSucces() {},
//         // fetchingError,
//     },
// });

// console.log(contactsSlice.getInitialState());
// console.log(contactsSlice);

// export const { deleteContact, addContact } = contactsSlice.actions;

// export const persistedContactsReducer = contactsSlice.reducer;

// export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = createReducer(initialStateContcts, builder =>
// builder
//     .addCase(deleteContact, (state, action) => {
//         // return state.filter(contact => contact.id !== action.payload);

//         // there add to LocalStorage
//         state.splice(action.contactId, 1);
//     })
//     .addCase(addContact, (state, action) => {
//         state.unshift(action.payload);
//     })
// );

// export const contactsReducer = (state = initialStateContcts, action) => {
//     switch (action.type) {
//         case 'contacts/delete':
//             return [...state.filter(contact => contact.id !== action.payload)];
//         case 'contacts/add':
//             // console.log('contacts/add', action.payload);
//             return [action.payload, ...state];
//         default:
//             return state;
//     }
// };

// export const addContact = newContact => {
//     const nanoid = customAlphabet('1234567890', 2);
//     return {
//         type: 'contacts/add',
//         payload: { id: 'id-' + nanoid(), ...newContact },
//     };
// };

// console.log(deleteContact.toString());

// export const deleteContact = contactId => {
//     return {
//         type: 'contacts/delete',
//         payload: contactId,
//     };
// };

// console.log(addContact.type);

//********************** */
// import { createSlice } from "@reduxjs/toolkit"
// import { initialState } from "./store";

// const initialStateContcts = initialState.contacts;
// console.log(initialStateContcts);

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: initialStateContcts,
//     reducers: {
//         deleteContact(state, action) {
//             console.log('hello');
//             console.log(state);
//             const index = state.findIndex(contact => contact.id === action.payload);
//             console.log(index);
//             state.splice(index, 1);
//         }
//     }
// });

// export const { deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

// // export const deleteContact = (contactId) => {
// //     return {
// //         type: 'contacts/deleteContact',
// //         playload: contactId
// //     }
// // }
