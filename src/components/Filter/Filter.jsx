import React from "react";
import "./Filter.css";
import PropTypes from 'prop-types';

 const Filter = ({onChange, value}) => {
    
    return (
        <div>
            <label className="filter">Find contacts by name
                <input 
                 value={value} 
                 className="filter_input"
                 name="filter" 
                 type="text"
                 onChange={onChange}/>
            </label>
        </div>
        
    )

}

Filter.propTypes={
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Filter