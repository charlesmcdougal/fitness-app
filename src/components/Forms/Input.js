import classes from './Input.module.css'

import Card from '../UI/Card'

const Input = (props) => {
  return (
  <Card>
    <label className={classes.label + ' ' + props.labelClassName}>{props.label}</label>
    <input type={props.type} className={classes.input + ' ' + props.inputClassName} placeholder={props.placeholder} />
  </Card>
  )
}

export default Input