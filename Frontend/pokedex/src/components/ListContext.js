import { createContext } from 'react'; //importing createContext hook 

//exporting a context object called ListContext that stores an array
export const ListContext = createContext({
    pokItems: [],
})