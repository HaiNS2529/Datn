import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./common/router";
import Header from "./common/layout/Header";
import Footer from "./common/layout/Footer";
import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body">
          <Routes>
            {router.map((item, index) => {
              return (
                <Route
                  path={item.link}
                  key={index}
                  element={item.component}
                ></Route>
              );
            })}
            <Route path="*" element={router[0].component}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
