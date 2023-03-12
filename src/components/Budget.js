import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { dispatch, budget, currency } = useContext(AppContext);

    const handleChange = (e) => {
        if (isNaN(e.target.value)) {
            return            
        }else{            
            const onlyNums = parseInt(e.target.value);            
            if (!isNaN(onlyNums)){
                const parte = (onlyNums > budget) ? 10 : -10;
                dispatch({
                    type: 'SET_BUDGET',
                    payload: (budget + parte),
                });
            }            
        }        
      };    

    return (
        <div className='alert alert-secondary'>

            <span>Budget: {currency} 

            <input
                required='required'
                type='number'
                id='cost'
                value={budget}
                style={{ width: '170px', marginLeft: '1rem'}}
                onChange={(event) => handleChange(event)}
                >
            </input>            

            </span>
        </div>
    );
};
export default Budget;