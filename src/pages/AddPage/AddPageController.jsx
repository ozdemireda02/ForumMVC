import AddPageView from './AddPageView'
import Model from './AddPageModel';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';

const AddPageController = () => {
  const navigate = useNavigate();

  // form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1.inputlardaki verileri alıp bir post objesi oluştur.
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    // 2.post verisine id ekle
    newPost.id = v4();
    
    // 3.api'ye veriyi kaydet
    Model.createPost(newPost)

    // 4.anasayfaya yönlendir.
    .then(() => {
      // başarılı ise
      toast.success("Postunuz eklendi");
      navigate("/")})
      // hata bildirimi
      .catch(() =>{
        toast.error("Postu gönderirken bir hata oluştu")
      });
    
  }
  return (
    <AddPageView handleSubmit={handleSubmit} />
  )
}

export default AddPageController