import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharitiesPage.css';
import CharityPanelContainer from '../components/CharityPanelContainer';

interface CharitiesPageProps {

};

const CharitiesPage: React.FC<CharitiesPageProps> = props => {
    
    return (
        <Fragment>
            <CharityPanelContainer orgID={6026}>
            </CharityPanelContainer>
            <CharityPanelContainer orgID={6616}>
            </CharityPanelContainer>
        </Fragment>
    );
}

export default CharitiesPage;
