import {apiUrl, FETCH_STATUSES} from "../../utils/constants";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../store/articles/actions";
import {selectArticles, selectArticlesError, selectArticlesStatus} from "../../store/articles/selectors";


export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const error = useSelector(selectArticlesError);
  const status = useSelector(selectArticlesStatus);

  const sendRequest = () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <h3>Articles</h3>
      <button onClick={sendRequest}>Get JsonData</button>
      {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
      {/*{loading && <CircularProgress />}*/}
      {error && <h4>{error}</h4>}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};