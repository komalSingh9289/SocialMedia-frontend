import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import NotificationDrawer from "../Modals/NotificationDrawer";
import ModalManager from "../Modals/ModalManager";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <NotificationDrawer />
            <Sidebar />
            <ModalManager />

            <div className="ml-64 w-full h-screen">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;