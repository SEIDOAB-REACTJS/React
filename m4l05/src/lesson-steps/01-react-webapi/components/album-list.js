import React from 'react';


export default function AlbumList(props)
{
    const albums = props.serviceData?.pageItems;

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
            <div className="col-md-4 themed-grid-head-col">Copies sold</div>
            <div className="col-md-2 themed-grid-head-col">Release Year</div>
            <div className="col-md-2 themed-grid-head-col"></div>
       </div>
        {albums?.map((row, idx) => (

            //assign the id to the row and the eventhandler from props
            <div className="row mb-2 text-center" key={row.albumId} data-rowitemid={row.albumId} 
                onClick={props.onClick}>

                <div className="col-md-4 themed-grid-col">
                    {row.name}
                </div>

                <div className="col-md-4 themed-grid-col">
                    {row.copiesSold}
                </div>
                <div className="col-md-2 themed-grid-col">
                    {row.releaseYear}
                </div>
                <div className="col-md-2 themed-grid-col">
                    <button onClick={onView} type="button" className="btn btn-success btn-sm">View</button>
                </div>
            </div>
        ))}
    </>
    );
}


