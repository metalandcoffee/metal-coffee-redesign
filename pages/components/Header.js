import Image from 'next/image'
import styles from './Header.module.css'
import Icon from './Icons/Search'
import logo from '../../public/metalcoffeepink.png'

export default function Header() {
    return (
        <header className={styles.container} >
            <Image
                src={logo}
                alt="Metal & Coffee Logo"
            />
            <ul className={styles.nav}>
                <li className="nav__item"><a href="">Home</a></li>
                <li className="nav__item"><a href="">Portfolio</a></li>
                <li className="nav__item"><a href="">Blog</a></li>
                <li className="nav__item"><a href="">Contact</a></li>
            </ul>
            <Icon />
        </header>
    )  
}