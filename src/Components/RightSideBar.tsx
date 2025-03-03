import FollowingList from "./FollowingList"

const RightSideBar = () => {
    return (
        <div className="px-3">
        <div className="w-full flex items-center justify-between mt-5">
            <h1 className="font-semibold text-lg`">Following</h1>
            <span className="font-semibold text-gray-500 text-sm cursor-pointer">See All</span>
        </div>
        <div className="mt-5">
            <FollowingList type="following" />
        </div>
        <hr className="border border-gray-100 my-3" />
        <div className="w-full flex items-center justify-between mt-7">
            <h1 className="font-semibold text-sm text-gray-500">Suggestion for you</h1>
            <span className="font-semibold text-gray-700 text-sm cursor-pointer">See All</span>
        </div>
        <div className="mt-5">
            <FollowingList type="suggestion" />
        </div>
    </div>
    )
}

export default RightSideBar