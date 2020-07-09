import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import './CharityPanelContainer.css';
import charity  from '../api/charity';
import cause from '../api/cause';

interface ContainerProps {

};

interface GetCharityDataProps {
  orgID: number
}

const GetCharityData: React.FC<GetCharityDataProps> = props => {

  const [ data, setData ] = useState(undefined);
  const [ error, setError ] = useState(undefined);
  
  !(data || error) && charity.getById(props.orgID).then(setData).catch(setError);
  
  return data ? data.organization.charityName : (error ? error : "undefined");
};

const CharityPanelContainer: React.FC<ContainerProps> = props => {
  return (
    <Fragment>
      Data is <GetCharityData orgID={6026}> </GetCharityData>
    </Fragment>
  );
}

export default CharityPanelContainer;
