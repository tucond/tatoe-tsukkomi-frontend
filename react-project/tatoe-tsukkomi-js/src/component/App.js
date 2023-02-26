import {useState} from 'react'
import styles from './App.css';
import InputWord from './InputWord'
import { TwitterShareButton, LineShareButton, TwitterIcon, LineIcon } from "react-share";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
const shareUrl=process.env.REACT_APP_FRONTEND_URL
const title="例えツッコミジェネレータ"
// const shareTitle=`${title}
// 「甘い」→「はちみつか！」
// `

const [userInput,setUserInput] = useState("")
const [tsukkomiResult,setTsukkomiResult] = useState("")

const changeUserInput = (text) => {
  setUserInput(text)
}

const changeTsukkomiResult = (text) => {
  setTsukkomiResult(text)
}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {title}
        </p>

        <QueryClientProvider client={queryClient}>
          <InputWord changeUserInput={changeUserInput} changeTsukkomiResult={changeTsukkomiResult}/>
        </QueryClientProvider>

        <div className={styles.share}>
          <TwitterShareButton url={shareUrl} title={`${title}\n${userInput}→${tsukkomiResult}\n`}>
            <TwitterIcon size={45} round={true} />
          </TwitterShareButton>

          <LineShareButton url={shareUrl} title={`${title}\n${userInput}→${tsukkomiResult}\n`}>
            <LineIcon size={45} round />
          </LineShareButton>
        </div>

      </header>
    </div>
  );
}

export default App;
