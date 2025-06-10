import HiddenAxew from './assets/hidden_axew.png';
import RevealedAxew from './assets/show_axew.png';

import HiddenLechonk from './assets/hidden_lechonk.png';
import RevealedLechonk from './assets/show_lechonk.png';

import HiddenNuzleaf from './assets/hidden_nuzleaf.png';
import RevealedNuzleaf from './assets/show_nuzleaf.png';

import HiddenRayquaza from './assets/hidden_rayquaza.png';
import RevealedRayquaza from './assets/show_rayquaza.png';

import HiddenRiolu from './assets/hidden_riolu.png';
import RevealedRiolu from './assets/show_riolu.png';

import HiddenSamurott from './assets/hidden_samurott.png';
import RevealedSamurott from './assets/show_samurott.png';

import HiddenSolosis from './assets/hidden_solosis.png';
import RevealedSolosis from './assets/show_solosis.png';

import HiddenSpiritomb from './assets/hidden_spiritomb.png';
import RevealedSpiritomb from './assets/show_spiritomb.png';

import HiddenToxel from './assets/hidden_toxel.png';
import RevealedToxel from './assets/show_toxel.png';

import HiddenZygarde from './assets/hidden_zygard.png';
import RevealedZygarde from './assets/show_zygard.png';


// Colors relate to how hard I think the card is to guess
// Green = easy, Yellow = medium, Red = hard
const CardData = [
    {
        hiddenImg: HiddenAxew,
        revealedImg: RevealedAxew,
        name: 'Axew',
        hint: "Stage one of three for a gen 5 Dragon-type",
        pokedexEntry: "The Tusk Pokemon",
        color: "#A8E6CF"
    },
    {
        hiddenImg: HiddenLechonk,
        revealedImg: RevealedLechonk,
        name: 'Lechonk',
        hint: "A chonky fellow from gen 9",
        pokedexEntry: "The Hog Pokemon",
        color: "#A8E6CF"
    },
    {
        hiddenImg: HiddenNuzleaf,
        revealedImg: RevealedNuzleaf,
        name: 'Nuzleaf',
        hint: "Evolves using a leaf stone, gen 3 Dark/Grass type",
        pokedexEntry: "The Wily Pokemon",
        color: "#FFD3B6"
    },
    {
        hiddenImg: HiddenRayquaza,
        revealedImg: RevealedRayquaza,
        name: 'Rayquaza',
        hint: "Legendary mediator of land and sea from gen 3",
        pokedexEntry: "The Sky High Pokemon",
        color: "#A8E6CF"
    },
    {
        hiddenImg: HiddenRiolu,
        revealedImg: RevealedRiolu,
        name: 'Riolu',
        hint: "Baby form of a gen 4 Fighting type, evolves with friendship",
        pokedexEntry: "The Emanation Pokemon",
        color: "#FFD3B6"
    },
    {
        hiddenImg: HiddenSamurott,
        revealedImg: RevealedSamurott,
        name: 'Samurott',
        hint: "Gen 5 pokemon that is the best water starter evolution",
        pokedexEntry: "The Formidable Pokémon",
        color: "#FFD3B6"
    },
    {
        hiddenImg: HiddenSolosis,
        revealedImg: RevealedSolosis,
        name: 'Solosis',
        hint: "Its not a voltorb, gen 5 Psychic type",
        pokedexEntry: "The Cell Pokémon",
        color: "#FF8B94"
    },
    {
        hiddenImg: HiddenSpiritomb,
        revealedImg: RevealedSpiritomb,
        name: 'Spiritomb',
        hint: "A ghostly pokemon with a unique capture method, gen 4",
        pokedexEntry: "The Forbidden Pokémon",
        color: "#FF8B94"
    },
    {
        hiddenImg: HiddenToxel,
        revealedImg: RevealedToxel,
        name: 'Toxel',
        hint: "A baby pokemon that can be either electric or poison type, gen 8",
        pokedexEntry: "The Baby Pokémon",
        color: "#A8E6CF"
    },
    {
        hiddenImg: HiddenZygarde,
        revealedImg: RevealedZygarde,
        name: 'Zygarde',
        hint: "A legendary pokemon with multiple forms, gen 6",
        pokedexEntry: "The Order Pokémon",
        color: "#FFD3B6"
    }

]

export default CardData;