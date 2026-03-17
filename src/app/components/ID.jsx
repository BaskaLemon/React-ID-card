export const ID = () => {
  return (
    <div className="m-10">
      <div className="bg-teal-300 h-125 w-150 rounded-4xl">
        <div className="m-5 ">
          <div className="text-6xl font-sans font-bold text-teal-600 p-5 border-b-6 border-solid border-teal-600">
            STUDENT
          </div>
          <div className="text-3xl pr-20 p-3 text-white">IDENTITY CARD</div>
        </div>
        <div className="p-5 flex flex-col gap-7">
          <div>
            <p className="text-teal-600 font-bold text-2xl">Name</p>
            <p className="text-3xl">Baasandorj Erdenebayar</p>
          </div>
          <div>
            <p className="text-teal-600 font-bold text-2xl">Gender</p>
            <p className="text-3xl">Male</p>
          </div>
          <div>
            <p className="text-teal-600 font-bold text-2xl">Email</p>
            <p className="text-3xl">baskaerka763@gmail.com</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
};
