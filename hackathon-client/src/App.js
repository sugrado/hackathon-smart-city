import { ToastContainer } from "react-toastify";
import Container from "./components/Container";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="relative">
      <Container />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
