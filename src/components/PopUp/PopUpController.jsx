import { useEffect, useState } from "react"
import PopUpView from "./PopUpView"
import Model from "./PopUpModel"

const PopUpController = ({setIsOpen,isOpen}) => {
 
  const [posts,setPosts] = useState(null);
  
// model açıldığında kullanıcının gönderilerini alır
  useEffect(() => {
    Model.getUserPosts(isOpen)
      .then((data) => setPosts(data))
      
    
  },[])
  return (
    <PopUpView posts={posts} setIsOpen={setIsOpen} isOpen={isOpen} />
  )
}

export default PopUpController