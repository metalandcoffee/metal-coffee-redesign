import styles from './Header.module.css'
import Image from 'next/image'
import logo from '../../public/metalcoffeepink.png'

export default function Header() {
    return (
        <header>
            <Image
                src={logo}
                alt="Metal & Coffee Logo"
            />
            <ul>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contacts</li>
            </ul>
            <Image
                src="/search.svg"
                alt="Search"
                width={50}
                height={50}
            />
        </header>
    )  
}