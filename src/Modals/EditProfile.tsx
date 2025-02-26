import { useDispatch } from "react-redux";
import { closeDrawer } from "../Slice/modalSlice";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const EditProfile = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "John Doe",
        username: "johndoe",
        bio: "Traveler | Photographer 📷 | Coder 💻",
        email: "johndoe@email.com",
        website: "https://johndoe.com",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed z-50 top-0 right-0 w-[500px] h-full bg-white dark:bg-neutral-900 shadow-lg transform translate-x-0 transition-transform duration-300">
            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <FaEdit  />

                    Edit Profile
                </h2>
                <button onClick={() => dispatch(closeDrawer())} className="text-gray-500 hover:text-gray-700 dark:text-neutral-400">
                    ✕
                </button>
            </div>

            {/* Profile Edit Section */}
            <div className="p-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                {/* Profile Picture */}
                <div className="flex flex-col items-center mb-6">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-700" />
                    <button className="text-blue-500 text-sm mt-2 cursor-pointer">Change Profile Photo</button>
                </div>

                {/* Input Fields using fieldset & legend */}
                <div className="space-y-6">
                    {/** Name */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-3">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Name</legend>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-300"
                        />
                    </fieldset>

                    {/** Username */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-3">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Username</legend>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-300"
                        />
                    </fieldset>

                    {/** Bio */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-3">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Bio</legend>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-300 resize-none"
                        />
                    </fieldset>

                    {/** Email */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-3">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Email</legend>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-300"
                        />
                    </fieldset>

                    {/** Website */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-3">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Website</legend>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-300"
                        />
                    </fieldset>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end gap-2">
                    <button
                        className="px-4 py-2 text-sm font-semibold bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                        onClick={() => dispatch(closeDrawer())}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
