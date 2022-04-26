import React, { useEffect, useState } from 'react';
const axios = require('axios')

const Services = () => {
    const [services, setServices] = useState([])

    console.log(services);
    useEffect(()=> {
        axios.get('http://localhost:5000/services')
        .then(res => {
            setServices(res.data);
        })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Services;