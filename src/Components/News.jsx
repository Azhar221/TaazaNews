import React, { useState, useEffect } from "react";
// import sampleData from './sampleNews.json'
import NewsItems from './NewsItems'


export default function News() {

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        updateNews();

    }, []); // <- you may need to put the setNews function in this array


    const updateNews = async () => {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c705bf61a04443494f2dfc3cf1bca55";
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);

    }

    // const search = (e) => {
    //     console.log(e.target.value);

    // }
    return (
        <>
            {/* <h1>Aaj ki Taaza Headlines</h1> */}
            {/* {this.state.loading && <Loader />} */}
            
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
