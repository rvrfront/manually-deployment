import React, {useState, createContext} from 'react';
import {IContext} from '../core/types';

export const MyContext = createContext<IContext>({
    red: 53,
    green: 95,
    blue: 236,
    setRed: (val: number)=>{},
    setGreen: (val:number)=>{},
    setBlue: (val:number)=>{},
});

export const MyContextProvider = (props: any) =>
{
    const [red, setRed] = useState<number>(53);
    const [green, setGreen]=useState<number>(95);
    const [blue, setBlue] = useState<number>(236);
    return(
        <div>
            <MyContext.Provider value= {{red: red, green: green, blue: blue, setRed: setRed, setGreen: setGreen, setBlue: setBlue}}>
                {
                    props.children
                }
            </MyContext.Provider>
        </div>
    );
};
