import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  // 0: extract modal and content to index.html 
  // 1+2: entered player name should be shown in h2 (Player.jsx)
  // 3+4: Add timer challenges (TimerChallenge.jsx)
  // 5+6: Show a popup which shows the result: lost or the score (the closer to the target time, the better the score) (ResultModal.jsx)
  // 7: use portal (createPortal) to detach DOM rendering from App JSX structure (ResultModal.jsx)

  return (
    <>
    <Player />
    <div id="challenges">
          <TimerChallenge title="Very Easy" targetTime={1} />
          <TimerChallenge title="Easy" targetTime={5} />
          <TimerChallenge title="Medium" targetTime={10} />
          <TimerChallenge title="Hard" targetTime={15} />
    </div>
    </>
  );
}

export default App;
