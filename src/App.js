import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import SearchSection from './SearchSection';
import RecentSearch from './RecentSearch';



function App() {
  return (
    <div className="App">
      <Header/>
      <SearchSection/>
      <RecentSearch/>
    
    </div>
  );
}

export default App;
