import { Button } from 'reactstrap'
import { Home } from 'react-feather'

const ButtonsIcon = () => {
  return (
    <div className='buttons-wrapper'>
      <Button className="btn-icon-text" color='primary' outline>
        <Home size={16} />
        <span>Home</span>
      </Button>
      <Button className="btn-icon" color='primary' outline>
        <Home size={16} />
      </Button>
      <Button className="btn-icon rounded" color='primary' outline>
        <Home size={16} />
      </Button>
    </div>
  )
}
export default ButtonsIcon
