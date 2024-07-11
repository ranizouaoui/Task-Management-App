import Link from 'next/link';
import { FaFileExcel, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-blue-700 p-4 rounded">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <h1 className="text-3xl font-semibold text-white mb-4 md:mb-0">Task Management</h1>
        <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:space-x-4">
          <button className="bg-white text-blue-700 px-6 py-3 rounded flex items-center justify-center w-full md:w-auto">
            <FaFileExcel className="mr-2" /> Export to Excel
          </button>
          <Link href="/create" legacyBehavior>
            <a className="bg-white text-blue-700 px-6 py-3 rounded flex items-center justify-center w-full md:w-auto">
              <FaPlus className="mr-2" /> Add New Task
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
