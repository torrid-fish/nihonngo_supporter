import React from 'react';

import EditableStr from 'components/EditableStr.jsx';
import 'components/TestPage.css';

export default function TestPage(props) {
    return <>
        <main className='test'>
            <p className='wrap'>
                {[...Array(25)].map((_, index) => 
                    <EditableStr key={index} editKey={index}/>
                )}
            </p>
        </main>
    </>;
}