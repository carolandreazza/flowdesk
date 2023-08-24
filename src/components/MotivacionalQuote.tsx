'use client'

import React, { useState, useEffect } from "react"

const MotivacionalQuote = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    fetch("../api/quote")
    .then(response => response.json())
        .then(data =>{
            console.log('data ',data)
            setQuote(data.data.contents.quotes[0].quote)
            setAuthor(data.data.contents.quotes[0].author)
        })
        .catch(error => {
            console.log('Error fetching quote:', error)
            setQuote('Error fetching quote.')
        });

    return (
        <div className="motivational-quote">
            <p className="text-white text-xl font-semibold">"{quote}"</p>
            <p className="text-white text-sm text-center">{author}</p>
        </div>       
    );
}

export default MotivacionalQuote;