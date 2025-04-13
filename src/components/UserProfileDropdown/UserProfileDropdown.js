import React, { useState, useContext } from 'react';
import { Dropdown } from 'antd';
import { User, Logout, Settings } from '../Icons/Icons';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import classes from './UserProfileDropdown.module.css';

const UserProfileDropdown = ({ dark }) => {
    const [visible, setVisible] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };

    const handleMenuItemClick = (action) => {
        switch(action) {
            case 'profile':
                navigate('/profile');
                break;
            case 'settings':
                navigate('/settings');
                break;
            case 'logout':
                logout();
                navigate('/login');
                break;
            default:
                break;
        }
        setVisible(false);
    };

    const menu = (
        <div className={`${classes.menu} ${dark ? classes.dark : ''}`}>
            <div className={classes.menuItem} onClick={() => handleMenuItemClick('profile')}>
                <User />
                <span>My Profile</span>
            </div>
            <div className={classes.menuItem} onClick={() => handleMenuItemClick('settings')}>
                <Settings />
                <span>Settings</span>
            </div>
            <div className={classes.menuItem} onClick={() => handleMenuItemClick('logout')}>
                <Logout />
                <span>Logout</span>
            </div>
        </div>
    );

    return (
        <Dropdown
            overlay={menu}
            onVisibleChange={handleVisibleChange}
            visible={visible}
            placement="bottomRight"
            trigger={['click']}
            overlayClassName={classes.dropdown}
        >
            <div className={`${classes.profileButton} ${dark ? classes.dark : ''}`}>
                <div className={classes.userAvatar}>
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
            </div>
        </Dropdown>
    );
};

export default UserProfileDropdown; 