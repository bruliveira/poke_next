import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Card from '../components/Card'


export async function getStaticProps() {

  const maxPokemons = 200
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  //Requisição
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //Add pokemon index
  data.results.forEach((item:any, index:any) => {
    item.id = index + 1
  })

  return {
    props:{
      pokemons: data.results,
    },
  }

  
}

export default function Home({pokemons}:any) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="PokeNext"/>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon:any) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
          //<p key={pokemon.id}>{pokemon.id} - {pokemon.name}</p>
        ))}
      </div>
    </>
  )
}
