import React from 'react'
import {ReactComponent as Add} from "../../icons/add.svg";
import {ReactComponent as Task} from "../../icons/task.svg";
import {ReactComponent as Filters} from "../../icons/filters.svg";
import {ReactComponent as NextDate} from "../../icons/next-date.svg";
import {ReactComponent as Calendar} from "../../icons/calender.svg";
import {ReactComponent as Adjust} from "../../icons/adjust.svg";
import {ReactComponent as Settings} from "../../icons/settings.svg";

import Button from "../button/button";

import styles from './calendar-action-bar.module.scss';

const items = [
    {
        icon: <Add/>,
        text: 'New'
    },
    {
        icon: <Task/>,
        text: 'Waitlist'
    },
    {
        icon: <Filters/>,
        text: 'Filters'
    },
    {
        icon: <NextDate/>,
        text: 'Today'
    },
    {
        icon: <Calendar/>,
        text: '08 Mar 2020'
    },
]

const CalendarActionBar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.leftSide}>
                {items.map((item, index) => {
                    return (
                        <Button type={'blank'}
                                key={index}
                                className={styles.button}>
                            <div className={styles.item}>
                                <div className={styles.icon}>{item.icon}</div>
                                <p>{item.text}</p>
                            </div>
                        </Button>
                    )
                })}
            </div>
            <div className={styles.rightSide}>
                <Button type={'blank'} className={styles.button}>
                    <div className={styles.item}>
                        <div className={styles.icon}><Adjust/></div>
                        <p>List</p>
                    </div>
                </Button>
                <Button type={'blank'} className={styles.button}>
                    <div className={styles.item}>
                        <div className={styles.icon}><Settings/></div>
                        <p>More Options</p>
                    </div>
                </Button>
            </div>

        </div>
    )
}
export default CalendarActionBar