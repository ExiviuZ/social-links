function App() {
  return (
    <div className="w-[90%] max-w-[350px] bg-neutral-app-dark-grey mx-auto rounded-[10px] p-[1rem] mt-[5rem] text-neutral-app-white text-center">
      <div className="mb-[1.5rem] ">
        <img
          src="avatar-jessica.jpeg"
          className="w-[70px] rounded-full block mx-auto mb-[1rem]"
          alt=""
        />
        <h1 className="text-[1.5rem] font-[500]">Jessica Randall</h1>
        <p>
          <span className="text-primary-app-green pb-[1.5rem] font-[500] inline-block">
            London, United Kingdom
          </span>{" "}
          <br /> "Front-end developer and avid reader."
        </p>
      </div>

      <div className="flex flex-col gap-[1rem]">
        <div className="bg-neutral-app-grey font-[500] rounded-[10px] py-[0.75rem] px-[1rem] hover:bg-primary-app-green hover:transition-colors hover:text-neutral-app-off-black cursor-pointer">
          Github
        </div>
        <div className="bg-neutral-app-grey font-[500] rounded-[10px] py-[0.75rem] px-[1rem] hover:bg-primary-app-green hover:transition-colors hover:text-neutral-app-off-black cursor-pointer">
          Frontend Mentor
        </div>
        <div className="bg-neutral-app-grey font-[500] rounded-[10px] py-[0.75rem] px-[1rem] hover:bg-primary-app-green hover:transition-colors hover:text-neutral-app-off-black cursor-pointer">
          LinkedIn
        </div>
        <div className="bg-neutral-app-grey font-[500] rounded-[10px] py-[0.75rem] px-[1rem] hover:bg-primary-app-green hover:transition-colors hover:text-neutral-app-off-black cursor-pointer">
          Twitter
        </div>
        <div className="bg-neutral-app-grey font-[500] rounded-[10px] py-[0.75rem] px-[1rem] hover:bg-primary-app-green hover:transition-colors hover:text-neutral-app-off-black cursor-pointer">
          Instagram
        </div>
      </div>
    </div>
  );
}

export default App;
