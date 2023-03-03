import TaskCard from './TaskCard'

const Main = ({setShowModal,tasks,handleDelete,editTask}) => {

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">Tasks list</h1>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <button
          onClick={() => setShowModal(true)}
            className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="text-sm hidden md:block">Add Task</span>
          </button>
        </div>
      </div>
      <p className="text-slate-500">
        {tasks.length
          ? "Hello, here are your tasks"
          : "No task is present, so let's add one."}
      </p>
      <div className="flex flex-col-reverse my-5">
          {
            tasks.map((t) => <TaskCard key={t.id} {...t} handleDelete={handleDelete} editTask={editTask}/>)
          }  
      </div>
    </div>
  );
};

export default Main;
