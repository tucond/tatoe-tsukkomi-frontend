import './InputWord.css';

import {React,useState, useEffect} from 'react'
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
  // const [keyCount, setKeyCount] = useState(0);
  const [storage, setStorage] = useState([]);

  const { data, isLoading, isError, refetch } = useQuery(["tsukkomi", inputData], fetchTsukkomi,
  {
    enabled: false,
  });

  const localStorageFunc = async (text) => {
    if(!active){
      await setStorage([...storage, text])
    }else{
      await setStorage(storage.filter((item)=>(item!==text)))
    }
    await console.log(`results:${ localStorage.getItem("tsukkomi")}`)
    setActive(!active)
  }

  const classToggle = () => {
    localStorageFunc(`${inputData}→${data.data.tsukkomi}`)
  }


  useEffect(() => {
    if (localStorage.getItem("tsukkomi")){
      setStorage([...JSON.parse(localStorage.getItem("tsukkomi"))])
    }
  }, [])

  useEffect(() => {
    if (storage.length){
      localStorage.setItem("tsukkomi", JSON.stringify(storage))
    }
  }, [storage])

  const handleClick = async (e) => {
    await setInputData(e.word)
    await refetch();
    await changeUserInput(e.word)
    setActive(false)
  };

  if (isError) {
    return <span>エラー。画面を更新してください</span>;

  }

  // if(isLoading){
  //   return <span>生成中...</span>;
  // }

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
          <h3>
            {data.data.tsukkomi}
          </h3>
          <button className="InputWord-like" onClick={classToggle}>{active ? "❤️" : "🤍"}</button>
        
          <CopyToClipboard text={`${inputData}→${data.data.tsukkomi}`}>
            <button onClick={()=>alert("結果コピーしました")}>コピー</button>
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
