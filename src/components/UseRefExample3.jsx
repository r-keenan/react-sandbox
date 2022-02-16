import { useRef, useState } from "react";
import ToDo from "./ToDo";

function useRefExample3() {
  const [showToDo, setShowToDo] = useState(true);

  return (
    <div>
      {showToDo && <ToDo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowToDo(!showToDo)}
      >
        Toggle ToDo
      </button>
    </div>
  );
}

export default useRefExample3;
