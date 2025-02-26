import {  useSelector } from "react-redux";
import { RootState } from "../store/store";
//import { closeModal } from "../Slice/modalSlice";
import SearchModal from "./SearchModal";
import CreateModal from "./CreateModal";


const ModalManager = () => {
    const activeModal = useSelector((state: RootState) => state.modal.activeModal);


    if(!activeModal) return null;

    const renderModal = () => {
        switch (activeModal) {
            case "searchModal":
                return <SearchModal />;
            case "createModal":
                return <CreateModal />;
            
            default:
                return null;
        }
    };

    console.log(renderModal)

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30">
      <div className="bg-white p-4 rounded-lg relative">
        {renderModal()}
      </div>
    </div>
    )
}

export default ModalManager;