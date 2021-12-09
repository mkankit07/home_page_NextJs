import styles from "./statusbar.module.css"
import Image from "next/image"

export default function statuLayout(props){
    return (
        <>
             <div className={styles.status_card } >
                    <div className={styles.profile_pic}><Image src={props.image} alt="" width={70} height={70} /></div>
                    <p className={styles.username}>{props.user_name}</p>
                  </div>
        </>
    )
}