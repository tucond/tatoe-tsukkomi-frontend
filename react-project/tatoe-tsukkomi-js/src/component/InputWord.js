import './InputWord.css';

import {React,useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios";
import { useQuery } from 'react-query'
import {CopyToClipboard} from 'react-copy-to-clipboard';


const options = {
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
};

const fetchTsukkomi = async (inputData) =>  {
  const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/tsukkomi?word=${inputData.queryKey[1]}`,options)
  return res
}



const InputWord = ({changeUserInput,changeTsukkomiResult}) => {
  const { handleSubmit, register } = useForm()
  const [inputData, setInputData] = useState(null);
  const [active, setActive] = useState(false);
  const { data, isLoading, isError, refetch } = useQuery(["tsukkomi", inputData], fetchTsukkomi,
  {
    enabled: false,
  });

  const classToggle = () => {
    setActive(!active)
  }

  const handleClick = async (e) => {
    await setInputData(e.word)
    await refetch();
    await changeUserInput(e.word)
    setActive(false)
  };

  if (isError) {
    return <span>エラー。画面を更新してください</span>;

  }

  if (data && !isLoading){
    changeTsukkomiResult(data.data.tsukkomi)//要改善
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleClick)}>
        <input {...register('word')} placeholder="例: かわいい" />
        <button type="submit" disabled={isLoading}>ツッコミGO!</button>
      </form>
      {data ? (
        <>
          <p>
            {data.data.tsukkomi}
          </p>
          <button className="InputWord-like" onClick={classToggle}>{active ? "❤️" : "🤍"}</button>
        
          <CopyToClipboard text={`${inputData}→${data.data.tsukkomi}`}>
            <button>結果をコピー</button>
          </CopyToClipboard>

        <br/>
        </>
        ) : 
        (
          <>
          <p>...</p>
          <p> </p>
          <br/>
          </>
        )}


    </>
  )
}

export default InputWord
