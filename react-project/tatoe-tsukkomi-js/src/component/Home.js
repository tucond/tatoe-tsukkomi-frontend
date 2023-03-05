import {useState} from 'react'
import  './Home.css';
import InputWord from './InputWord'
import Share from './Share';
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function Home() {
const shareUrl=process.env.REACT_APP_FRONTEND_URL
const title="例えツッコミジェネレータ"

const [userInput,setUserInput] = useState("")
const [tsukkomiResult,setTsukkomiResult] = useState("")

const changeUserInput = (text) => {
  setUserInput(text)
}

const changeTsukkomiResult = (text) => {
  setTsukkomiResult(text)
}

  return (
    <div className="Home">

        <h3>{title}</h3>
        <QueryClientProvider client={queryClient}>
            <InputWord changeUserInput={changeUserInput} changeTsukkomiResult={changeTsukkomiResult}/>
        </QueryClientProvider>

        <Share url={shareUrl} title={`${title}\n${userInput}→${tsukkomiResult}\n`}/>


    </div>
  );
}

export default Home;
