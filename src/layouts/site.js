import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/header';

import styles from './site.module.scss';
import Navbar from "../components/navbar/navbar";

export default function Site({isLoading, children}) {

    return (
        <>
            <Header/>
            <Navbar/>
            <main className={styles.main}>
                {children}
            </main>

        </>
    );
}

Site.propTypes = {
    children: PropTypes.node.isRequired,
};