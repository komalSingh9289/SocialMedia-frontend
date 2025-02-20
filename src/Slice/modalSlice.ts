import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    activeModal: string | null;
}

const initialState: ModalState = {
    activeModal: null,
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
    }
});

export const {openModal, closeModal} = ModalSlice.actions;

export default ModalSlice.reducer;
