import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharitiesPage.css';
import CharityPanelContainer from '../components/CharityPanelContainer';

interface CharitiesPageProps {

};

const CharitiesPage: React.FC<CharitiesPageProps> = props => {
    const orgIDs = [
        6026,
        6616,
        7713,
        7716,
        7770,
        8982,
        12100,
        12270,
        14732,
        17460,
        17765
    ]
    return (
        <Fragment>
            <ul>
            {orgIDs.map((elem,index) => 
                <li key={index}>
                <CharityPanelContainer orgID={elem}></CharityPanelContainer>
                </li>
            )}
            </ul>
        </Fragment>
    );
}

export default CharitiesPage;
