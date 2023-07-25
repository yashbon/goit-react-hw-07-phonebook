import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [
    //                 FLUSH,
    //                 REHYDRATE,
    //                 PAUSE,
    //                 PERSIST,
    //                 PURGE,
    //                 REGISTER,
    //             ],
    //         },
    //     }),
});

// export const persistor = persistStore(store);

//****************************************************************************** */
// *************  WITHOT CombineReducer  *****************/
// export const initialState = {
//     contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'contacts/filter':
//             return {
//                 ...state,
//                 filter: action.payload,
//             };
//         case 'contacts/delete':
//             return {
//                 ...state,
//                 contacts: (state.contacts = state.contacts.filter(
//                     contact => contact.id !== action.payload
//                 )),
//             };
//         default:
//             return state;
//     }
// };
//****************************************************************************** */

// const contactsInitialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
// const contactsReducer = (state = contactsInitialState, action) => {
//     switch (action.type) {
//         case 'contacts/delete':
//             return [
//                 ...state.filter(contact => contact.id !== action.payload)
//             ];
//         default:
//             return state;
//     }
// };

// const filterInitialState = {
//     filter: '',
// };
// const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
//         case 'contacts/filter':
//             return { ...state, filter: action.payload };
//         default:
//             return state;
//     }
// };

// export const applyFilter = filterValue => {
//     return {
//         type: 'contacts/filter',
//         payload: filterValue,
//     };
// };

// export const deleteContact = contactId => {
//     return {
//         type: 'contacts/delete',
//         payload: contactId,
//     };
// };
