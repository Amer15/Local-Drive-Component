import React from 'react';
import './SubFolder.css';

const SubFolder = props => {
    return(
        <div className='sub-folder'>
          <h4>{props.name}</h4>
        </div>
    )
}

export default SubFolder;