import { Link ,Outlet} from "react-router-dom";

const AdminDashboard=()=>{
    return(
        <>
        <div id="adminHeader">
        <h1>Welcome to Admin AdminDashboard</h1>
        </div>
        <div id="adminData">
              <div id="adminMenu">


               <Link to="insertitem" className="menucolor">Insert Item  </Link>

              </div>
              <div id="adminContent">
                
                   <Outlet/>
                
                 </div>
            </div>
        
        </>
    )
}
export default AdminDashboard;