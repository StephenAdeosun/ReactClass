export default function Cards ({img, title, desc, url}){
    return(
        
        <div className="max-w-[500px] min-h-[420px] p-4  rounded-4xl mx-auto shadow-xl">

            <div>
            <img src={img} alt="" className="rounded-lg" />
            </div>

            <h1 className="font-[700] font-raleway my-4 text-center text-3xl">{title}</h1>
            <p className="text-center text-lg">{desc}</p>

            <button className="text-white shadow-lg hover:bg-white hover:text-blue-400 hover:animate-bounce shadow-blue-300 flex mt-[18px] rounded-[200px] bg-blue-400 p-6 mx-auto"><a href={url} className="">CLICK HERE</a></button>

        </div>

       

    )

}


