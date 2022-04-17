import { Row, Col } from 'reactstrap';

const Typography = () => {
  return (
    <div className="page page-typography">
      <h2 className="page-title">Typography</h2>
      <Row>
        <Col md='6' sm='12'>
          <div className="card">
            <div className="heading-wrapper"><h1>H1 Heading</h1></div>
            <div className="heading-wrapper"><h2>H2 Heading</h2></div>
            <div className="heading-wrapper"><h3>H3 Heading</h3></div>
            <div className="heading-wrapper"><h4>H4 Heading</h4></div>
            <div className="heading-wrapper"><h5>H5 Heading</h5></div>
            <div className="heading-wrapper"><h6>H6 Heading</h6></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Typography;