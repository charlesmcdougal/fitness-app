import classes from './Selector.module.css'

const TimeSelector = () => {
  return (
    <span className={classes.selectorContainer}>
      <select className={classes.selector}>
        <option value='seconds'>seconds</option>
        <option value='minutes'>minutes</option>
        <option value='hours'>hours</option>
      </select>
      <span className={classes.selectorArrow}></span>
    </span>
  )
}

export default TimeSelector