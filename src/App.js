import AddTask from "./components/AddTask";
import DragAndDrop from "./components/DragAndDrop";
import "./styles.css";

export default function App() {
  const initialData = {
    Todo: [
      "Design UI mockups",
      "Set up project repository",
      "write unit test",
      "Integrate payment gateway",
    ],
    "In Progress": ["Develop authentication flow", "Implement repository"],
    Completed: [
      "Set up CI/CD pipeline",
      "Conduct code reviews",
      "Deply initial version to staging",
    ],
  };

  return (
    <div>
      <DragAndDrop initialData={initialData} />
    </div>
  );
}
