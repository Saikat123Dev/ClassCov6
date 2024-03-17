import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Attendance', 
          Class9: 50,
        
        },
        {
          name: 'Quiz',
         
        
        Class9: 30,
          
        },
      
        {
          name: 'Assignment',
          
          Class9: 69,
          
        },
        {
          name: 'ExtraCurricular',
         
         
          Class9:60,
          
        },
       
      
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2 className='text-2xl font-bold'>Hi there , Mr.Manish Chakraborty </h2>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Students Notes Overview</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>30</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Preview Quizzes</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Pending Requests</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>3</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Grade Pending Assignments</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>15</h1>
            </div>
        </div>

        <div className='charts'>
         

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
                <Line type="monotone" dataKey="Class9" stroke="#8884d8" activeDot={{ r: 8 }} />
                
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home