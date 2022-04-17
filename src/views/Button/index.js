import { Row, Col } from 'reactstrap';
import ButtonsFilled from './ButtonsFilled';
import ButtonsOutline from './ButtonsOutline';
import ButtonsRounded from './ButtonsRounded';
import ButtonsIcon from './ButtonsIcon';

const Buttons = () => {
  return (
    <div className="page-buttons">
      <h2 className="page-title">Buttons</h2>
      <Row>
        <Col sm='12'>
          <div className="card-button">
            <h4 className="card-title">Filled</h4>
            <ButtonsFilled />
          </div>
        </Col>
        <Col sm='12'>
          <div className="card-button">
            <h4 className="card-title">Outline</h4>
            <ButtonsOutline />
          </div>
        </Col>
        <Col sm='12'>
          <div className="card-button">
            <h4 className="card-title">Rounded</h4>
            <ButtonsRounded />
          </div>
        </Col>
        <Col sm='12'>
          <div className="card-button">
            <h4 className="card-title">Icon</h4>
            <ButtonsIcon />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Buttons;
