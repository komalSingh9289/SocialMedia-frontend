import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    activeModal: string | null;
    isNotificationDrawerOpen: boolean;
}

const initialState: ModalState = {
    activeModal: null,
    isNotificationDrawerOpen: false,

}

const ModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            state.activeModal = action.payload;
        },
        closeModal: (state) => {
            state.activeModal = null;
        },
        openNotificationDrawer: (state) => {
            state.isNotificationDrawerOpen = true;
          },
          closeNotificationDrawer: (state) => {
            state.isNotificationDrawerOpen = false;
          },
    }
});

export const {openModal, closeModal, openNotificationDrawer, closeNotificationDrawer} = ModalSlice.actions;

export default ModalSlice.reducer;
