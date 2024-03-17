


function Assignments() {
  
  return (
    
 <>
 <div className='bg-[#161616]  h-screen text-white'>
 

 <div className="grid grid-cols-1 ">
 <div className='w-full flex justify-center '><h1 className='mt-10 text-3xl uppercase font-bold'>Assignments Section</h1></div>
 < hr/>

        <div className="">
        <div className="grid grid-cols-1 gap-4">
    <div className=' flex justify-center text-2xl uppercase mt-10 font-bold' >Topic</div>
    <div  className=' ml-10 mr-10 text-wrap  font-bold text-xl'> Q . write about the global warming</div>
    <div  className=' ml-10 mr-7 text-wrap'>
     
<div className="grid grid-cols-3 grid-rows-1 gap-3">
        <div >Instruction:</div>
</div>
    Global warming refers to the long-term increase of the earth's average temperature due to human activities, mainly through the emission of greenhouse gases (GHG) such as carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O).  and fluorinated gases. These gases trap heat in the Earth's atmosphere, causing a phenomenon known as the greenhouse effect. Although a certain level of greenhouse gases must be present in the atmosphere to keep the Earth warm enough to support life, human activities, particularly the burning of fossil fuels (coal, oil, and natural gas) used for energy, industrial processes, deforestation, and some agriculture. In practice, the concentration of gases increases significantly, exacerbating the greenhouse effect.
    
    </div>
    <h1 className='ml-9'>dedline : 17.03.2024 sun 12.00 pm </h1>
   
    
</div>
        </div>



    <div className="row-start-4 mt-52">

    <div className="grid grid-cols-3 grid-rows-1 gap-4">
        <div >
        {/* //for ppt */}
        <div className="flex flex-wrap justify-center gap-10  px-3 py-2 rounded-3xl">
 <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs bg-slate-600 rounded-lg" />

 <button
          // onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#28c244"}}
          >Submit Document File</button>
 </div></div>

 {/* for video */}
    <div className="col-start-3"><div className="flex flex-wrap justify-center gap-10  px-3 py-2 rounded-3xl">
 <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs bg-slate-600 rounded-lg" />

 <button
          // onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#28c244"}}
          >Submit Video File</button>
 </div></div>
</div>
    
    
    </div>
</div>
    
 
  </div>
 </>
  )
}

export default Assignments;
