// FORM COMPONENTS
import Counter from '../Forms/Counter'
import TimeSelector from '../Forms/TimeSelector'
import FrequencySelector from '../Forms/FrequencySelector'

const ExerciseAlert = (props) => {

  return (
    <p>
      <FrequencySelector />
      <Counter initVal='30' />
      <TimeSelector />
    </p>
  )
}

export default ExerciseAlert