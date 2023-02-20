import './App.css';
import { TwitterShareButton, LineShareButton, TwitterIcon, LineIcon } from "react-share";

function App() {
let shareVideoUrl="fff"
let  shareVideoTitle="ffff"

  return (
    <div className="App">
      <header className="App-header">
        <p>
          例えツッコミジェネレータ
        </p>
        <TwitterShareButton url={shareVideoUrl} title={shareVideoTitle}>
          <TwitterIcon size={45} round={true} />
        </TwitterShareButton>

        <LineShareButton url={shareVideoUrl} title={shareVideoTitle}> 
          <LineIcon size={45} round />
        </LineShareButton>

      </header>
    </div>
  );
}

export default App;
