import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeModal } from "../Slice/modalSlice";
import SearchModal from "./SearchModal";
import CreateModal from "./CreateModal";


const ModalManager = () => {
    const activeModal = useSelector((state: RootState) => state.modal.activeModal);
    const dispatch = useDispatch();

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
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white p-4 rounded-lg relative">
        <button onClick={() => dispatch(closeModal())} className="absolute top-2 right-3 cursor-pointer">X</button>
        {renderModal()}
      </div>
    </div>
    )
}

export default ModalManager;