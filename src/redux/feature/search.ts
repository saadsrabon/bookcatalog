import { createSlice } from "@reduxjs/toolkit";
interface searchType  {
  
    searchtext:string,
}
const initialState:searchType = {
    searchtext:'',
}
const searchSlice = createSlice({
    name: 'search',
   initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchtext = action.payload;
        }
    }
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;