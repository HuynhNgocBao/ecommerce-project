import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import { publicRoutes, privateRoutes } from "./routes";
import "src/assets/css/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = UserLayout;
            if (route.layout) {
              Layout = route.layout;
            }
            const Page = route.component;
            return (
            <Route
            key={index}
            path={route.path} 
            element={
              <Layout>
                <Page/>
              </Layout>
            } />
            );
          })}
          ;
        </Routes>
      </div>
    </Router>
  );
}

export default App;
