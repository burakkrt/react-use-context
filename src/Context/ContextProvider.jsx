import {createContext, useState} from "react";
import {categories} from "./data.jsx";

export const Context = createContext(null);
// eslint-disable-next-line react/prop-types
export default function ContextProvider({children}) {

    const [categoryScore, setCategoryScore] = useState(categories);

    const data = {
        categoryScore,
        setCategoryScore
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
}