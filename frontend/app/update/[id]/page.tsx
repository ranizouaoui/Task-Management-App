'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import TaskService, { Task } from '../../../services/taskService';
import TaskForm from '../../../components/forms/TaskForm';

const UpdateTask = () => {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await TaskService.getTaskById(id);
        setTask(data);
      } catch (err) {
        setError('Failed to fetch task data');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (updatedTask: Partial<Task>) => {
    try {
      await TaskService.updateTask(id, updatedTask);
      router.push('/');
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!task) return <p>Task not found</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">Update Task</h2>
        <TaskForm initialData={task} onSubmit={handleSubmit} buttonText="Update" />
      </div>
    </div>
  );
};

export default UpdateTask;
