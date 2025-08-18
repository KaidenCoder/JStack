import './App.css';
import DesignPatterns from './components/designpatterns';
import CodeEditor from './components/editor/editor';
import Header from './components/header/header';
import ListLeetCodeQuestions from './components/leetcode/listLeetCodeQuestions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/JStack" element={<ListLeetCodeQuestions/>}/>
          <Route path="/JStack/editor/:slug" element={<CodeEditor/>}/>
          <Route path="/JStack/designpatterns" element={<DesignPatterns/>}/>
        </Routes>
      </Router>
  );
}

export default App;
