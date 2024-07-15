import { FormEvent, useState } from 'react';
import Button from '../ui/Button';
import { FaSave } from 'react-icons/fa';

interface TaskFormProps {
  initialData: {
    title: string;
    description: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'DONE';
  };
  onSubmit: (task: { title: string; description: string; status: 'PENDING' | 'IN_PROGRESS' | 'DONE' }) => void;
  buttonText: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSubmit, buttonText }) => {
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);
  const [status, setStatus] = useState(initialData.status);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ title, description, status });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2 dark:text-gray-300" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2 dark:text-gray-300" htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
          rows={4}
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-semibold mb-2 dark:text-gray-300" htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as 'PENDING' | 'IN_PROGRESS' | 'DONE')}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
        >
          <option value="PENDING">PENDING</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>
      </div>
      <Button type="submit" text={buttonText} icon={<FaSave />} />
    </form>
  );
};

export default TaskForm;
