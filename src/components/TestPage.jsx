import React, { useState } from 'react';

import EditableStr from 'components/EditableStr.jsx';
import 'components/TestPage.css';

export default function TestPage(props) {
    const text = ['Lorem ', 'ipsum ', 'dolor ', 'sit ', 'amet ', 'consectetur ', 'adipisicing ', 'elit. ', 'Sapiente ', 'voluptas ', 'inventore ', 'nesciunt ', 'molestias ', 'tempora ', 'mollitia ', 'aliquam ', 'ea ', 'cum ', 'neque ', 'a ', 'numquam ', 'aspernatu r, ', 'eaque ', 'natus ', 'veritatis ', 'ducimus ', 'veniam? ', 'Recusanda e, ', 'mollitia ', 'sunt?']
    
    const [data, setData] = useState(
        [...text.map((t, i) => {
            return {text: t, editKey: i}
        })]
    )

    let editKey = text.length;

    const insert = (index, toFront) => {
        let newData = data;
        newData.splice(
            index + 1 - toFront, 0,
            {text: 'let it auto expand later ', editKey: editKey++}
        );
        if (data.length == newData.length)
            alert('wtf')
        setData(newData);
    }

    return <>
        <main className='test'>
            <div className='wrap'>
                {data.map((d, index) => 
                    <EditableStr key={index} editKey={d.editKey} content={d.text} insert={toFront => {insert(index, toFront)}}/>
                )}
            </div>
        </main>
    </>;
}