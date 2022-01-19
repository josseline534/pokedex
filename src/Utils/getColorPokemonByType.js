import { POKEMON_TYPE_COLORS } from "./constants";

const getColorPokemonByType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorPokemonByType;
