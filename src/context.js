import React, { createContext, useContext, useReducer } from "react";


export const themeContext=createContext();

const initialState={lightTheme:true}


const themeReducer=(state,action)=>{
    switch(action.type){
        case "toggle":
            return {lightTheme:!state.lightTheme};
            default:
                return state;
    }
}

export const ThemeSetter=(props)=>{
    const[state,dispatch]=useReducer(themeReducer,initialState)

    return(
        <themeContext.Provider value={{state,dispatch}}>
                {props.children}
        </themeContext.Provider>
    );
};



