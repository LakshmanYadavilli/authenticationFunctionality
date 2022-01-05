// Write your JS code here
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const out = () => {
    Cookies.remove('is_login')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={out}>
        LogOut
      </button>
    </div>
  )
}

export default LogoutButton
