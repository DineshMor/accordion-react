import React, { useState } from 'react';

const AccordionItem = ({ title, info }) => {
    const [ showInfo, setshowInfo ] = useState(false);
    return(
        <li>
            <h2>
                { title }
                <button onClick={()=> setshowInfo(!showInfo) }>
                    { showInfo ? '-' : '+' }
                </button>
            </h2>
            { showInfo && <p> { info }</p>  }
        </li>
    );
}

export default AccordionItem;