import BookList from "./components/BookList";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="p-3">
      <h4 className="text-success">
        Practice 1 - Do the hands on the for book Mini Project video from
        tutorial site
      </h4>
      <BookList />
      <h4 className="text-success mt-4">
        Practice 2 - Practice Exercise from official site. Using lifting state
        up
      </h4>
      <Calculator />
    </div>
  );
}

export default App;
