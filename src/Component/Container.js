import React from 'react';
import './Container.css'

function Container({ data ,handler}) {
    console.log(data?.show)
    return (
        <div className='container' onClick={()=>{handler(data)}}>
            <img className='container_image' src={(data?.show?.image?.medium)
                ? data?.show?.image?.medium
                : "https://www.shutterstock.com/image-vector/movie-film-abstract-modern-poster-260nw-1055142515.jpg"}
            />
            <div className='container_details'>
                <div className='container_details_name'>{data?.show?.name}</div>
                <div className='container_details_rating'>
                    <div className='container_details_rating_icon'><i className="fa fa-heart"></i></div>
                    <div className='container_details_rating_value'>{data?.show?.rating?.average}</div>
                </div>
            </div>
        </div>
    )
}

export default Container