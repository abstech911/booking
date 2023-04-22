import React, {useState} from 'react'
import styles from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/Modal";
import DateRange from "react-date-range/dist/components/DateRange";
import {addDays} from "date-fns";

const Header = () => {

    const [modal, setModal] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);


    return (
        <>

            <Modal value={[modal, setModal]} >

                <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    minDate={addDays(new Date(), 0)}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className={styles.date}
                />
                <button type='button' onClick={()=> setModal(false)} className={`${styles.headerButton} ${styles.btnColorRed}`}>close</button>
            </Modal>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerList}>
                        <div className={`${styles.headerListItem} ${styles.active}`}>
                            <FontAwesomeIcon icon={faBed}/>
                            <span>Stays</span>
                        </div>
                        <div className={styles.headerListItem}>
                            <FontAwesomeIcon icon={faCar}/>
                            <span>Car rentals</span>
                        </div>
                        <div className={styles.headerListItem}>
                            <FontAwesomeIcon icon={faPlane}/>
                            <span>Flight</span>
                        </div>
                        <div className={styles.headerListItem}>
                            <FontAwesomeIcon icon={faTaxi}/>
                            <span>Airport Taxis</span>
                        </div>
                        <div className={styles.headerListItem}>
                            <FontAwesomeIcon icon={faBed}/>
                            <span>Attraction</span>
                        </div>
                    </div>
                    <h1 className={styles.headerTitle}>
                        A lifetime of discount? It's Genius
                    </h1>
                    <p className={styles.headerDescription}>
                        Get rewarded for your travels - unlock instant savings of 10% or more when using booking
                    </p>
                    <button className={styles.headerButton}>Sign in / Register</button>
                    <div className={styles.headerSearch}>
                        <div className={styles.headerSearchItem}>
                            <FontAwesomeIcon icon={faBed} className={styles.headerIcon}/>
                            <input
                                type='text'
                                placeholder='Where are you going?'
                                className={styles.headerSearchInput}
                            />
                        </div>
                        <div className={styles.headerSearchItem}>
                            <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon}/>
                            <span className={styles.headerSearchText} onClick={()=> setModal(true)}>date to date</span>
                            {/*<Calendar date={new Date()} onChange={handleDateChange}   />*/}
                        </div>
                        <div className={styles.headerSearchItem}>
                            <FontAwesomeIcon icon={faPerson} className={styles.headerIcon}/>
                            <span className={styles.headerSearchText}>
                            1adult 2 children 1room
                        </span>
                        </div>
                        <div className={styles.headerSearchItem}>
                            <button className={`${styles.headerButton} ${styles.btnColorGreen}`}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header
