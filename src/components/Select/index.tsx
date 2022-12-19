import './style.css'

export const Select = () => {
  return (
    <div className="select">
      <label className="small">Show by month</label>
      <select name="months" id="months">
        <option value="Gen">Gen</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
      </select>
    </div>
  )
}
