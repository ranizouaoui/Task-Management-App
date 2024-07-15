import { Task } from '../../services/taskService';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  handleDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, handleDelete }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 bg-gray-100 border-b-2 border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">ID</th>
          <th className="px-5 py-3 bg-gray-100 border-b-2 border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Title</th>
          <th className="px-5 py-3 bg-gray-100 border-b-2 border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Description</th>
          <th className="px-5 py-3 bg-gray-100 border-b-2 border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Status</th>
          <th className="px-5 py-3 bg-gray-100 border-b-2 border-gray-200 text-gray-600 text-left text-sm uppercase font-normal">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskItem key={task.id} task={task} index={index} handleDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
