import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {


  return (
    <section className="max-w-[1440px] mx-auto">
      <Provider store={store}>
        <RouterProvider router={routes} />
        <Toaster />
      </Provider>
    </section>
  );
}

export default App;
