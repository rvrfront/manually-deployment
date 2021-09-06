import React,{useContext, useState} from 'react';
import {css} from '@emotion/css';
import {MyContext} from './MyContextProvider';
import {ITitle} from '../core/types';
import HistoryComponent from './History-Component';


export const ColorPickerComponent = () =>
{
    const [state, setState] = useState<ITitle[]>([]);
    const myContext = useContext(MyContext);
    const {red, green, blue} = myContext;
    const min: number = 0;
    const max: number = 255;
    const ColorPickerStyle = css`
    position: relative;
    left: 100px;
    width: 85%;
    height: 450px;
    border: 4px solid black;
    background-color: white;
    padding: 20px;
    margin: 20px;
    display: grid;
    grid-template-rows: repeat(6, 16%);
    grid-template-columns: repeat(8, 12%);
    column-gap: 1rem;
    row-gap: 1rem;
    `;   

    const color = css`
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 5;  
    background-color: rgb(${red}, ${green}, ${blue});
    border: 5px solid black;
    `; 

    const input=css`
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 5;  
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    border: 3px solid black;
    justify-content: space-between;  
    `;
    const tempCollection: ITitle[] = state;
    const pickColor = () =>{
      tempCollection.push({red, green, blue});
      setState(tempCollection);
      console.log("Selected: " + JSON.stringify(state));
    }
    return(
        <div>
            <div className={ColorPickerStyle}>
            
            <div className={color} onClick={()=>pickColor()}></div>
            <div className={input}>
                <label htmlFor="red">Red: </label>
                <input type="range" name="red" id="red" min={min} max= {max} onChange={e => myContext.setRed(parseInt(e.target.value))}/>
                <label htmlFor="green">Green: </label>
                <input type="range" name="green" id="green" min={min} max={max} onChange={e => myContext.setGreen(parseInt(e.target.value))}/>
                <label htmlFor="blue">Blue: </label>
                <input type="range" name="blue" id="blue" min={min} max={max} onChange={e => myContext.setBlue(parseInt(e.target.value))}/>
            </div> 
        </div>
        <HistoryComponent {...{collection: state}}></HistoryComponent>
        </div>
    );
};

