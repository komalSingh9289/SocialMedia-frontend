import FollowingList from "../Components/FollowingList"
import Sidebar from "../Components/Sidebar"
import Stories from "../Components/Stories"

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className=" lg:ml-64 w-full grid grid-cols-3 gap-2 h-screen">
                <div className="col-span-2 p-4">
                    <Stories />
                    <h1 className="font-semibold text-lg font-sans">Feeds</h1>
                </div>
                <div className=" border-l border-gray-200 p-3">
                    <div className="px-3">
                        <div className="w-full flex items-center justify-between mt-5">
                            <h1 className="font-semibold text-lg`">Following</h1>
                            <span className="font-semibold text-gray-500 text-sm">See All</span>
                        </div>
                        <div className="mt-5">
                            <FollowingList type="following"/>
                        </div>
                        <hr className="border border-gray-100 my-3"/>
                        <div className="w-full flex items-center justify-between mt-7">
                            <h1 className="font-semibold text-sm text-gray-500">Suggestion for you</h1>
                            <span className="font-semibold text-gray-700 text-sm">See All</span>
                        </div>
                        <div className="mt-5">
                            <FollowingList type="suggestion"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home