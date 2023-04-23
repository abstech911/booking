import React from 'react'
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import styles from './Home.module.css'
import {Featured} from "../../component/featured/Featured";
import PropertyList from "../../component/propertylist/PropertyList";
import {FavoriteProperty} from "../../component/favoriteproperties/FavoriteProperty";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <div className={styles.homeContainer}>
                <Featured />
                <h1 className={styles.homeTitle}>Browse by property type</h1>
                <PropertyList />
                <h1 className={styles.homeTitle}>Home guest love</h1>
                <FavoriteProperty />
            </div>

        </>
    )
}

export default Home
