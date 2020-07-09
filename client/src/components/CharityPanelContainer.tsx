import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharityPanelContainer.css';
import charity  from '../api/charity';
import cause from '../api/cause';

interface ContainerProps {
  data: object
};

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
      {handleRender(data, error, 'charityName')}
      <p></p>
      {handleRender(data, error, 'mission')}
    </Fragment>
    );
};

// TEST bench for the above component. When done testing, default export must be CharityPanelContainer.
const CharityPage: React.FC<ContainerProps> = props => {
  return (
    <Fragment>
      <CharityPanelContainer orgID={6026}>
      </CharityPanelContainer>
    </Fragment>
  );
}

export default CharityPage;
