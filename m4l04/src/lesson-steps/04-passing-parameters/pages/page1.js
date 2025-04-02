import React from 'react';
import { useParams } from 'react-router';

export default function Page1()
{
    const params  = useParams();

    return (
        <div className="container px-4 py-4 text-start">
 
            <h2 className="pb-2 border-bottom">Page 1</h2>
            <p>This is a page 1.</p>
            <p>{params.param1 !== undefined ?`param1 is ${params.param1}` :null} </p>
            <p>{params.param2 !== undefined ?`param2 is ${params.param2}` :null} </p>
        </div>
    );
}