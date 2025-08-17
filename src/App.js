import './App.css';
import CodeEditor from './components/editor/editor';
import Header from './components/header/header';
import ListLeetCodeQuestions from './components/leetcode/listLeetCodeQuestions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ListLeetCodeQuestions/>}/>
          <Route path="/editor/:slug" element={<CodeEditor/>}/>
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
