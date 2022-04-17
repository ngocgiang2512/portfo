import { Button } from 'reactstrap'

const ButtonsOutline = () => {
  return (
    <div className='buttons-wrapper'>
      <Button color='primary' outline>
        Primary
      </Button>
      <Button color='secondary' outline>
        Secondary
      </Button>
      <Button color='success' outline>
        Success
      </Button>
      <Button color='danger' outline>
        Danger
      </Button>
      <Button color='warning' outline>
        Warning
      </Button>
      <Button color='info' outline>
        Info
      </Button>
    </div>
  )
}
export default ButtonsOutline
