import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import WishList from "./components/WishList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.Detail + "/:movieId"} element={<Detail />} />
        <Route path={ROUTER.WishList} element={<WishList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
