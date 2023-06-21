import ContextProvider from "./Context/ContextProvider.jsx";
import Category from "./Components/Category.jsx";

export default function App() {

    console.log("app rerender")
    return (
        <ContextProvider>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Category/>
            </div>
        </ContextProvider>
    )
}