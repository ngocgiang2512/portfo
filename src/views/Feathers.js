import { useState } from 'react';
import * as FeatherIcons from 'react-feather';
import {
  Row,
  Col,
  Input,
  FormGroup,
  InputGroup,
  InputGroupText,
  UncontrolledTooltip
} from 'reactstrap';

const Feathers = () => {
  const FeatherIconsArr = [],
    [query, setQuery] = useState(''),
    [filteredArr, setFilteredArr] = useState([]);

  for (const key in FeatherIcons) {
    FeatherIconsArr.push(key);
  }
  const iconsRendered = query ? filteredArr : FeatherIconsArr;

  const handleFilter = val => {
    const arr = []
    if (val) {
      FeatherIconsArr.filter(icon => {
        if (icon.toLowerCase().includes(val.toLowerCase())) {
          arr.push(icon)
        }
      })
    }
    setFilteredArr([...arr])
  }

  return (
    <div className="page-feathers">
      <h2 className="page-title">Icon Feathers</h2>
      <Row>
        <Col sm="12">
          <div className="icon-search-wrapper">
            <InputGroup className='input-group-merge' tag={FormGroup}>
              <InputGroupText>
                <FeatherIcons.Search size={14} />
              </InputGroupText>
              <Input
                placeholder='Search icons...'
                onChange={e => {
                  handleFilter(e.target.value.trim())
                  setQuery(e.target.value.trim())
                }}
              />
            </InputGroup>
          </div>
        </Col>
      </Row>

      {iconsRendered.length > 0 && (
        <div className="box-icon-wrapper">
          {iconsRendered.map((icon) => {
            const IconTag = FeatherIcons[icon];
            return (
              <div key={icon} id={icon} className="box-icon">
                <div className="icon-wrapper">
                  <IconTag />
                </div>
                <p className="text-truncate">{icon}</p>
                <UncontrolledTooltip placement="top" target={icon}>
                  {icon.replace(/([A-Z])/g, ' $1').trim()}
                </UncontrolledTooltip>
              </div>
            );
          })}
        </div>
      )}

      {iconsRendered < 1 && (
        <div className="not-found">
          <h4>No Icons Found!</h4>
        </div>
      )}
    </div>
  );
};

export default Feathers;
