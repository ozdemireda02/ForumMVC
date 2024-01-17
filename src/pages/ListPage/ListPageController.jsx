import { useEffect, useState } from "react"
import ListPageView from "./ListPageView"
import Model from "./ListPageModel"
import { toast } from 'react-toastify';

// controller bileşeni de kullanııcı etkileşimi ile tetiklenen fonksiyonlar/ state tutulur.
const ListPageController = () => {
    const [posts,setPosts] = useState([]);
    const [isOpen,setIsOpen] = useState(null);

    const handleDelete = async(postId) => {
        try {
            await Model.deletePosts(postId);
            const updatedItems = posts.filter(post => post.id !== postId);
            setPosts(updatedItems)
            toast.error("postunuz silindi")
        
        } catch (err) {
            console.error("Silme işlemi başarısız:", err);
        }
 }

    // useEffect ile de kullanıcı etkileşimini izlediğimiz için controller da tanımlıyoruz.
    useEffect(() => {
        Model.getPosts()
        .then((data) => setPosts(data));
    },[])
    // kontrollür bileşeninde arayüz yani jsx kodu yazmayız
    // view bileşenini döndürürüz.

   return (
   <ListPageView posts={posts} isOpen={isOpen} setIsOpen={setIsOpen} handleDelete={handleDelete} />
  )
}

export default ListPageController