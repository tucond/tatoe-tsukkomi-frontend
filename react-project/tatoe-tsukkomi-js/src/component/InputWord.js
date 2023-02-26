import {React,useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios";
import { useQuery } from 'react-query'

const options = {
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
};

const fetchTsukkomi = async (inputData) =>  {
  const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/tsukkomi?word=${inputData.queryKey[1]}`,options)
  console.log(res)
  alert(res.data.tsukkomi)
  return res
}

const InputWord = () => {
  const { handleSubmit, register } = useForm()
  const [inputData, setInputData] = useState(null);
  const {   isLoading, isError, refetch } = useQuery(["tsukkomi", inputData], fetchTsukkomi,
  {
    enabled: false,
  });

  const handleClick = async (data) => {
    await setInputData(data.word)
    await refetch();
  };

  if (isLoading) {
    return <span>生成中...</span>;
  }

  if (isError) {
    return <span>エラー</span>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleClick)}>
        <input {...register('word')} placeholder="例: かわいい" />
        <button type="submit">ツッコミGO!</button>
      </form>
      {/* {data && (
      <p>
        {data.tsukkomi}
      </p>
      )} */}
    </>
  )
}

export default InputWord
