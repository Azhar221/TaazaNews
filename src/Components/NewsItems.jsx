import React from 'react'

export default function NewsItems(props) {
    return (
        <>
            <>
                <div id="newsItem">
                    <div className="cards">
                        <img src={props.imgUrl} alt="" />
                        <div id="source">
                            <p>{props.source}</p>
                        </div>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div className="btn">
                            <a href={props.url} target="_blank" rel="noreferrer"><button>Read More</button></a>
                            <p>By {props.author}<br />{new Date(props.date).toGMTString()}</p>                        </div>
                    </div>
                </div>

            </>
        </>
    )
}

            // <div className="newsItems">
            //     {news.map((element) => {
            //         return <div key={element.url}>
            //             <h1>{element.title}</h1>
            //             <h2>{element.description}</h2>
            //             <h3>{element.content}</h3>
            //         </div>

            //     })}



            // </div>