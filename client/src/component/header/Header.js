import React, {useState} from 'react'
import styles from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/Modal";
import DateRange from "react-date-range/dist/components/DateRange";
import {addDays, format} from "date-fns";

const Header = () => {

    const [modal, setModal] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1,
    });



    const decreaseOption = (e, name) => {
        const optionKeys = Object.keys(options);
        const optionValues = Object.values(options);

        const keyIndex = optionKeys.findIndex(value => value === name);
        const value = optionValues[keyIndex];
        if ((value - 1) < 0) {
            //    show warning
            alert("Can't go below zero")
        } else {

            setOptions((prevState) => {
                const newState = {
                    ...prevState
                }
                newState[name] = value - 1;
                return newState;
            });

        }
    }
    const increaseOption = (e, name) => {
        const optionKeys = Object.keys(options);
        const optionValues = Object.values(options);

        const keyIndex = optionKeys.findIndex(value => value === name);
        const value = optionValues[keyIndex];
        if ((value + 1) > 10) {
            //    show warning
            alert("Can't go above 10")
        } else {

            setOptions((prevState) => {
                const newState = {
                    ...prevState
                }
                newState[name] = value + 1;
                return newState;
            });

        }
    }

    return (
        <>

            <Modal value={[openOptions, setOpenOptions]}>

                <div className={styles.options}>
                    <div className={styles.optionItem}>
                        <span className={styles.optionText}>Adult</span>
                        <div className={styles.control}>
                            <button className={styles.optionCounterButton}
                                    onClick={(e) => decreaseOption(e, "adult")}>-
                            </button>
                            <span className={styles.optionCounterNumber}>{options.adult}</span>
                            <button className={styles.optionCounterButton}
                                    onClick={(e) => increaseOption(e, "adult")}>+
                            </button>
                        </div>

                    </div>
                    <div className={styles.optionItem}>
                        <span className={styles.optionText}>Children</span>
                        <div className={styles.control}>
                            <button className={styles.optionCounterButton}
                                    onClick={(e) => decreaseOption(e, "children")}>-
                            </button>
                            <span className={styles.optionCounterNumber}>{options.children}</span>
                            <button className={styles.optionCounterButton}
                                    onClick={(e) => increaseOption(e, "children")}>+
                            </button>
                        </div>

                    </div>
                    <div className={styles.optionItem}>
                        <span className={styles.optionText}>Room</span>
                        <div className={styles.control}>
                            <button className={styles.optionCounterButton}
                                    onClick={(e) => decreaseOption(e, "room")}>-
                            </button>
                            <span className={styles.optionCounterNumber}>{options.room}</span>
                            <button className={styles.optionCounterButton}
                                    onClick={(e) => increaseOption(e, "room")}>+
                            </button>
                        </div>

                    </div>
                </div>

                <button type='button' onClick={() => setOpenOptions(false)}
                        className={`${styles.headerButton} ${styles.btnColorRed}`}>close
                </button>
            </Modal>

            <Modal value={[modal, setModal]}>

                <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    minDate={addDays(new Date(), 0)}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className={styles.date}
                />
                <button type='button' onClick={() => setModal(false)}
                        className={`${styles.headerButton} ${styles.btnColorRed}`}>close
                </button>
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
                </div>
            </div>
        </>
    )
}
export default Header
