import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <span className={styles.logo}>Bookings</span>
                <div className={styles.navbarItems}>
                    <button className={styles.navbarButton} type='button'>Register</button>
                    <button className={styles.navbarButton} type='button'>Login</button>
                </div>
            </div>

        </div>
    )
}
export default Navbar
