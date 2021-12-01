import React from 'react'
import sampleData from './sampleNews.json'
import NewsItems from './NewsItems'


export default function News() {
    return (
        <>
            <h1>Aaj ki Taaza Headlines</h1>
            {/* {this.state.loading && <Loader />} */}
            <div className="news">
                {sampleData.map((element) => {
                    return <NewsItems key={element.url}
                        title={element.title ? element.title.slice(0, 50) : ". . ."}
                        description={element.description ? element.description.slice(0, 100) : ". . ."}
                        url={element.url}
                        imgUrl={element.urlToImage}
                        source={element.source.name}
                        author={element.author ? element.author : "Unknown"}
                        date={element.publishedAt ? element.publishedAt : ""} />
                })}
            </div>

        </>
    )
}
