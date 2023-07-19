import { createSlice } from '@reduxjs/toolkit';

// const initialStateFilter = {
//     filter: '',
// };

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        applyFilter(state, action) {
            state.filter = action.payload;
        },
    },
});
// console.log(filterSlice);

export const { applyFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const applyFilter = createAction('contacts/filter');

// export const filterReducer = createReducer(initialStateFilter, builder =>
//     builder.addCase(applyFilter, (state, action) => {
//         state.filter = action.payload;
//     })
// );

// export const filterReducer = (state = initialStateFilter, action) => {
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
