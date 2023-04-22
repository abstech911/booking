import React from 'react'
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import styles from './Home.module.css'
import {Featured} from "../../component/featured/Featured";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <div className={styles.homeContainer}>
                <Featured />
            </div>

        </>
    )
}

export default Home
