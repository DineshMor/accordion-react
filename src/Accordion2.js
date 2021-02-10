import React, { useState } from 'react';

import Questions from './Data';

const Accordion2 = () => {
    const [ accordionIndex, setAccordionIndex ] = useState(0);

    const handleAccordion = (index) => {
        setAccordionIndex(index);
    }

    const AccordionJSX = Questions.map((question, index) => {
        const activeClass = index === accordionIndex ? 'active' : '';
        const { id, title, info } = question;
        return (
            <li key={ id }>
                <h2>
                    { title }
                    <button className={ `btn ${activeClass}` } onClick={() => handleAccordion(index) }>+</button>
                </h2>
                <p className={ `info ${activeClass}` }>{ info }</p>
            </li>
        );
    });

    return(
        <>
            <h2 className="heading">Below accordion is auto close if one open</h2>
            <ul className='accordion'>
                { AccordionJSX }
            </ul>
        </>
    );
}
export default Accordion2;
