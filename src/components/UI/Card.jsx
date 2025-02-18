import './Card.css'

const Card = (props) => {
  return (
    <div>
      <li className='card'>{props.children}</li>
    </div>
  )
}

export default Card
