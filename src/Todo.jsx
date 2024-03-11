// eslint-disable-next-line react/prop-types
export default function Todo({task,isDone}){
    // if(isDone==='true'){
    // return (
    //     <li className="text-3xl">Task finished : {task}</li>
    // )
    // }
    // else{
    // return (
    //     <li className="text-3xl">Task to do : {task}</li>)
    // }
    return(
        // <li> {isDone  ? 'Task finished ' : 'Works on' } : {task}</li>
        <li>{task} {isDone||"Do it"}</li>
    )
}