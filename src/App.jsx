import React from "react";
import one from './assets/one.svg'
import two from './assets/two.svg'
const BlogPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <nav className="w-[1200px] flex justify-between items-center py-4">
        <h1 className="text-blue-600 font-bold text-lg">blogpage</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700">☰</button>
        </div>
      </nav>
      <header className="w-full bg-blue-400 text-white flex flex-col items-center py-12">
        <h2 className="text-2xl font-bold">Blog Afrianska</h2>
        <p className="mt-2 text-[#FFFFFF66] text-center w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
      <main className="w-[941px] py-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Article"
            className="w-full border rounded-lg px-4 py-2 shadow-sm"
          />
        </div>

        <h3 className="font-semibold text-gray-700 mb-4">POPULAR</h3>

        <div className="flex mb-10">
          <div className="flex-1 pr-6">
            <h4 className="text-2xl font-bold mb-2">
              Feugiat sodales at nullam tellus.
            </h4>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
              posuere nibh tempor fringilla porta pellentesque ipsum.
            </p>
            <span className="text-sm text-gray-500">
              Samanta Leuthier · May 5 · 3 min read
            </span>
          </div>
          <div className="w-[350px] h-[200px] overflow-hidden rounded-lg">
            <img
              src={one}
              alt="Main"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col">
              <div className="w-full h-[150px] mb-3 overflow-hidden rounded-lg">
                <img
                  src={two}
                  alt={`Article ${i}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h5 className="font-semibold mb-2">
                {i === 1
                  ? "Porta proin tellus sed pulvinar odio cu pulvinar."
                  : i === 2
                  ? "Non quam tortor, proin eu egestas scelerisque purus."
                  : "Amet amet sed pharetra risus sit eget interdum."}
              </h5>
              <p className="text-gray-600 text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="text-xs text-gray-500">
                Samanta Leuthier · May 5 · 3 min read
              </span>
            </div>
          ))}
        </div>

        <div className="text-right">
          <a href="#" className="text-blue-600 font-semibold">
            SEE ALL POPULAR ARTICLE
          </a>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
