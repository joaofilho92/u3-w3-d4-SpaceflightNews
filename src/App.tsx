import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import FetchComponent from "./components/FetchComponent";
import ArticleDetails from "./components/ArticleDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<FetchComponent />} />
            <Route path="/ArticleDetails" element={<ArticleDetails />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
