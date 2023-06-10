import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa' 



export default function Contact() {
  // const [error, setError] = useState(false);

  // const handleBlur = (e) => {
  //   if (e.target.value === "") {
  //     setError(true);
  //   }
  // };
  return (
    <section
      name="contact"
      className="w-full h-screen flex-col justify-center text-center py-20"
    >
      {/* <form 
        method="POST"
        action="https://getform.io/f/cc670db9-52f4-4efe-a6e3-588a7eb01955"
        className="flex flex-col max-w-[600px] w-full"
      > */}
        <div className="pb-8 border-black">-
          <p className="text-4xl font-bold inline border-pink-600 text-gray-300">
            Get in touch!
          </p>
          <p className="text-xl text-gray-700 py-10 text-center">
            If you would like to contact me, please click on the social icons or email me.  
          </p>
          
      
     
        <p>Email: w_riyasat@hotmail.com</p>
       
        <ul className="social-icons">
          <li>
          <a className="flex justify-center items-center box-border h-14 w-24 border-2 px-4 py-3 my-8 mx-auto text-gray-300 p-4 rounded-full  hover:bg-blue-600 hover:border-blue-600"
            href="https://www.linkedin.com/in/wajeehariyasat">
               <FaLinkedin size={40} />
            </a>
          </li>
          <li>

            <a className="flex justify-center items-center box-border h-14 w-24 border-2 px-4 py-3 my-8 mx-auto text-gray-300 p-4 rounded-full  hover:bg-[#0f0f0f] hover:border-[#0f0f0f]"
             href="https://github.com/WajhR">
             <FaGithub size={30} />
            
            </a>
          </li>
        </ul>
      

     
          <a 
          href="mailto:w_riyasat@hotmail.com">
        <button className="text-white box-border border-2 h-14 w-29 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-full">
          Email Me!
        </button>
        </a>


        </div>
        {/* <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          onBlur={handleBlur}
        />
        {error && <p className="text-red-500">This field is required</p>}
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
          onBlur={handleBlur}
        />
        {error && <p className="text-red-500">This field is required</p>}
        <textarea
          className="bg-[#ccd6f6]  p-2"
          name="message"
          rows="10"
          placeholder="Message"
          onBlur={handleBlur}
        ></textarea>
        {error && <p className="text-red-500">This field is required</p>} */}
     
      {/* </form> */}
    </section>
  );
}
