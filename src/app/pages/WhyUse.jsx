import React from 'react';
import faqs from '../data/faq';

const WhyUse = () => (
    <div className="p-4">
        {faqs.map(faq => (
            <div key={faq.id}>
                <h1 className="font-bold text-2xl" dangerouslySetInnerHTML={{ __html: faq.question }} />
                <p className="font-normal text-md" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
        ))}
    </div>
);

export default WhyUse;