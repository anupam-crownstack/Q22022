import React from "react";

const containerStyle = {
  fontFamily: "system-ui, sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "1.4",
  width: "75%",
  margin: "auto",
  flexDirection: "column",
  gap: 5,
};

const formContainer = {
  display: "flex",
  gap: 2,
};

const itemContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const listContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

export default function Index() {
  const [todoList, setTodoList] = React.useState([{ id: 1, content: "hello" }]);
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      content: inputValue,
    };
    setTodoList((prevState) => [...prevState, newItem]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    const filteredList = todoList.filter((item) => item.id !== id);
    setTodoList(filteredList);
  };

  return (
    <div style={containerStyle}>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit} style={formContainer}>
        <input
          placeholder="Enter Todo"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todoList.length ? (
        <Item data={todoList} handleDelete={handleDelete} />
      ) : (
        <div>No todos</div>
      )}
    </div>
  );
}

const Item = ({ data, handleDelete }) => {
  return (
    <div style={listContainer}>
      {data.map((item) => (
        <div style={itemContainer} key={item.id}>
          <span>{item.content}</span>
          <button onClick={() => handleDelete(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
};
