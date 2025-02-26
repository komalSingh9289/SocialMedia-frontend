
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeDrawer } from "../Slice/modalSlice";

const EditProfile = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.activeDrawer);
    return (
         <div className={`fixed z-10 top-0 right-0 w-[500px] h-full bg-white dark:bg-neutral-900 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
                    {/* Header */}
                    <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e74c3c" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                            </svg>
                            Profile
                        </h2>
                        <button onClick={() => dispatch(closeDrawer())} className="text-gray-500 hover:text-gray-700 dark:text-neutral-400">
                            ✕
                        </button>
                    </div>

                    <div className="p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                        hi
                    </div>
        
            
                </div>
    )
}

export default EditProfile;