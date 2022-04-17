import { Row, Col } from 'reactstrap';

const Colors = () => {
  return (
    <div className="page page-colors">
      <h2 className="page-title">Colors</h2>
      <Row>
        <Col sm='12'>
          <div className="card-color">
            <h4 className="card-title">Default Colors</h4>
            <div className="box-color-wrapper">
              <div className="box-color bg-primary content-center"><span>primary</span></div>
              <div className="box-color bg-secondary content-center"><span>secondary</span></div>
              <div className="box-color bg-success content-center"><span>success</span></div>
              <div className="box-color bg-warning content-center"><span>warning</span></div>
              <div className="box-color bg-danger content-center"><span>danger</span></div>
              <div className="box-color bg-info content-center"><span>info</span></div>
            </div>
          </div>
        </Col>

        <Col sm='12'>
          <div className="card-color">
            <h4 className="card-title">Darken Colors</h4>
            <div className="box-color-wrapper">
              <div className="box-color bg-primary-darken content-center"><span>primary</span></div>
              <div className="box-color bg-secondary-darken content-center"><span>secondary</span></div>
              <div className="box-color bg-success-darken content-center"><span>success</span></div>
              <div className="box-color bg-warning-darken content-center"><span>warning</span></div>
              <div className="box-color bg-danger-darken content-center"><span>danger</span></div>
              <div className="box-color bg-info-darken content-center"><span>info</span></div>
            </div>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default Colors;