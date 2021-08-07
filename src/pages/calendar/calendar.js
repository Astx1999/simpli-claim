import React, {useEffect, useState} from 'react'
import CalendarActionBar from "../../components/calendar-action-bar/calendar-action-bar";
import axios from "axios";
import PatientBox from "../../components/patient-box/patient-box";
import useWindowResize from "../../hooks/use-window-resize/use-window-resize";
import styles from './calendar.module.scss'


const week = [
    {
        dayNumber: '08',
        weekDayName: 'Monday'
    },
    {
        dayNumber: '09',
        weekDayName: 'Tuesday'
    },
    {
        dayNumber: '10',
        weekDayName: 'Wednesday'
    },
    {
        dayNumber: '11',
        weekDayName: 'Thusday'
    },
    {
        dayNumber: '12',
        weekDayName: 'Friday'
    },
    {
        dayNumber: '13',
        weekDayName: 'Saturday'
    },
    {
        dayNumber: '14',
        weekDayName: 'Sunday'
    }
]
const Calendar = () => {
    const {width} = useWindowResize()
    const [data, setData] = useState(null);
    const [dateState, setDateState] = useState(new Date());
    const [time, setTime] = useState()
    useEffect(() => {
        axios
            .get("/api/data.json")
            .then(response => {
                setData(response.data);
            });


    }, []);
    useEffect(() => {
        const interval = setInterval(() => setDateState(new Date()), 30000);
        const format = dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })
        setTime(format.replace(/[A-Z]*(\d*)[A-Z]/g, ''))
        return () => {
            clearInterval(interval)
        }
    }, []);

    const getQuarterHeight = () => {
        if (width <= 1280) {
            return (((dateState.getHours() - 9) * 4 * 28) + ((dateState.getMinutes() / 60) * 28 * 4) + 38)

        }
        if (width <= 1440) {
            return (((dateState.getHours() - 9) * 4 * 50) + ((dateState.getMinutes() / 60) * 50 * 4) + 38)
        }
        if (width <= 2160 || width >= 2160) {
            return (((dateState.getHours() - 9) * 4 * 70) + ((dateState.getMinutes() / 60) * 70 * 4) + 38)
        }
    }
    return (
        <div className={styles.root}>
            <CalendarActionBar/>
            <div className={styles.title}>
                <p className={styles.name}>Dr Sherry White</p>
                <div className={styles.tabs}>
                    <div>Week</div>
                    <div>Month</div>
                </div>
            </div>

            <div className={styles.events}>
                {(dateState.getHours() <= 23 && dateState.getMinutes() <= 59) ?
                    <div className={styles.line}
                         style={{top: `${getQuarterHeight()}px`}}>
                        <div className={styles.time}>
                            {time}
                        </div>
                    </div>
                    : ''}


                <div className={styles.weekDays}>
                    {data && data.days.map((day, index) => {
                        return (
                            <div key={index} className={styles.weekDay}>
                                <div className={styles.number}>
                                    {week[index].dayNumber}
                                </div>
                                <div className={styles.weekDayName}>
                                    {week[index].weekDayName}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.hourColumns}>
                    {data && data.days.map((day, index) => {
                        return index === 0 && (
                            <div key={index} className={styles.hourColumn}>
                                <div className={styles.hour}/>
                                {
                                    day.hours.map((hour, i) => {
                                        return i + 9 === 12 ? (

                                            <div key={i} className={styles.hour}>
                                                {i + 9 + 'PM'}
                                            </div>

                                        ) : (

                                            <div key={i} className={styles.hour}>
                                                {`${i + 9 > 12 ? i - 3 + 'PM' : i + 9 + 'AM'}`}
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                </div>


                <div className={styles.dayColumns}>
                    {data && data.days.map((day, index) => {
                        return (
                            <div key={index} className={styles.dayColumn}>{
                                day.hours.map((hour, i) => {
                                    return (
                                        <div key={i} className={styles.hourBlock}>
                                            {
                                                hour.quarters.map((quarter, j) => {
                                                    return (
                                                        <div key={j}
                                                             className={`${styles.quarter} ${quarter.break ? styles.breakQuarter : ''}`}>
                                                            {(!!quarter && !quarter.break) &&
                                                            <PatientBox icon={quarter.icon}
                                                                        name={quarter.name}
                                                                        desc={quarter.desc}
                                                                        color={quarter.color}
                                                            />
                                                            }
                                                            {quarter.break ?
                                                                <div className={`${styles.break} `}>
                                                                    {quarter.status === 'start' ?
                                                                        <div className={styles.start}>
                                                                            <p className={styles.text}>BREAK</p>
                                                                            <p className={styles.breakTime}>12:15PM -
                                                                                1:30PM
                                                                                •
                                                                                90mins</p>
                                                                        </div>
                                                                        : ''}

                                                                </div> : ''}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}
export default Calendar