import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
const Gallery = ({ data }) => {
  return (
    <>
      <Row xs={1} md={4} className="p-4">
        {data.map((image) => (
            <Col key={image.id} className="p-3" >
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                height="200"
                width="250"
                alt={image.title}
              />
            </Col>
        ))}
      </Row>
    </>
  );
};

export default Gallery;
