import React from 'react'

import styles from './patient-box.module.scss';

const PatientBox = ({name, desc, icon, color}) => {
    return(
        <div className={styles.root}>
            <div className={styles.status} style={{backgroundColor: color}}/>
            <img className={styles.icon} src={icon} alt=""/>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}
export default PatientBox