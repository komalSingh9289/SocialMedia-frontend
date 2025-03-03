import { useDispatch } from "react-redux";
import { closeDrawer } from "../Slice/modalSlice";
import Feeds from "../Components/Feeds";

const Posts = () => {
    const dispatch = useDispatch();
    return (
        <div className="fixed z-50 top-0 right-0 w-[500px] h-full bg-white dark:bg-neutral-900 shadow-lg transform translate-x-0 transition-transform duration-300">
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    Posts
                </h2>
                <button onClick={() => dispatch(closeDrawer())} className="text-gray-500 hover:text-gray-700 dark:text-neutral-400">
                    ✕
                </button>
            </div>
            <div className="p-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                <Feeds />
            </div>

        </div>
    )
}

export default Posts;