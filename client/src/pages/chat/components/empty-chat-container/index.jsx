import LottieAnimation from "@/components/common/lottie-animation";

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-[#1f1f1f] md:flex  flex-col justify-center items-center hidden duration-1000 transition-all">
      <LottieAnimation />
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-1000 text-center">
        <h3 className="poppins-medium">
          <span className="text-blue-500"></span> Start a new 
          <span className="text-blue-500"> Chat!</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
