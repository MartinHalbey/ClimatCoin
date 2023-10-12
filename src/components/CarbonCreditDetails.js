import React, { useState, useEffect } from 'react';

function CarbonCreditDetails(props) {
    const [credit, setCredit] = useState(null);
    
    useEffect(() => {
        // Fetch the specific carbon credit's details based on the ID passed via props.
        // Assuming a backend endpoint exists to provide this data.
        fetch(`/api/marketplace/${props.match.params.id}`)
            .then(response => response.json())
            .then(data => setCredit(data))
            .catch(error => console.error("Error fetching carbon credit details:", error));
    }, [props.match.params.id]);
    
    return (
        <div className="container">
            {credit ? (
                <>
                    <h1>{credit.name}</h1>
                    <p>Amount: {credit.amount}</p>
                </>
            ) : (
                <p>Loading credit details...</p>
            )}
        </div>
    );
}

export default CarbonCreditDetails;
