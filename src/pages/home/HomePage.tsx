
import { useNavigate } from 'react-router-dom'
import { Description } from '../../components/description/Description'
import { Header } from '../../components/header/Header'
import "./home.css"
export const HomePage = () => {
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate(path);
    }

   //... rest of the component code...
  return (
   <>
   <Header/>
   <section className='sectionStart'>
    <Description/>
    <button className='orreryGoTO' onClick={()=>{goTo("/orrery")}}>Go to Orrery</button>
    <button className='buttonGoTo' onClick={()=>{goTo("/quizz")}}>
        Are you ready?
    </button>

   </section>
   </>
  )
}
