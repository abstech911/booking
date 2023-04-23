import styles from './Featured.module.css';

export const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.featuredItem}>
                <img src={links.london} alt="london"/>
                <div className={styles.featuredTitle}>
                    <h1>Dublin</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img src={links.mecca} alt="Mecca"/>
                <div className={styles.featuredTitle}>
                    <h1>Mecca</h1>
                    <h1>443 Properties</h1>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img src={links.abuja} alt="Mecca"/>
                <div className={styles.featuredTitle}>
                    <h1>Abuja</h1>
                    <h1>125 Properties</h1>
                </div>
            </div>

        </div>
    )
}


const links = {
    london: "https://cf.bstatic.com/xdata/images/city/600x600/613095.jpg?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o=",
    mecca: "https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o=",
    abuja: "https://cf.bstatic.com/xdata/images/city/600x600/822312.jpg?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=",
    ikeja: "https://cf.bstatic.com/xdata/images/city/600x600/815261.jpg?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&o=",
    jeddah: "https://cf.bstatic.com/xdata/images/city/300x240/688581.jpg?k=711dd2c765429c60278692d1b68316c214efd7cc47a706e300e8e7635301c038&o=",
    dallas: "https://cf.bstatic.com/xdata/images/city/300x240/976891.jpg?k=a338d6d7d70db6b8a90b2634f7b84801d68a9c2d036b7a41d5d32a73503001f1&o=",
    winnipeg: "https://cf.bstatic.com/xdata/images/city/300x240/972544.jpg?k=93de5d7dc8eb743de9a6d2ead889a01f68ae59633bef73b66a9ec4daad562fc8&o=",


}
