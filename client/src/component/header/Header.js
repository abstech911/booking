import React from 'react'
import styles from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns";

const Header = (props) => {

    // eslint-disable-next-line
    const [modal, setModal] = props.dateModalControl;
    //eslint-disable-next-line
    const [state, setState] = props.dateModalState


    // eslint-disable-next-line
    const [openOptions, setOpenOptions] = props.optionControl;

    // eslint-disable-next-line
    const [options, setOptions] = props.optionState;


    return (
        <>
            <div className={styles.header}>
                <div className={`${styles.headerContainer}  ${props.list ? styles.headerContainerMargin : ''} `}>
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
                    {props.type !== 'list' && (<>

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
                                <span className={styles.headerSearchText}
                                      onClick={() => setModal(true)}>{`${format(state[0].startDate, "dd/MM/yyyy")} to ${format(state[0].endDate, "dd/MM/yyyy")} `}</span>
                                {/*<Calendar date={new Date()} onChange={handleDateChange}   />*/}
                            </div>
                            <div className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faPerson} className={styles.headerIcon}/>
                                <span onClick={() => setOpenOptions(true)} className={styles.headerSearchText}>
                            {`${options.adult} adults ${options.children} children ${options.room} room `}
                        </span>
                            </div>
                            <div className={styles.headerSearchItem}>
                                <button className={`${styles.headerButton} ${styles.btnColorGreen}`}>Search</button>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
        </>
    )
}
export default Header
