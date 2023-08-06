import "./App.css";
import Hero from "./component2/Hero";
import ErrorBound from "./component2/ErrorBound";
import PostList from "./HTTPComponents/PostList";
import PostForm from "./HTTPComponents/PostForm";
import ClassCounter from "./HooksComp/ClassCounter";
import HookCounter from "./HooksComp/HookCounter";
import HookCounter2 from "./HooksComp/HookCounter2";
import HookCounter3 from "./HooksComp/HookCounter3";
import HookCounter4 from "./HooksComp/HookCounter4";
import UseEffect from "./HooksComp/UseEffect";
import FetchData from "./HooksComp/FetchData";
import CounterReducer from "./HooksComp/CounterReducer";
function App() {
  return (
    <div className="App">
      {/* <PostList></PostList>
       */}

      <CounterReducer></CounterReducer>
    </div>
  );
}

export default App;
