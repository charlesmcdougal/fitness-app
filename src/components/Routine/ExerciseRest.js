// FORM COMPONENTS
import Counter from '../Forms/Counter'
import TimeSelector from '../Forms/TimeSelector'

const ExerciseRest = (props) => {
  return (
    <p>
      <Counter initVal='30' />
      <TimeSelector />
    </p>
  )
}

export default ExerciseRest