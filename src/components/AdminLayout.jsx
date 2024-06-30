import { Outlet, NavLink } from "react-router-dom";


export default function Layout() {

    return (
        <>
            <nav>
                <NavLink
                    to="."
                    end
                    className={({isActive}) => 
                        activeLinkStyle(isActive)}>
                        Dashboard
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}