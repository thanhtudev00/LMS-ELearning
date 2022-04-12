
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../styles/main-styles/sidebar.scss';

import { AiOutlineEye, AiOutlineLineChart, AiOutlineTeam } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Fragment } from 'react';

type ItemMenuProps = {
    itemIndex: number
}

const Navigation = ({ itemIndex }: ItemMenuProps) => {

    const itemMenu = [
        {
            path: '/',
            name: 'Tổng quan',
            section: '',
            icon: <AiOutlineEye style={{ marginTop: '10px' }} className="menu__link-icon" />,

        },
        {
            path: '/learning',
            name: 'Khai báo dữ liệu',
            section: '',
            icon: <AiOutlineLineChart className="menu__link-icon" />,
        },
        {
            path: '/',
            name: 'Hồ sơ học viên',
            section: '',
            icon: <AiOutlineTeam className="menu__link-icon" />,
            subMenu1: [{

                path: '/',
                id: '10',
                name: 'Tất cả hồ sơ',

            },
            {

                id: '20',
                path: '/',
                name: 'Tiếp nhận chuyển trường',

            },
            {

                id: '30',
                path: '/',
                name: 'Bảo lưu',

            },
            ],
        },
        {
            path: '/',
            name: 'Hồ sơ giảng viên',
            section: '',
            icon: <MdOutlineWorkOutline className="menu__link-icon" />,
            subMenu1: [
                {

                    id: '40',
                    path: '/',
                    name: 'Tất cả hồ sơ',

                },
                {

                    id: '50',
                    path: '/',
                    name: 'Phân công giảng dạy',

                },
            ],
        },
        {
            path: '/',
            name: 'Thi cử',
            section: '',
            icon: <BsBook className="menu__link-icon" />,
        },
        {
            path: '/',
            name: 'Cài đặt hệ thống',
            section: '',
            icon: <FiSettings className="menu__link-icon" />,
        },
    ];

    return (
        <div className="menu">
            <Menu mode="inline" style={{ width: 256 }} >
                {
                    itemMenu.map((item, index) => (
                        <Fragment key={index}>
                            <Menu.Item key={index} style={{ marginBottom: '40px' }} >
                                <Link to={item.path}>
                                    <div className="menu__link">
                                        <div className="menu__link-icon">
                                            {item.icon}
                                        </div>
                                        <h3 className={`${index === itemIndex ? 'title-18-black active-menu' : 'title-18-black'}      `} style={{ opacity: 0.7 }}>
                                            {item.name}
                                        </h3>
                                    </div>
                                </Link>
                                {/* <div className="menu__submenu">
                                    {
                                        item.subMenu1 && item.subMenu1.map((itemSub, index) => (
                                            <ul key={itemSub.id} style={{ marginBottom: '0' }}>
                                                <Link to={itemSub.path} >
                                                    <div className="menu__submenu__link" >
                                                        <h3 className="title-16" style={{ marginLeft: '70px' }}>
                                                            {itemSub.name}
                                                        </h3>
                                                    </div>
                                                </Link>
                                            </ul>
                                        ))
                                    }
                                </div> */}
                            </Menu.Item>
                        </Fragment>
                    ))
                }
            </Menu >
        </div>
    );
};

export default Navigation;