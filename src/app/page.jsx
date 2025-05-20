// import Image from "next/image";
"use client"
import {motion} from "framer-motion";




export default function Home() {
  return (
<>
<div className=" bg-gray-100 w-full h-full py-[3px] ">
<motion.div initial={{opacity: 0, y: -100}} transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.4}} animate={{opacity: 1, y: 0}} className="mx-auto flex justify-center h-full">
      <div className="w-[98%]  shadow-2xl border-[4px] border-gray-400  rounded-lg min-h-[99vh]">
        <div>
          
        <div className=" bg-gray-300 border-b-[4px] border-white border-double">
            <div>
              <h2 className=" text-[13px] text-black text-center  font-bold 
          ">Welcome to the Blackboard</h2> 
           <p className="text-center  text-[11px] font-semibold text-[#5d5f61] hover:text-green-500 cursor-pointer transition duration-700 ease-in-out">Hira Trusted Trader</p>
            </div>
           
              
        </div>

        </div>
  </div>
</motion.div>

    </div>
  {/* fdsf */}
  
  </>
  );
}
