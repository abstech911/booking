import React, {useState} from 'react'
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import styles from './Home.module.css'
import {Featured} from "../../component/featured/Featured";
import PropertyList from "../../component/propertylist/PropertyList";
import {FavoriteProperty} from "../../component/favoriteproperties/FavoriteProperty";
import {MailList} from "../../component/mailList/MailList";
import Modal from "../../component/modal/Modal";
import DateRange from "react-date-range/dist/components/DateRange";
import {addDays} from "date-fns";
import extend from '../../component/header/Header.module.css'

const Home = () => {
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
                return {...prevState, [name]: value - 1}
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
                Hello

                <div className={extend.options}>
                    <div className={extend.optionItem}>
                        <span className={extend.optionText}>Adult</span>
                        <div className={extend.control}>
                            <button className={extend.optionCounterButton}
                                    disabled={options.children <= 1}
                                    onClick={(e) => decreaseOption(e, "adult")}>-
                            </button>
                            <span className={extend.optionCounterNumber}>{options.adult}</span>
                            <button className={extend.optionCounterButton}
                                    onClick={(e) => increaseOption(e, "adult")}>+
                            </button>
                        </div>

                    </div>
                    <div className={extend.optionItem}>
                        <span className={extend.optionText}>Children</span>
                        <div className={extend.control}>
                            <button className={extend.optionCounterButton}
                                    disabled={options.children <= 0}
                                    onClick={(e) => decreaseOption(e, "children")}>-
                            </button>
                            <span className={extend.optionCounterNumber}>{options.children}</span>
                            <button className={extend.optionCounterButton}
                                    onClick={(e) => increaseOption(e, "children")}>+
                            </button>
                        </div>

                    </div>
                    <div className={extend.optionItem}>
                        <span className={extend.optionText}>Room</span>
                        <div className={extend.control}>
                            <button className={extend.optionCounterButton}
                                    disabled={options.children <= 1}
                                    onClick={(e) => decreaseOption(e, "room")}>-
                            </button>
                            <span className={extend.optionCounterNumber}>{options.room}</span>
                            <button className={extend.optionCounterButton}
                                    onClick={(e) => increaseOption(e, "room")}>+
                            </button>
                        </div>

                    </div>
                </div>

                <button type='button' onClick={() => setOpenOptions(false)}
                        className={`${extend.headerButton} ${extend.btnColorRed}`}>close
                </button>
            </Modal>

            <Modal value={[modal, setModal]}>
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    minDate={addDays(new Date(), 0)}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className={extend.date}
                />
                <button type='button' onClick={() => setModal(false)}
                        className={`${extend.headerButton} ${extend.btnColorRed}`}>close
                </button>
            </Modal>
            <Navbar/>
            <Header dateModalState={[state, setState]} dateModalControl={[modal, setModal]}
                    optionState={[options, setOptions]} optionControl={[openOptions, setOpenOptions]}
            />
            <div className={styles.homeContainer}>
                <Featured/>
                <h1 className={styles.homeTitle}>Browse by property type</h1>
                <PropertyList/>
                <h1 className={styles.homeTitle}>Home guest love</h1>
                <FavoriteProperty/>
                <MailList/>
            </div>

        </>
    )
}

export default Home
