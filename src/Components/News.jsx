import React, { useState, useEffect } from "react";
// import sampleData from './sampleNews.json'
import NewsItems from './NewsItems'


export default function News(props) {

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, []);


    const updateNews = async () => {
        // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c705bf61a04443494f2dfc3cf1bca55";
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);

    }

    // const search = (e) => {
    //     console.log(e.target.value);

    // }
    return (
        <>
            <div className="news">
                {articles.map((element) => {
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

News.defaultProps = {
    country: 'in',
    category: 'general',
    apiKey: '0c705bf61a04443494f2dfc3cf1bca55',
    pageSize: '15',
}
