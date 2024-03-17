import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import "../StudentApp.css"
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div>
            <div className='sidebar-brand bg-black rounded-full h-[70px] w-[70px]'>
                <img src='https://cdn-icons-png.flaticon.com/512/4892/4892735.png'className='h-16 w-16'/> 
                </div>
                PROFILE
                </div>
            
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <div className="flex">
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            </div>

            <li className='sidebar-list-item'>
                <a href="/notes">
                    <BsFillGrid3X3GapFill className='icon'/> 
                    Upload Notes
                </a>
            </li>
            <li className='sidebar-list-item flex flex-row'>
                <a href="quiz">
                    <BsPeopleFill className='icon'/>Attempt Quiz
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="assignment">
                    <BsListCheck className='icon'/> Assignment
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Update Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar