import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import defaultLayout from "./layouts/DefaultLayout";
import { publicRoutes, privateRoutes } from "./routes";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {getUser} from 'src/features/auth/authSlice'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
  });
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = defaultLayout;
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
