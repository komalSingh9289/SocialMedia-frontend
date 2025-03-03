import { useDispatch } from "react-redux";
import { closeModal } from "../Slice/modalSlice";

const Comments = () => {
    const dispatch = useDispatch();
    return (
        <div className="p-6 w-96">
            <div className="w-full flex items-center justify-between p-2">
                <h2 className="text-xl font-semibold">Comments</h2>
                <button onClick={() => dispatch(closeModal())} className="cursor-pointer">X</button>
            </div>
        </div>
    )
}

export default Comments;