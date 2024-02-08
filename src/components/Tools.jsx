import React from 'react';

import 'components/Tools.css';

export default function Tools(props) {
    return <div className='tools'>
        <i className={`fa-solid fa-${props.marked ? 'eraser' : 'marker'}`} onMouseDown={props.toggleMarked}></i>
        <i className="fa-solid fa-plus" onMouseDown={() => props.insert(false)}></i>
    </div>;
}