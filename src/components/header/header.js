import React, {useState, useEffect} from 'react'
import {ReactComponent as ArrowDown} from "../../icons/arrow.svg";
import {ReactComponent as Add} from "../../icons/add.svg";
import {ReactComponent as Search} from "../../icons/search.svg";
import {ReactComponent as Clock} from "../../icons/clock.svg";
import {ReactComponent as Theme} from "../../icons/theme.svg";
import {ReactComponent as Task} from "../../icons/notes.svg";
import {ReactComponent as Notification} from "../../icons/notification.svg";
import {ReactComponent as Profile} from "../../icons/profile.svg";
import Button from "../button/button";

import styles from './header.module.scss'


export default function Header() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
        return ()=>{

        }
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.leftSide}>
                <div className={styles.account}>
                    <div className={styles.initials}>SC</div>
                    <div className={styles.name}>Sydney Clinic
                        <div className={styles.arrow}>
                            <ArrowDown/>
                        </div>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <p className={styles.activeTab}>
                        5 tabs active
                    </p>
                    <div className={styles.arrow}>
                        <ArrowDown/>
                    </div>
                </div>
                <Button type={'blank'} className={styles.action}>
                    <Add/>
                </Button>
                <Button type={'blank'} className={styles.action}>
                    <Search/>
                </Button>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.time}>
                    <div className={styles.icon}><Clock/></div>
                    <p>
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                    </p>
                </div>
                <div className={styles.icon}><Theme/></div>
                <div className={styles.icon}><Task/></div>
                <div className={styles.icon}><Notification/></div>
                <div className={styles.icon}><Profile/></div>

            </div>
        </div>
    )
}