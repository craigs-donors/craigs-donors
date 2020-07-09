import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharityPanelContainer.css';
import charity  from '../api/charity';
import cause from '../api/cause';

interface ContainerProps {

}

const GetCharityData: React.FC<ContainerProps> = props => {

  const [ data, setData ] = useState(undefined);
  const [ error, setError ] = useState(undefined);
  
  !(data || error) && charity.getById(6026).then(setData).catch(setError);
  
  return data ? data.organization.charityName : (error ? error : "undefined");
};

const CharityPanelContainer: React.FC<ContainerProps> = props => {
  return (
    <Fragment>
      Data is <GetCharityData> </GetCharityData>
    </Fragment>
  );
}

export default CharityPanelContainer;
