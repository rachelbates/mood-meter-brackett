import MainBlock from './components/MainBlock'
import './App.css';
import { useState } from 'React';

function App() {
  const [moodChoice, setMoodChoice] = useState(null)
  const [view, setView] = useState('home')

  return (
    <>
      <h1>Let's get a read on your mood today!</h1>
      <p><code>Hello there! What's up</code></p>
      <MainBlock />
    </>
  );
}

export default App;
