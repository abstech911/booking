import React from 'react'
import styles from './PropertyList.module.css'

const PropertyList = () => {
    return (
        <div className={styles.pList}>
            <div className={styles.pListItem}>
                <img src={types.hotels} alt='hotels'/>
                <div className={styles.pListTitle}>
                    <h1>Hotel</h1>
                    <h2> 223 hotels</h2>
                </div>
            </div><div className={styles.pListItem}>
                <img src={types.resorts} alt='resorts'/>
                <div className={styles.pListTitle}>
                    <h1>Resort</h1>
                    <h2> 223 resorts</h2>
                </div>
            </div><div className={styles.pListItem}>
                <img src={types.apartments} alt='apartments'/>
                <div className={styles.pListTitle}>
                    <h1>Apartments</h1>
                    <h2> 223 apartments</h2>
                </div>
            </div>
            <div className={styles.pListItem}>
                <img src={types.villas} alt='villas'/>
                <div className={styles.pListTitle}>
                    <h1>Villas</h1>
                    <h2> 223 villas</h2>
                </div>
            </div>
        </div>
    )
}
export default PropertyList


const types = {
    hotels: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    apartments: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=",
    resorts: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    villas: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=",
}