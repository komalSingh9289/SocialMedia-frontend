import Feeds from "../Components/Feeds"
import FollowingList from "../Components/FollowingList"
import Sidebar from "../Components/Sidebar"
import Stories from "../Components/Stories"
import ModalManager from "../Modals/ModalManager"


const Home = () => {
    return (

        <div className="flex">
            <Sidebar />
            <ModalManager />
            <div className=" lg:ml-64 w-full grid grid-cols-3 gap-2 h-screen">
                <div className="col-span-2 p-4">
                    <Stories />
                    <h1 className="font-semibold text-lg font-sans mt-5">Feeds</h1>
                    <div className="w-full h-[45rem] p-3  group overflow-hidden hover:overflow-y-scroll transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                        <Feeds />
                    </div>

                </div>
                <div className=" border-l border-gray-200 p-3">
                    <div className="px-3">
                        <div className="w-full flex items-center justify-between mt-5">
                            <h1 className="font-semibold text-lg`">Following</h1>
                            <span className="font-semibold text-gray-500 text-sm">See All</span>
                        </div>
                        <div className="mt-5">
                            <FollowingList type="following" />
                        </div>
                        <hr className="border border-gray-100 my-3" />
                        <div className="w-full flex items-center justify-between mt-7">
                            <h1 className="font-semibold text-sm text-gray-500">Suggestion for you</h1>
                            <span className="font-semibold text-gray-700 text-sm">See All</span>
                        </div>
                        <div className="mt-5">
                            <FollowingList type="suggestion" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
 
    )
}

export default Home