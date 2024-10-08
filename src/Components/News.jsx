import React, { useState, useEffect } from "react";
// import sampleData from './sampleNews.json'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import NewsItems from "./NewsItems";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const updateNews = async () => {
    // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c705bf61a04443494f2dfc3cf1bca55";
    // let url = `https://newsapi.org/v2/${props.endPoint}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false.loading);
    setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResult);
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    // updateNews();

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false.loading);

    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResult);
  };
  // const search = (e) => {
  //     console.log(e.target.value);

  // }
  return (
    <>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        // loader={<h4>Loading...</h4>}
        loader={<Loader />}
        // scrollableTarget="scrollableDiv"
      >
        <div className="news">
          {articles.map((element) => {
            return (
              <NewsItems
                key={element.url}
                title={element.title ? element.title.slice(0, 50) : ". . ."}
                description={
                  element.description
                    ? element.description.slice(0, 100)
                    : ". . ."
                }
                url={element.url}
                imgUrl={element.urlToImage}
                source={element.source.name}
                author={element.author ? element.author : "Unknown"}
                date={element.publishedAt ? element.publishedAt : ""}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  endPoint: "top-headlines",
  country: "in",
  category: "general",
  // apiKey: '0c705bf61a04443494f2dfc3cf1bca55',
  pageSize: "10",
};

// News.propsTypes = {
//         country : PropTypes.string,
//         apiKey: PropTypes.string,
//         pageSize: PropTypes.number,
//     }
