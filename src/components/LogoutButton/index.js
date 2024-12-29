import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const LogoutButton=()=>{
    const navigate = useNavigate()
    
    const logoutOfSite=()=>{
        
        Cookies.remove('jwt_token')
        navigate('/login',{replace:true})

    }
   
    
    return(
        <div>
            <button onClick={logoutOfSite}>Logout</button>
        </div>
    )
}
export default LogoutButton