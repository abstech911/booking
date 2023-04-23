import styles from './FavoriteProperty.module.css'

export const FavoriteProperty = () => {

    return (
        <div className={styles.fp}>
            <div className={styles.fpItem}>
                <img src={links.jeddah} alt='dynamic' className={styles.fpImg}/>
                <span className={styles.fpName}>Apartment name skmsn</span>
                <span className={styles.fpCity}>Abuja</span>
                <span className={styles.fpPrice}>$120</span>
                <div className={styles.fpRating}>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.fpItem}>
                <img src={links.dallas} alt='dynamic' className={styles.fpImg}/>
                <span className={styles.fpName}>Apartment name skmsn</span>
                <span className={styles.fpCity}>Abuja</span>
                <span className={styles.fpPrice}>$120</span>
                <div className={styles.fpRating}>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.fpItem}>
                <img src={links.winnipeg} alt='dynamic' className={styles.fpImg}/>
                <span className={styles.fpName}>Apartment name skmsn</span>
                <span className={styles.fpCity}>Abuja</span>
                <span className={styles.fpPrice}>$120</span>
                <div className={styles.fpRating}>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}


const links = {
    jeddah: "https://cf.bstatic.com/xdata/images/city/300x240/688581.jpg?k=711dd2c765429c60278692d1b68316c214efd7cc47a706e300e8e7635301c038&o=",
    dallas: "https://cf.bstatic.com/xdata/images/city/300x240/976891.jpg?k=a338d6d7d70db6b8a90b2634f7b84801d68a9c2d036b7a41d5d32a73503001f1&o=",
    winnipeg: "https://cf.bstatic.com/xdata/images/city/300x240/972544.jpg?k=93de5d7dc8eb743de9a6d2ead889a01f68ae59633bef73b66a9ec4daad562fc8&o=",


}