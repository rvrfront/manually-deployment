import React, {useContext} from 'react';
import {css} from '@emotion/css';
import {MyContext} from './MyContextProvider';


const style = css`
    @import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");
    font-family: 'Architects Daughter', cursive;
    position: relative;
    left: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 120px;
    border: 4px solid black;
    background-color: white;
    h3
    {
        font-size: 1.5em;
    }
`;

const TitleComponent = () =>
{
    const myContext = useContext(MyContext);
    const {red, green, blue} = myContext;
 
    const color = css`
        color: rgb(${red}, ${green}, ${blue})
    `;
    return(
        <div className={style}>
            <h3 className={color}>
                {`The selected colour is: ${red}, ${green}, ${blue}`}
            </h3>
        </div>
    );
};

TitleComponent.defaultProps = {
    red: 248,
    green: 65,
    blue: 26,
};

export default TitleComponent;