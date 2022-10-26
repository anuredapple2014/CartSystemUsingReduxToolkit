import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        cartIsVisible: false
    },
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;              /* It looks like mutating but it's not */
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice