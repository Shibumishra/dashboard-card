import { Outlet } from 'react-router-dom';
import Navbar from '.'

const MainNavbar = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainNavbar;