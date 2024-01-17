import axios from "axios"

// veri ile alakalı her türlü yapıyı model de tanımlarız.
// model oluştururken genelde class'ları tercih ederiz

export default class ListPageModel {
    // api den post verilerini alıp fonk. çağrıldığı yere gönderir.
    static async getPosts(){
      const res = await axios.get("http://localhost:3077/posts");
      return res.data;
    }

    static async deletePosts(postId){
      await axios.delete(`http://localhost:3077/posts/${postId}`);
    }
}
