import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Articles from "./Articles";
import { Artical } from "../types";

const FetchComponent = () => {
  const [articleData, setArticleData] = useState<Artical[]>([]);

  useEffect(() => {
    fetcharticals();
  }, []);

  const fetcharticals = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        setArticleData(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Le ultime notizie!</h1>
      <ListGroup className="text-dark mt-5">
        {articleData.map((article) => (
          <Articles article={article} key={article.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default FetchComponent;
