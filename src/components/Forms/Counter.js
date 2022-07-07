import { Fragment, useRef } from 'react'

// CSS
import classes from './Counter.module.css'

const Counter = (props) => {
  const counter = useRef()

  const decreaseCounterHandler = () => {
    if(counter.current.value <=1) {
      return
    }
    counter.current.value--
  }

  const increaseCounterHandler = () => {
    if(counter.current.value >= 60) {
      return
    }
    if(counter.current.value >= 1) {
      counter.current.value++
    }
  }
  
  return (
    <Fragment>
      <button className={classes.arrowButton} type='button' onClick={decreaseCounterHandler} >
        <span className={classes.arrowDown}></span>
      </button>
      <input className={classes.time} type='text' defaultValue={props.initVal || '30'} ref={counter} />
      <button className={classes.arrowButton} type='button' onClick={increaseCounterHandler} >
        <span className={classes.arrowUp}></span>
      </button>
    </Fragment>
  )
}

export default Counter