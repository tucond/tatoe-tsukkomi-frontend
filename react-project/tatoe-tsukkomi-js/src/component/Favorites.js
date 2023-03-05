import {React,useEffect, useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


const Favorites = () => {

  const [results, setResults] = useState([])

  useEffect(() => {
    if (localStorage.length)
    {
      setResults(JSON.parse(localStorage.getItem("tsukkomi")))
    }
  }, [])

  const clearLocalStorage = () =>{
    localStorage.clear()
    setResults([])
  }

  return (
    <div>
      <h3>お気に入り</h3>
      {results.map((item) => (
      <ul>
        <li style={{textAlign:"left"}}>
          {item}
          <CopyToClipboard text={item}>
            <button onClick={()=>alert("結果コピーしました")}>コピー</button>
          </CopyToClipboard>
          {/* <button onClick={()=>localStorage.removeItem()}>削除</button> */}
        </li>
      </ul>
      ))}
      <button onClick={clearLocalStorage}>全削除</button>
      {/* <p>{localStorage.length}</p> */}

    </div>
  )
}

export default Favorites