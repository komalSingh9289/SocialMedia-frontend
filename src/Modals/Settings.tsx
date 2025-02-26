import { useDispatch } from "react-redux";
import { closeDrawer } from "../Slice/modalSlice";
import { useState } from "react";

const Settings = () => {
    const dispatch = useDispatch();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [privateAccount, setPrivateAccount] = useState(false);

    return (
        <div className="fixed z-50 top-0 right-0 w-[500px] h-full bg-white dark:bg-neutral-900 shadow-lg transform translate-x-0 transition-transform duration-300">
            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    ⚙️ Settings
                </h2>
                <button onClick={() => dispatch(closeDrawer())} className="text-gray-500 hover:text-gray-700 dark:text-neutral-400">
                    ✕
                </button>
            </div>

            {/* Settings Options */}
            <div className="p-6 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                <div className="space-y-6">
                    {/* Account Settings */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Account</legend>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-700 dark:text-gray-300">Private Account</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={privateAccount}
                                    onChange={() => setPrivateAccount(!privateAccount)}
                                />
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </fieldset>

                    {/* Notifications */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Notifications</legend>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-700 dark:text-gray-300">Push Notifications</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notificationsEnabled}
                                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                                />
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </fieldset>

                    {/* Privacy */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Privacy & Security</legend>
                        <div className="py-2">
                            <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-all">
                                Change Password
                            </button>
                        </div>
                        <div className="py-2">
                            <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-all">
                                Blocked Accounts
                            </button>
                        </div>
                    </fieldset>

                    {/* Help & Support */}
                    <fieldset className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                        <legend className="text-sm font-semibold text-gray-700 dark:text-gray-300 px-2">Help & Support</legend>
                        <div className="py-2">
                            <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-all">
                                Help Center
                            </button>
                        </div>
                        <div className="py-2">
                            <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition-all">
                                Report a Problem
                            </button>
                        </div>
                    </fieldset>

                    {/* Logout & Delete Account */}
                    <fieldset className="border border-red-500 rounded-lg p-4">
                        <legend className="text-sm font-semibold text-red-500 px-2">Account Actions</legend>
                        <div className="py-2">
                            <button className="w-full text-left text-red-500 hover:bg-red-100 dark:hover:bg-red-800 px-3 py-2 rounded-md transition-all">
                                Log Out
                            </button>
                        </div>
                        <div className="py-2">
                            <button className="w-full text-left text-red-500 hover:bg-red-100 dark:hover:bg-red-800 px-3 py-2 rounded-md transition-all">
                                Delete Account
                            </button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Settings;
