import './RoutineTypeSelector.css'

import clockImage from '../../assets/stopwatch.png'
import clockImageWhite from '../../assets/stopwatch-white.png'
import repsImage from '../../assets/reps.png'
import repsImageWhite from '../../assets/reps-white.png'

const RoutineTypeSelector = () => {
  return (
    <p className='dual-button-container'>
      <button className='timer-button left-button' type='button'>
        <img src={repsImageWhite} alt='stopwatch icon' />
      </button>
      <button className='timer-button-white right-button' type='button'>
        <img src={clockImage} alt='stopwatch white icon' />
      </button>
    </p>
  )
}

export default RoutineTypeSelector