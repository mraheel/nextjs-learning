import CounterView from "@/components/Counter";
export default function Home() {
  return (
    <div className='flex flex-col items-center h-screen'>
      <div className="m-auto">
        <h4 className="text-3xl text-gray-400 font-semibold tracking-widest font-sans uppercase">Counter Application</h4>
        <CounterView />
      </div>
        
    </div>
  )
}
