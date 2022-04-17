import { Button } from 'reactstrap'

const ButtonsRounded = () => {
  return (
    <div className='buttons-wrapper'>
      <Button className="rounded" color='primary' outline>
        Primary
      </Button>
      <Button className="rounded" color='secondary' outline>
        Secondary
      </Button>
      <Button className="rounded" color='success' outline>
        Success
      </Button>
      <Button className="rounded" color='danger' outline>
        Danger
      </Button>
      <Button className="rounded" color='warning' outline>
        Warning
      </Button>
      <Button className="rounded" color='info' outline>
        Info
      </Button>
    </div>
  )
}
export default ButtonsRounded
