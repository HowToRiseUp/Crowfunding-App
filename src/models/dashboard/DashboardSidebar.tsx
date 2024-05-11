import { NavLink } from "react-router-dom";
import IconDashboard from "../../components/icon/IconDashboard";
import IconCampaign from "../../components/icon/IconCampaign";
import IconWithdraw from "../../components/icon/IconWithdraw";
import IconProfile from "../../components/icon/IconProfile";
import IconLight from "../../components/icon/IconLight";
import IconLogout from "../../components/icon/IconLogout";
import IconPayment from "../../components/icon/IconPayment";
import { useDispatch } from "react-redux";
import { authActions } from "../../features/auth/authSlice";

interface SidebarLinks {
    icon: any,
    link: string,
    title: string,
    onClick?: () => void
}

const sidebarLinks: SidebarLinks[] = [
    {
        icon: <IconDashboard></IconDashboard>,
        link: '/',
        title: 'Dashboard'
    },
    {
        icon: <IconCampaign></IconCampaign>,
        link: '/Campaign',
        title: 'Campaign'
    },
    {
        icon: <IconPayment></IconPayment>,
        link: '/Payment',
        title: 'Payment'
    },
    {
        icon: <IconWithdraw></IconWithdraw>,
        link: '/Withdraw',
        title: 'Withdraw'
    },
    {
        icon: <IconProfile></IconProfile>,
        link: '/sign-in',
        title: 'Profile'
    },
    {
        icon: <IconLogout></IconLogout>,
        link: '/logout',
        title: 'Logout'
    },
    {
        icon: <IconLight></IconLight>,
        link: '0',
        title: 'Light',
        onClick: () => { },

    },
]

const DashboardSidebar = () => {
    const dispatch = useDispatch()
    const navlinkClass =
        "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary";
    return (
        <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
            {sidebarLinks.map((link) => {
                if (link.link === "/logout") {
                    return (
                        <button
                            onClick={() => { dispatch(authActions.logout()) }}
                            className={navlinkClass}
                            key={link.title}
                        >
                            <span>{link.icon}</span>
                            <span className="md:hidden">{link.title}</span>
                        </button>
                    );
                }
                return (
                    <NavLink
                        to={link.link}
                        key={link.title}
                        className={({ isActive }) =>
                            isActive
                                ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
                                : `${navlinkClass} text-icon-color`
                        }
                    >
                        <span>{link.icon}</span>
                        <span className="md:hidden">{link.title}</span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default DashboardSidebar;
