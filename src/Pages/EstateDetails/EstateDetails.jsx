import React, { useContext, } from 'react';
import { DataContext } from '../../Provider/DataContextProvider';
import { useParams } from 'react-router-dom';

const EstateDetails = () => {

    const data = useContext(DataContext);
    const inputId = useParams();
    const idInt = parseInt(inputId.id)
    const resultData = data.find(data => data.id === idInt);
    console.log(inputId, idInt );
    console.log(data);
    if (resultData) {
        const { title, price, status, area, image } = resultData;
        return (
            <div>
                <img src={image} alt="" />
            </div>
        );

    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
    
};

export default EstateDetails;