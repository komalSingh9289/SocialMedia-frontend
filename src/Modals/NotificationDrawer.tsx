import { useDispatch, useSelector } from "react-redux";
import { closeNotificationDrawer } from "../Slice/modalSlice";
import { RootState } from "../store/store";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

// Sample notifications
const notifications = [
    { id: 1, user: "john_doe", userImg: "https://i.pravatar.cc/150?img=1", type: "liked your photo", time: dayjs().subtract(3, "hour"), postImg: "https://source.unsplash.com/100x100/?nature" },
    { id: 2, user: "emily_rose", userImg: "https://i.pravatar.cc/150?img=2", type: "commented: 'Awesome!🔥'", time: dayjs().subtract(6, "hour"), postImg: "https://source.unsplash.com/100x100/?city" },
    { id: 3, user: "mike_tech", userImg: "https://i.pravatar.cc/150?img=3", type: "started following you", time: dayjs().subtract(1, "day") },
    { id: 4, user: "sarah_lens", userImg: "https://i.pravatar.cc/150?img=4", type: "mentioned you in a comment", time: dayjs().subtract(2, "days"), postImg: "https://source.unsplash.com/100x100/?beach" },
    { id: 5, user: "lisa_jones", userImg: "https://i.pravatar.cc/150?img=5", type: "liked your photo", time: dayjs().subtract(5, "days"), postImg: "https://source.unsplash.com/100x100/?mountain" },
];

// Function to categorize notifications
const categorizeNotifications = () => {
    const today: any[] = [];
    const yesterday: any[] = [];
    const thisWeek: any[] = [];

    notifications.forEach((notif) => {
        if (notif.time.isToday()) {
            today.push(notif);
        } else if (notif.time.isYesterday()) {
            yesterday.push(notif);
        } else {
            thisWeek.push(notif);
        }
    });

    return { today, yesterday, thisWeek };
};

const NotificationDrawer = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isNotificationDrawerOpen);
    const { today, yesterday, thisWeek } = categorizeNotifications();

    return (
        <div className={`fixed top-0 right-0 w-[380px] h-full bg-white dark:bg-neutral-900 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e74c3c" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
                    Notifications
                </h2>
                <button onClick={() => dispatch(closeNotificationDrawer())} className="text-gray-500 hover:text-gray-700 dark:text-neutral-400">
                    ✕
                </button>
            </div>

            {/* Notification List */}
            <div className="p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                {/* Today */}
                {today.length > 0 && (
                    <>
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Today</h3>
                        {today.map((notif) => (
                            <NotificationItem key={notif.id} notif={notif} />
                        ))}
                    </>
                )}

                <hr className="border-b border-gray-100" />

                {/* Yesterday */}
                {yesterday.length > 0 && (
                    <>
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-4 mb-2">Yesterday</h3>
                        {yesterday.map((notif) => (
                            <NotificationItem key={notif.id} notif={notif} />
                        ))}
                    </>
                )}

                <hr className="border-b border-gray-100" />

                {/* This Week */}
                {thisWeek.length > 0 && (
                    <>
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-4 mb-2">This Week</h3>
                        {thisWeek.map((notif) => (
                            <NotificationItem key={notif.id} notif={notif} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

const NotificationItem = ({ notif }: { notif: any }) => {
    return (
        <div className="flex items-center justify-between py-3 px-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-all">
            <div className="flex items-center space-x-3">
                <img src={notif.userImg} alt={notif.user} className="w-12 h-12 rounded-full border border-gray-300" />
                <div>
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                        <span className="font-semibold">{notif.user}</span> {notif.type}
                    </p>
                    <span className="text-xs text-gray-500">{notif.time.fromNow()}</span>
                </div>
            </div>
            {notif.postImg && <img src={notif.postImg} alt="post" className="w-10 h-10 rounded-md border border-gray-300" />}
        </div>
    );
};

export default NotificationDrawer;
