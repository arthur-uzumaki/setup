
interface HabitProps{
  completed: number;
}



export function Habit(props:HabitProps){
  return(
    <p className="bg-zinc-900 w-10 h-10  rounded flex justify-center text-white" >{props.completed}</p>
  )
}