import Link from "next/link";

export default async function Home() {
  const url = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const res = await url.json()
  console.log(res)
  return (
    <main>
      
    {
      res.map((posts : any , index : number) =>(
        <div key={index}>
          <Link href={`${posts.id}`}>
        <h2 className="text-7xl m-6  ">{posts.id}<br />{posts.title}</h2>
        
         
        </Link>
      </div>
      ))
   
    
    },
    
        
        </main>
  );
}
