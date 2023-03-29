import Image from "next/image";
import styles from "../styles/About.module.scss";


export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>PokeNext é um App construído em Next.js para consultar Pokémons.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis temporibus sit aliquam doloribus officia magnam at fugit earum! Expedita odit iusto culpa delectus nostrum, id nam corporis ut ratione.</p>
            <Image src="/images/charizard.png" alt="Imagem do charizard" width={500} height={500} />
        </div>
    )
}