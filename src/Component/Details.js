import React from 'react';
import './Details.css';


function Details({ data }) {
    return (
        <div className='details'>
            <section className='details_row'>
                <section className='details_row_left_section'>
                    <aside className='details_row_left_section_aside'>
                        <figure className='details_row_left_section_aside_figure'>
                            <img
                                className='details_row_left_section_aside_figure_image'
                                src={(data?.show?.image?.medium)
                                    ? data?.show?.image?.medium
                                    : "https://www.shutterstock.com/image-vector/movie-film-abstract-modern-poster-260nw-1055142515.jpg"}

                            />
                        </figure>
                        <div className='details_row_left_section_aside_bottom'>
                            <span className='details_row_left_section_aside_bottom_follow'>
                                <i className="fa fa-heart"></i>
                                <span> Follow </span>
                            </span>
                        </div>

                    </aside>
                    <div className='details_row_left_section_container'>
                        <article className='details_row_left_section_container_article'>
                            <div className='details_row_left_section_container_article_para'>
                                <b className='details_row_left_section_container_article_para_header'>{data?.show?.name}</b>
                                <p 
                                className='details_row_left_section_container_article_para_containt' 
                                dangerouslySetInnerHTML={{ __html: data?.show?.summary }}>
                                    
                                </p>

                            </div>
                        </article>
                        <div className='details_row_left_section_container_socialContainer'>
                            <div className="details_row_left_section_container_socialContainer_buttons">
                                <span className='details_row_left_section_container_socialContainer_buttons_header'>Share this on:</span>
                                <div className='details_row_left_section_container_socialContainer_buttons_list'>
                                    <a className='details_row_left_section_container_socialContainer_buttons_list_link'>
                                        <i className="fab fa-facebook-square fa-2x"></i>
                                    </a>
                                    <a className='details_row_left_section_container_socialContainer_buttons_list_link'>
                                        <i className="fab fa-twitter-square fa-2x"></i>
                                    </a>
                                    <a className='details_row_left_section_container_socialContainer_buttons_list_link'>
                                        <i className="fab fa-reddit-square fa-2x"></i>
                                    </a>
                                    <a className='details_row_left_section_container_socialContainer_buttons_list_link'>
                                        <i className="fab fa-tumblr-square fa-2x"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>


                </section>

                <section className='details_row_right_section'>
                    <section className="details_row_right_section_container">

                        <h2 className='details_row_right_section_container_header'>Show Info</h2>

                        <div className='details_row_right_section_container_header_network'>
                            <strong>Network: </strong>
                            <img />
                            <a href={data?.show?.network?.name}>{data?.show?.network?.name}</a>
                            <span id="year">({data?.show?.premiered})</span>
                        </div>

                        <div className='details_row_right_section_container_header_schedule'>
                            <strong>Schedule:</strong>
                            <span>{data?.show?.schedule?.days?.map((day, idx) => <span key={idx}>{day}</span>)} </span>
                            <span>at {data?.show?.schedule?.time}</span>
                            <span>({data?.show?.averageRuntime})</span>
                        </div>

                        <div className='details_row_right_section_container_header_status'>
                            <strong>Status:</strong>
                            <span>{data?.show?.status}</span>
                        </div>
                        <div className='details_row_right_section_container_header_showType'>
                            <strong>Show Type: </strong>
                            <span>{data?.show?.type}</span>
                        </div>

                        <div className='details_row_right_section_container_header_genre'>
                            <strong>Genres:</strong>
                            <span>
                                {data?.show?.genres?.map((genre, idx, list) => {
                                    return <span key={idx}> {genre} {(idx < list.length - 1) && "|"}</span>
                                })}
                            </span>
                        </div>
                        <p className='details_row_right_section_container_header_officialSite'>

                            <a href={data?.show?.officialSite} rel="noopener" target="_blank">
                                <strong>Official site</strong>

                            </a>
                        </p>

                        <p className='details_row_right_section_container_header_rating'>
                            <span>
                                <span className='details_row_right_section_container_header_rating_star'>
                                    {Array(data?.show?.rating?.average && Math.floor(data?.show?.rating?.average))
                                        .fill(-1)
                                        .map((_, id) => {
                                            return <i key={id + "_active"} className="fa fa-star" aria-hidden="true"></i>
                                        })

                                    }
                                    {
                                        Array(data?.show?.rating?.average && Math.floor(10 - data?.show?.rating?.average))
                                            .fill(-1)
                                            .map((_, id) => {
                                                return <i key={id + "_deactive"} className="fa fa-star" aria-hidden="true" style={{ color: "white" }}></i>
                                            })
                                    }
                                </span>
                                <b >{data?.show?.rating?.average}</b>

                            </span>
                        </p>
                    </section>
                </section>

            </section>
            <div className='details_home_page'>
                <a href='https://harmonious-blancmange-b74ae8.netlify.app/' >
                    <button>Home</button>
                </a>

            </div>

        </div>
    )
}

export default Details