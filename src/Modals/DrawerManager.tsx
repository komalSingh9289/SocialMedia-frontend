import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import NotificationDrawer from "./NotificationDrawer";
import EditProfile from "./EditProfile";


const DrawerManager = () => {
    const activeDrawer = useSelector((state: RootState) => state.modal.activeDrawer);

    if (!activeDrawer) return null;

    const renderModal = () => {
        switch (activeDrawer) {
            case "notification":
                return <NotificationDrawer />;
            case "profile":
                return <EditProfile />;

            default:
                return null;
        }
    };

    console.log(renderModal)

    return (
        <div className={`fixed top-0 right-0 w-[380px] h-full bg-white dark:bg-neutral-900 shadow-lg transition-all duration-300 z-50`}>
            {renderModal()}
        </div>
    )
}

export default DrawerManager;