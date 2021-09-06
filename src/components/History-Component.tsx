import React from 'react';
import {css} from '@emotion/css';
import {IHistory} from '../core/types';

export const HistoryComponent: React.FC<IHistory> = (props) =>
{
    const {collection} = props;
    const container = css`
         @import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");
        font-family: 'Architects Daughter', cursive;
        position: relative;
        left: 100px;
        width: 85%;
        height: 250px;
        padding: 20px;
        margin: 20px;
        border: 5px solid black;
        background-color: white;
    `;
    const list = css`
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style-type: none;
    `;
    return(
        <div className={container}>
            <h3>
                You selected this colours:
            </h3>
            <ul className={list}>
                {
                    collection.map((item, index)=>{
                        let {red, green, blue} = item;
                        return(
                            <li key={index}>
                            <div style={{width: "100%",height: "170px", margin: "5px", border: "2px solid black", backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>

                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default HistoryComponent; 