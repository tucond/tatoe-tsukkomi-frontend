import {useState} from 'react'
import  './App.css';
import InputWord from './InputWord'
import Share from './Share';
import { QueryClient, QueryClientProvider } from 'react-query'
import Div100vh from 'react-div-100vh'

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

      <Div100vh style={{
        backgroundImage: `url(${process.env.PUBLIC_URL+'/comedian_shadow.png'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} className="App-body">
        <p>
          {title}
        </p>
        <QueryClientProvider client={queryClient}>
            <InputWord changeUserInput={changeUserInput} changeTsukkomiResult={changeTsukkomiResult}/>
        </QueryClientProvider>

        <Share url={shareUrl} title={`${title}\n${userInput}→${tsukkomiResult}\n`}/>

      </Div100vh>



    </div>
  );
}

export default App;
