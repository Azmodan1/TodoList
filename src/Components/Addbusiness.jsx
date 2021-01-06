import React, { useState } from 'react'
import { addBusiness, showAlert } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Alert from './Alert'

const Addbusiness = () => {
  const bus = useSelector((state) => state.todo.affairs)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const alert = useSelector((state) => state.app.alert)
  const submiting = (event) => {
    event.preventDefault()

    const newAffair = {
      tittle: value,
      id: bus.length + 1,
      done: false,
    }

    if (value.trim()) {
      dispatch(addBusiness(newAffair))
      setValue('')
    } else {
      return dispatch(showAlert('Название не может быть пустым'))
    }
  }

  return (
    <div>
      {alert && <Alert text={alert} />}
      <form className="add" onSubmit={submiting}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="addb" type="submit">
          Add business
        </button>
      </form>
    </div>
  )
}

export default Addbusiness
