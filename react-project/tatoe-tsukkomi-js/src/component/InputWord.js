import {React, useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios";



const InputWord = () => {
  const { handleSubmit, register } = useForm()
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = (data) =>  {
    axios.get(`/tsukkomi?word=${data.word}`).then((response) => {
      setFetchedData(response.data)
    })
    alert(fetchedData.tsukkomi)
  }

  return (
    <form onSubmit={handleSubmit(fetchData)}>
      <input {...register('word')} placeholder="例: かわいい" />
      <button type="submit">ツッコミGO!</button>
    </form>
  )
}

export default InputWord
