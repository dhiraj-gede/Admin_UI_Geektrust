import './App.css';
import Home from './components/Home';
export const  endpoint = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
function App() {
   
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
