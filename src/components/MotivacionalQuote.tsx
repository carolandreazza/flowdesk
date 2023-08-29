'use client'

import React, { useState } from "react"

const MotivacionalQuote = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    fetch("../api/quote")
    .then(response => response.json())
        .then(data =>{
            setQuote(data.data.contents.quotes[0].quote)
            setAuthor(data.data.contents.quotes[0].author)
        })
        .catch(error => {
            console.log('Error fetching quote:', error)
            setQuote('Error fetching quote.')
        });

    return (
        <div className="motivational-quote">
            <p className="text-white text-2xl font-medium drop-shadow-lg shadow-black">"{quote}"</p>
            <p className="text-white text-2sm text-center drop-shadow-lg shadow-black">{author}</p>
        </div>       
    );
}

export default MotivacionalQuote;