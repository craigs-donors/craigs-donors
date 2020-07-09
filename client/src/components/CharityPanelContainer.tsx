import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharityPanelContainer.css';
import charity  from '../api/charity';
import cause from '../api/cause';

interface CharityPanelContainerProps {
  orgID: number
}

const handleRender = (data, err, field) => {
  return data ? data[field] : (err ? err : "undefined. loading...")
}

const CharityPanelContainer: React.FC<CharityPanelContainerProps> = props => {

  const [ data, setData ] = useState(undefined);
  const [ error, setError ] = useState(undefined);
  
  !(data || error) && charity.getById(props.orgID).then(setData).catch(setError);
  
  return (
    <Fragment>
      <h1>{handleRender(data, error, 'charityName')}</h1>
      <p>{handleRender(data, error, 'mission')}</p>
      <button>Donate</button>
    </Fragment>
    );
};

export default CharityPanelContainer;
