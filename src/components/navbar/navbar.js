import React from 'react';
import {ReactComponent as Dashboard} from "../../icons/dashboard.svg";
import {ReactComponent as Calendar} from "../../icons/calender.svg";
import {ReactComponent as People} from "../../icons/people.svg";
import {ReactComponent as Mail} from "../../icons/mail.svg";
import {ReactComponent as Reports} from "../../icons/reports.svg";
import {ReactComponent as Setting} from "../../icons/settings.svg";
import styles from './navbar.module.scss'

const items = [
    {
        icon: <Dashboard/>,
        active: false
    },
    {
        icon: <Calendar/>,
        active: true
    },
    {
        icon: <People/>,
        active: false
    },
    {
        icon: <Mail/>,
        active: false
    },
    {
        icon: <Reports/>,
        active: false
    },
    {
        icon: <Setting/>,
        active: false
    }
]
const Navbar = () => {
    return (
        <div className={styles.root}>
            {items.map((item, index) => {
                return (
                    <div key={index}
                         className={`${styles.item} ${item.active ? styles.active : ''}`}
                    >
                        {item.icon}
                    </div>
                )
            })}
        </div>
    )
}
export default Navbar