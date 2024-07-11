interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center py-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 border rounded ${currentPage === 1 ? 'text-gray-500' : 'bg-white text-blue-700 hover:bg-blue-500 hover:text-white'}`}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-white text-blue-500 hover:bg-blue-500 hover:text-white'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages ? 'text-gray-500' : 'bg-white text-blue-700 hover:bg-blue-500 hover:text-white'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
