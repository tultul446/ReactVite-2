import { useState } from 'react';

export default function ChatWithCypher( ) {
  const [messages, setMessages] = useState([
    { text: "Lorem ipsum dolar sit general sac\nmascho werho", sender: "bot" },
    { text: "Lorem ipsum dolar sit general sac\nmascho werho", sender: "bot" },
    { text: "Lorem ipsum dolar sit general sac\nmascho werho", sender: "bot" },
    { text: "Lorem ipsum dolar sit general sac\nmascho werho", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue('');
      // Here you would typically also send the message to your backend/API
    }
  };
  if (!isOpen) {
    return (
      <button
      onClick={() => setIsOpen(true)}
        className="scroll bottom-4 right-4 text-white px-4 py-2 rounded-lg shadow-lg  transition-all"
      >
        <img src="./icon3.png" alt="" />
      </button>
    );
  }


  return (

    <section>
<div className='h-[641px] max-w-[450px] bg-gray-100'>

    <div className="flex flex-col ">
      <div className="bg-[rgb(242,105,34)] text-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-center">Chat with Cypher</h1>
      
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white text-4xl font-bold hover:text-gray-200"
        >
          ✕
        </button>
      
      
      
      
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg max-w-xs lg:max-w-md ${message.sender === 'bot' ? 'bg-white' : 'bg-zinc-800 text-white ml-auto'}`}
          >
            {message.text.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-300 ">
        <div className="">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your question..."
            className="flex-1 w-full border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />

<div className='flex justify-between items-center mt-2 text-[#71717A]'>
    <span className='flex text-3xl gap-3'>
<i class="fa-solid fa-camera"></i>
<i class="fa-solid fa-images"></i>
<i class="fa-solid fa-paperclip"></i>
</span>

          <button
            onClick={handleSend}
            className="bg-[rgb(252,152,102)] text-white px-4 py-2 rounded-lg hover:bg-[#f26922] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>

          </div>

        </div>
      </div>
    </div>
    </div>
    </section>
  );
}