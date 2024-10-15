import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container justify-between">
      <h3 className="font-palanquin text-4xl leading-[68px] font-bold lg:max-w-md">
        Sing Up for <span className="text-coral-red ">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex justify-end  items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text"
          placeholder="Subscribe@arif.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full"
        
        >
          
        <Button 
        label="Sign UP"/>
        </div>
      </div>


    </section>
  )
}

export default Subscribe
