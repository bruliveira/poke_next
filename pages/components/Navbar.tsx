import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <nav>
            <div>
                <Image  
                    src="/images/images.pokeball.png" 
                    width="30"
                    height="30"
                    alt="PokeNext"
                />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link legacyBehavior href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}