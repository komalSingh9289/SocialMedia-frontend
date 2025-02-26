import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ModalManager from "../Modals/ModalManager";
import DrawerManager from "../Modals/DrawerManager";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <ModalManager />
            <DrawerManager />

            <div className=" ml-64 w-full h-screen">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;