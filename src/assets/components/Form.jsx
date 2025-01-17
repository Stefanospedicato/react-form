import { useState } from "react";

const list = [];

const Form = () => {
  const [myList, setMyList] = useState(list);
  const [newTask, setNewTask] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    setMyList([newTask, ...myList]);
  };

  return (
    <>
      <form action="#" onSubmit={handlerSubmit}>
        <div className="container my-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Scrivi titolo da aggiungere..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Aggiungi
            </button>
          </div>
          <ul className="list-group">
            {myList.map((listItem, index) => (
              <li key={index} className="list-group-item">
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
};

export default Form;
