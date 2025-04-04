import React from 'react';


export default function FriendList(props)
{
    const friends = props.friends;

    const onView = (e) => 
        {
            const id = e.target.parentElement.parentElement.dataset.rowitemid;
            e.rowid = id;

            if (props.onView)
                props.onView(e);
        }
    
 
    return (
        <>
        <div className="row mb-2 text-center">
            <div className="col-md-4 themed-grid-head-col">Name</div>
            <div className="col-md-4 themed-grid-head-col">Address</div>
            <div className="col-md-2 themed-grid-head-col">Born</div>
            <div className="col-md-2 themed-grid-head-col"></div>
        </div>
        {friends.map((row, idx) => (

            //assign the id to the row and the eventhandler from props
            <div className="row mb-2 text-center" key={row.id} data-rowitemid={row.id}>

                <div className="col-md-4 themed-grid-col">
                    {row.firstName} {row.lastName}
                    <div className="col-md-16">{row.email}</div>
                </div>

                <div className="col-md-4 themed-grid-col">
                    {row.address.street}

                    <div className="col-md-16">{row.address.zipCode} {row.address.city}</div>
                    <div className="col-md-16">{row.address.country}</div>
                </div>
                <div className="col-md-2 themed-grid-col">
                    {row.birthDate}
                </div>
                <div className="col-md-2 themed-grid-col">
                    <button onClick={onView} type="button" className="btn btn-success btn-sm">View</button>
                </div>
            </div>
        ))}
    </>
    );
}


