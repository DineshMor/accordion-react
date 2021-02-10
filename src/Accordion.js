import React from 'react';

import Questions from './Data';
import AccordionItem from './AccordionItem';

const Accordion = () => {
    const AccordionJSX = Questions.map(question => {
        console.log(question);
        return <AccordionItem key={question.id} { ...question } />
    });

    return(
        <ul className='accordion'>
            { AccordionJSX }
        </ul>
    );
}
export default Accordion;
