import { useCount } from '../stores/useCount'

const sample = (): JSX.Element => {
  const { data: count = 0, mutate: setCount } = useCount()
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  )
}

export default sample
