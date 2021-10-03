import Image from 'next/image'

import webToon from '../../public/webtoon.png'
import styles from './Jumbotron.module.css'
import Instagram from './Icons/Instagram'
import Twitch from './Icons/Twitch'
import Twitter from './Icons/Twitter'
import LinkedIn from './Icons/LinkedIn'
import Facebook from './Icons/Facebook'

export default function Jumbotron() {
    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <ul className={styles.socials}>
                    <li><Instagram /></li>
                    <li><Twitch /></li>
                    <li><Twitter /></li>
                    <li><LinkedIn /></li>
                    <li><Facebook /></li>
                </ul>
                <div className={styles.main}>
                    <h1 className={styles.heading}>Metal DJ, Web Developer, Gamer, Streamer</h1>
                    <hr className=""/>
                    <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu sapien orci. Nam rhoncus dolor eu rutrum malesuada. Quisque maximus eu nisi eget euismod.</p>
                    <div className={styles.buttons}>
                        <button>Check Out My Projects</button>
                        <button className="outline">Explore my Blog</button>
                    </div>
                </div>
                <div className={styles.img_container}>
                    <Image
                        src={webToon}
                        alt="Webtoon of Metal & Coffee"
                    />
                </div>
                
            </div>
        </section>
    )
}