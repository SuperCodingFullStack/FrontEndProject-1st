const menuOnSlice = createSlice({
    name : "MenuOn",
    initialState : {
        isMenuOn: false
    },
    reducers: {
        menuOn(state) {
            state.isMenuOn = true;
        },
        menuOff(state) {
            state.isMenuOn = false;
        }
    }
});

export const menuOnActions = menuOnSlice.actions;
export default menuOnSlice;