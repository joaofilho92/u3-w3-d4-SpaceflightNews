import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { Artical } from "../types";
import { useNavigate } from "react-router-dom";

interface ArticalProps {
  article: Artical;
}

const Articles = ({ article }: ArticalProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }} className="mb-3">
            <Card.Img variant="top" src={article.imageUrl} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/ArticleDetails", { state: { id: article.id } })
                }
              >
                Clicca qui
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Articles;
