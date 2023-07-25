import axios from 'axios';
// import {
//     fetchingError,
//     fetchingInProgress,
//     fetchingSuccess,
// } from './contactsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64b6ecf1df0839c97e164649.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchConacts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            // debugger;
            // console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, phone });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const fetchContacts = () => async dispatch => {
//     try {
//         // Індикатор завантаження
//         dispatch(fetchingInProgress());
//         // HTTP-запит
//         const response = await axios.get(
//             'https://64b6ecf1df0839c97e164649.mockapi.io/contacts/contacts',
//             {
//                 method: 'GET',
//                 headers: { 'content-type': 'application/json' },
//             }
//         );
//         // .then(res => {
//         //     if (res.ok) {
//         //         console.log('Status:', res.statusText);
//         //         // initialStateContacts = res.json();
//         //         return res.json();
//         //         // handle error
//         //     }
//         // })
//         // .then(contacts => {
//         //     console.log('contacts:', contacts);
//         //     // Do something with the list of tasks
//         // })
//         // .catch(error => {
//         //     console.log(error);
//         //     // handle error
//         // });

//         // Обробка даних
//         dispatch(fetchingSuccess(response.data));
//         console.log(response);
//     } catch (error) {
//         // Обробка помилки
//         dispatch(fetchingError(error.message));
//     }
// };
