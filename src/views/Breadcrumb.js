import { Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbComponent = () => {
  return (
    <div className="page page-breadcrumb">
      <h2 className="page-title">Breadcrumb</h2>
      <Row>
        <Col sm='12'>
          <div className="card">
            <h4 className="card-title">Default</h4>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='#'> Home </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to='#'> Library </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <span> Data </span>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default BreadcrumbComponent;