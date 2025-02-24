
import ChatArea from "../Components/ChatArea";
import RightSideBar from "../Components/RightSideBar";

const Messages = () => {
    return (
        <div className=" grid grid-cols-3 gap-2 h-full">
            <div className=" border-r border-gray-200 p-3">
                <RightSideBar />
            </div>
            <div className="col-span-2 p-4">
                {/* friend profile  */}
                <div className="flex items-center flex-col justify-center mt-5 space-x-3 w-full">
                    <img
                        src="https://images.pexels.com/photos/30327284/pexels-photo-30327284/free-photo-of-black-and-white-portrait-of-a-tabby-cat.jpeg"
                        alt="user"
                        className="w-24 h-24 rounded-full"
                    />
                    <h1 className="font-semibold text-lg"> Name</h1>
                    <p className="text-sm text-gray-400"><i>username</i></p>
                    <p className="text-sm text-gray-400"><i>100 followers | 50 posts</i></p>
                    <p className="text-sm text-gray-400"><i>You follow each other on Social Media</i></p>
                </div>
                <ChatArea />
            </div>

        </div>
    )
}

export default Messages;