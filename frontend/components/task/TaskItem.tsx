import Link from 'next/link';
import { FaTrashAlt, FaCog } from 'react-icons/fa';
import { Task } from '../../services/taskService';

interface TaskItemProps {
  task: Task;
  index: number;
  handleDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, handleDelete }) => {
  const getStatusColorClass = (status: 'PENDING' | 'IN_PROGRESS' | 'DONE') => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-500';
      case 'IN_PROGRESS':
        return 'bg-blue-500';
      case 'DONE':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-50">
      <td className="px-5 py-5 text-sm">{index + 1}</td>
      <td className="px-5 py-5 text-sm">{task.title}</td>
      <td className="px-5 py-5 text-sm">{task.description}</td>
      <td className="px-5 py-5 text-sm flex items-center">
        <span className={`h-3 w-3 rounded-full mr-2 ${getStatusColorClass(task.status)}`}></span>
        {task.status}
      </td>
      <td className="px-5 py-5 text-sm">
        <div className="inline-flex space-x-2">
          <button onClick={() => handleDelete(task.id)} className="bg-red-500 text-white p-2 rounded flex items-center justify-center">
            <FaTrashAlt />
          </button>
          <Link href={`/update/${task.id}`} legacyBehavior>
            <a className="bg-blue-700 text-white p-2 rounded flex items-center justify-center">
              <FaCog />
            </a>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
