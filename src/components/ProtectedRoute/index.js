import Cookies from 'js-cookie'
import { Navigate} from 'react-router-dom'

const ProtectedRoute=({children})=>{
    const jwt_token=Cookies.get('jwt_token')
    if(jwt_token===undefined){
        return <Navigate to="/login" replace />
    }
    return children
}
export default ProtectedRoute

