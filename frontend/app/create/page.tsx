'use client';

import { useRouter } from 'next/navigation';
import TaskService, { Task } from '../../services/taskService';
import TaskForm from '../../components/forms/TaskForm';

const CreateTask = () => {
  const router = useRouter();

  const handleSubmit = async (task: Partial<Task>) => {
    try {
      await TaskService.createTask(task);
      router.push('/');
    } catch (err) {
      console.error('Failed to create task:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">Create Task</h2>
        <TaskForm
          initialData={{ title: '', description: '', status: 'PENDING' }}
          onSubmit={handleSubmit}
          buttonText="Create"
        />
      </div>
    </div>
  );
};

export default CreateTask;
