const tasks = [
  { name: "John Smith", email: "john@smith.com", age: 21 },
  { name: "Mary Smith", email: "mary@smith.com", age: 30 },
  { name: "Hakimi Smith", email: "Hakimi@smith.com", age: 24 },
  { name: "Julie Hakimi", email: "Julie@smith.com", age: 34 },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.name}</h3>
      ))}
    </>
  );
};

export default Tasks;
