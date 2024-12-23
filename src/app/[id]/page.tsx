import React from 'react'

const Dynamicposts  = async (props : any) => {
    const url = await fetch (`https://jsonplaceholder.typicode.com/posts/${props.params.id}`);
    const res = await url.json()
    console.log(res)
  return (
    

    <main className='text-center mt-4 space-y-4'>
    <h1 className="text-5xl"> {res.userId}</h1>
    <h1 className="text-5xl"> {res.id} </h1>
    <h1 className="text-7xl">{res.title}</h1>
    <p className="text-3xl">{res.body}</p> 
    </main>
  )
}

export default Dynamicposts; 