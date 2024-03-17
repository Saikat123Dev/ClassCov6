import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { FaNoteSticky } from 'react-icons/fa6';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { BsFillTrophyFill } from 'react-icons/bs';
import { GiLevelFour } from 'react-icons/gi';
import { MdAssignmentAdd } from 'react-icons/md';
import Calendar from '../components/Calender';

function Home() {
  const data = [
    { name: 'Attendance', Performance: 50 },
    { name: 'Quiz', Performance: 30 },
    { name: 'Assignment', Performance: 69 },
    { name: 'ExtraCurricular', Performance: 60 },
  ];

  return (
    <main className="main-container dark-theme">
      <div className="main-title dark-bg">
        <h2 className="text-2xl font-bold text-white">Hi there, Manish Chakraborty</h2>
      </div>

      <div className="main-cards">
        <div className="card dark-card shadow-lg">
          <div className="card-inner">
            <h3>Trophy</h3>
            <BsFillTrophyFill className="card_icon text-4xl" />
          </div>
          <h1>30</h1>
        </div>
        <div className="card dark-card shadow-lg">
          <div className="card-inner">
            <h3>Badges and Levels</h3>
            <GiLevelFour className="card-icon text-4xl" />
          </div>
          <h1>5</h1>
        </div>
        <div className="card bg-blue-300 dark-card shadow-lg">
          <div className="card-inner">
            <h3>View shared Notes</h3>
            <FaNoteSticky className="text-3xl" />
          </div>
          <h1>15</h1>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Calendar />
      </div>

      <div className="charts">
        <div>
          <div className=" bg-[#8884d8] rounded-2xl dark-card shadow-xl">
            <h1 className="text-center text-2xl font-bold text-white">Pending Assignment</h1>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-slate-700 rounded-b-2xl shadow-md">
              <div className="text-center">Subject</div>
              <div className="text-center">Teachers Name</div>
              <div className="text-center">Deadline</div>
              <div className="text-center">English</div>
              <div className="text-center">Mr.A.Roy</div>
              <div className="text-center">22.03.2024</div>
              <div className="text-center">Science</div>
              <div className="text-center">Mr.Shyam Saha</div>
              <div className="text-center">23.3.2024</div>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Performance" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;