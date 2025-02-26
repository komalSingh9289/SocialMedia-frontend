import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    activeModal: string | null;
    activeDrawer: string | null; 
}

const initialState: ModalState = {
    activeModal: null,
    activeDrawer: null,
};

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
        openDrawer: (state, action: PayloadAction<"notification" | "profile" | "settings" | "posts">) => {
            state.activeDrawer = action.payload;
        },
        closeDrawer: (state) => {
            state.activeDrawer = null;
        },
    }
});

export const { openModal, closeModal, openDrawer, closeDrawer } = ModalSlice.actions;
export default ModalSlice.reducer;
