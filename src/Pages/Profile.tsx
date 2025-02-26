import { useState } from "react";
import { FaCog } from "react-icons/fa";
import { BsGrid3X3, BsBookmark, BsCameraVideo } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openDrawer } from "../Slice/modalSlice";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const dispatch = useDispatch();

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center py-10 px-10">
      <div className="bg-white p-6 w-full h-auto">

        {/* Profile Section */}
        <div className="flex justify-center gap-5 items-center">
          <img
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold mt-3">Username</h2>
            <p className="text-sm mt-1">Your bio goes here...</p>
            <div className="flex space-x-4 mt-3">
              <p><span className="font-semibold">11</span> posts</p>
              <p><span className="font-semibold">41</span> followers</p>
              <p><span className="font-semibold">17</span> following</p>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <button className="border px-4 py-1 rounded-md text-sm hover:bg-gray-800 hover:text-gray-100"
              onClick={() => dispatch(openDrawer("profile"))}>Edit Profile</button>
              <FaCog className="text-xl cursor-pointer text-gray-700 hover:text-gray-800" 
              onClick={() => dispatch(openDrawer("settings"))}/>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t mt-6 flex justify-between text-gray-600 text-sm">
          {[
            { name: "posts", icon: <BsGrid3X3 />, label: "POSTS" },
            { name: "reels", icon: <BsCameraVideo />, label: "REELS" },
            { name: "saved", icon: <BsBookmark />, label: "SAVED" },
            { name: "tagged", icon: <MdOutlinePersonPin />, label: "TAGGED" },
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex flex-col items-center justify-center w-full py-3 ${activeTab === tab.name ? "border-t-2 border-black font-semibold text-black" : ""
                }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Layout for Posts */}
        <div className="grid grid-cols-3 gap-1 mt-4 h-[550px] bg-gray-200 overflow-y-scroll">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="relative">
              <img
                src={`https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg`}
                alt={`Post ${index + 1}`}
                className="w-full h-44 object-cover"
                onClick={() => dispatch(openDrawer("posts"))}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
