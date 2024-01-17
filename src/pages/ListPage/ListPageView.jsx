import React from 'react'
import PopUpController from './../../components/PopUp/PopUpController';
import { FaDeleteLeft } from "react-icons/fa6";

// sadece arayüz yani jsx kodu yazarız
const ListPageView = ({posts,isOpen,setIsOpen,handleDelete}) => {
  return (
    <main className='container-sm px-5 py-5 md:px-40 lg:px-52'>
        <h1>Gönderi Sayısı: <span className='font-bold'>{posts?.length}</span></h1>  
        {!posts ? <p>Yükleniyor..</p>
        : posts.map((post) => 
        <div key={post.id} className='w-full bg-black my-5 p-5  rounded-md shadow shadow-[#ffffff42] hover:shadow-yellow-300 cursor-pointer' key={post.id}>
            <div className='flex justify-between'>
                <h3>{post.title}</h3>
                <p
                // hangi kullanıcı için açtığımızı bilmek için
                 onClick={()=>setIsOpen(post.user)}
                 className='text-yellow-500'>{post.user}</p>
            </div>
            <p className='mt-4 text-slate-300 flex justify-between'>{post.text}
            <FaDeleteLeft onClick={()=>handleDelete(post.id)}  />
            </p>
        </div> )}
        {isOpen && <PopUpController isOpen={isOpen} setIsOpen={setIsOpen} />}
    </main>
  )
}

export default ListPageView