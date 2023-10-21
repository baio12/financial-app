import { getPokemons } from "@/apiClient/operations/pokemons";
import { LANDING_PAGE_CONSTANTS } from "@/src/constants"
import { useEffect, useState } from "react"

export default function Home() {

    const [pokemons, setPokemons] = useState([]);

    const getPokemonsData = async () => {
        try {
            const res = await getPokemons();
            console.log(res);
            setPokemons(res.results)
        } catch (e) {
            console.log('error: ', e);
        }
    }

    useEffect(() => {
        getPokemonsData();
    }, [])
    
    return (
        <section className="w-full p-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="text-blue-900 font-medium">
                    {LANDING_PAGE_CONSTANTS.LANDING_PAGE_TITLE}
                </div>
                <div>
                    {LANDING_PAGE_CONSTANTS.LAST_UPDATE}
                </div>
            </div>
            <h4 className="mt-4">Fetch to API Example: </h4>
            <ul className="text-blue-900">
                {pokemons.length > 0 && pokemons.map(pokemon => (
                    <li key={pokemon.name}>
                        - {pokemon.name}
                    </li>
                ))
                }
            </ul>
        </section>
    )
}