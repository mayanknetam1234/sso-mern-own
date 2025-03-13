import useAuthStore from "./useAuthStore"

const Dashboard = () => {
  const {authUser,lucky_no,logout,isLogoutUser}=useAuthStore();
  const handleLogout=()=>{
    logout();
  }
  return (
    <div>
      <h1>Welcome {authUser.name}{" "} </h1>
      <h2 className="font-bold my-4">Your lucky no is {lucky_no}</h2>
      <button 
      type="button"
      onClick={handleLogout}
      disabled={isLogoutUser}
      >
        {!isLogoutUser?"Logout":"Loading..."}
      </button>
    </div>
  )
}
export default Dashboard