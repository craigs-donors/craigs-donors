import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharityPanelContainer.css';
import charity  from '../api/charity';
import cause from '../api/cause';

interface ContainerProps {

}

const CharityPanelContainer: React.FC<ContainerProps> = props => {

  const [ data, setData ] = useState(undefined);
  const [ error, setError ] = useState(undefined);
  
  !(data || error) && charity.getById(6026)
    .then(result => result.json())
    .then(setData)
    .catch(setError);
  
  return (
    <Fragment>
      <p>Data is {data ? data.organization.charityName : "undefined"}</p>
    </Fragment>
  );
};

export default CharityPanelContainer;
