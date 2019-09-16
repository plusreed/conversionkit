import React from 'react';
import faqs from '../data/faq';

const WhyUse = () => (
    <div className="p-4">
        {faqs.map(faq => (
            <div key={faq.id}>
                <h1 className="font-bold text-2xl">{faq.question}</h1>
                <p className="font-normal text-md">{faq.answer}</p>
            </div>
        ))}
    </div>
);

export default WhyUse;