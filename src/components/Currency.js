import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import '../App.css'

const Currency = () => {
    
    const { dispatch, currency } = useContext(AppContext);

    let currencyText = [];
    currencyText['$'] = "$ (Dollar)";
    currencyText['€'] = "€ (Euro)";
    currencyText['£'] = "£ (Pound)";
    currencyText['¥'] = "¥ (Yuan)";
        
    const handleChange = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
      };    

    return (
        

            
            <DropdownButton title={`Currency: ${currencyText[currency]}`} variant="success" onSelect={eventKey => handleChange(eventKey)}>
                <Dropdown.Item  active={currency==='$'} eventKey="$" className="dropdown-item">{currencyText['$']}</Dropdown.Item>
                <Dropdown.Item  active={currency==='€'} eventKey="€" className="dropdown-item">{currencyText['€']}</Dropdown.Item>
                <Dropdown.Item  active={currency==='£'} eventKey="£" className="dropdown-item">{currencyText['£']}</Dropdown.Item>
                <Dropdown.Item  active={currency==='¥'} eventKey="¥" className="dropdown-item">{currencyText['¥']}</Dropdown.Item>
            </DropdownButton>

        
    );
};
export default Currency;