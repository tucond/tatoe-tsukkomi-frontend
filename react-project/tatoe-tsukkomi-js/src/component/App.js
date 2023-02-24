import styles from './App.css';
import InputWord from './InputWord'
import { TwitterShareButton, LineShareButton, TwitterIcon, LineIcon } from "react-share";

function App() {
const shareUrl=process.env.REACT_APP_FRONTEND_URL
const shareTitle="例えツッコミジェネレータ"

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {shareTitle}
        </p>
        
        <InputWord/>

        <div className={styles.share}>
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <TwitterIcon size={45} round={true} />
          </TwitterShareButton>
          <LineShareButton url={shareUrl} title={shareTitle}> 
            <LineIcon size={45} round />
          </LineShareButton>
        </div>

      </header>
    </div>
  );
}

export default App;
