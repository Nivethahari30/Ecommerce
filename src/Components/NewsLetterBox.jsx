import React from 'react';

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">
                Subscribe Now & get 20% offer
            </p>
            <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aliquid.
            </p>

            <form 
                onSubmit={onSubmitHandler} 
                className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border py-3 px-4"
            >
                <input 
                    className="w-full sm:flex-1 outline-none px-3 py-2 border border-gray-300 rounded" 
                    type="email" 
                    placeholder="Enter Your Email"
                />
                <button 
                    type="submit" 
                    className="bg-black text-white text-xs px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsLetterBox;
