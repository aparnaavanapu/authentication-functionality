import Login from '../Login'
import {useNavigate} from 'react-router-dom'

const LoginFormWrapper=()=>{
    const navigate = useNavigate()
    return <Login navigate={navigate}/>
}
export default LoginFormWrapper