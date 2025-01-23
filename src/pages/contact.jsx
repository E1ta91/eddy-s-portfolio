import React from 'react';

const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "fb7bb008-65fd-40d3-8dee-c41618d4f84d");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };




    return (
        <div className='space-y-6 p-3'> {/* Added padding to ensure content has some space from the edges */}
            <h1 className='text-6xl text-white'>Let's Connect!</h1>

            <div className='space-y-4'>
                <h1 className='text-white'>Message Me</h1>

                <form onSubmit={onSubmit} className='space-y-3'>
                    <div className='flex space-x-3'>
                        <div className='flex flex-col space-y-2'>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className='w-[41vw] md:w-56  rounded-lg h-12 bg-[#1A1A1A] pl-5 text-white border border-gray-600'
                            />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className='w-[41vw] md:w-56 rounded-lg h-12 bg-[#1A1A1A] pl-5 text-white border border-gray-600'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col '>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write a message..."
                            className='h-48 p-4 md:w-[33.6vw] rounded-lg bg-[#1A1A1A] text-white border border-gray-600'
                        ></textarea>
                    </div>

                    <button type='submit' className='w-[34vw] h-[7vh] bg-orange-400 rounded-lg'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
