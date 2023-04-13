import { Card, Button, Col, Row, Container } from "react-bootstrap";
interface ArticleObject {
  summary: string;
  id: number;
  imageUrl: string;
  title: string;
}

interface ArticalProps {
  details: ArticleObject;
}

const ShowDetails = ({ details }: ArticalProps) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }} className="mb-3">
            <Card.Img variant="top" src={details.imageUrl} />
            <Card.Body>
              <Card.Title>{details.title}</Card.Title>
              <Card.Text>{details.summary}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ShowDetails;
