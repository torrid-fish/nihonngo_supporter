import React from 'react';

import TestForm from 'components/TestForm.jsx';
import 'components/Test.css';

export default function Test(props) {
    return <>
        <main className='test'>
            <div className='wrap'>
                {[...Array(6)].map((_, index) => 
                    <TestForm key={index} editKey={index}/>
                )}
            </div>
        </main>
    </>;
}