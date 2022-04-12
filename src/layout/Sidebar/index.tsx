
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/main-styles/sidebar.scss';

import { AiOutlineEye, AiOutlineTeam, AiOutlineLineChart } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import Navigation from '../Navigation'

const Sidebar = (props: any) => {
    const sideBar = [
        {
            path: '/',
            section: 'home',
            icon: <AiOutlineEye className="sidebar__link-icon" />,
        },
        {
            path: '/learning',
            section: 'learning',
            icon: <AiOutlineLineChart className="sidebar__link-icon" />,
        },
        {
            path: '/',
            section: 'home',
            icon: <AiOutlineTeam className="sidebar__link-icon" />,
        },
        {
            path: '/',
            section: 'home',
            icon: <MdOutlineWorkOutline className="sidebar__link-icon " />,

        },
        {
            path: '/',
            section: 'home',
            icon: <BsBook className="sidebar__link-icon" />,

        },
        {
            path: '/',
            section: 'home',
            icon: <FiSettings className="sidebar__link-icon" />,

        },

    ];

    const [itemMenu, setItemMenu] = useState(0);

    const itemMenuHandler = (index: number) => { 
        setItemMenu(index);
    };

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-logo">

                    <Link to='/'>
                        <img src='./images/Logo.png' alt="logo" />
                    </Link>
                </div>
                <div className="sidebar__link active-sidebar">
                    {
                        sideBar.map((item, index) => (
                            <div onClick={() => itemMenuHandler(index)} key={index} className={`${index === itemMenu ? "active-sidebar" : ''}`}>
                                <Link to={item.path} >
                                    {item.icon}
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <Navigation itemIndex={itemMenu} />
            </div>
        </>
    );
};

export default Sidebar;