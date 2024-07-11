'use client';

import { useEffect, useState } from 'react';
import TaskService, { Task } from '../services/taskService';
import Link from 'next/link';
import { FaFileExcel, FaPlus } from 'react-icons/fa';
import TaskList from '../components/task/TaskList';
import ConfirmModal from '../components/modals/ConfirmModal';
import Pagination from '../components/ui/Pagination';
import Header from '@/components/layout/Header';

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await TaskService.getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = (id: number) => {
    setTaskToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (taskToDelete !== null) {
      try {
        await TaskService.deleteTask(taskToDelete);
        setTasks(tasks.filter(task => task.id !== taskToDelete));
        setShowModal(false);
      } catch (error) {
        console.error('Failed to delete task:', error);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setTaskToDelete(null);
  };

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="bg-white shadow rounded-lg overflow-hidden mt-4">
        <TaskList tasks={currentTasks} handleDelete={handleDelete} />
        {tasks.length > tasksPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      <ConfirmModal show={showModal} onClose={closeModal} onConfirm={confirmDelete} />
    </div>
  );
};

export default Home;
