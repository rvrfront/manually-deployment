import React from 'react';
import {css} from '@emotion/css';
import TitleComponent from './Title-Component';
import {ColorPickerComponent} from './Color-Picker-Component';
import {MyContextProvider} from './MyContextProvider';

const containerStyle = css`
    width: 100%;
    height: 1200px;
    border: 5px solid darkgrey;
    background-color: rgb(156, 177, 249);
    padding: 25px;
`;

const Container = () =>
{
    return(
        <div className={containerStyle}>
            <MyContextProvider>
                <TitleComponent></TitleComponent>
                <ColorPickerComponent></ColorPickerComponent>
            </MyContextProvider>
        </div>
    );
};

export default Container;