import { useEffect, useState } from "react";
import { Link,NavLink } from 'react-router-dom';

const Navigation = (props)=> {

    const [setupMenuToggle,setSetupMenuToggle] = useState(false);
    const [securityMenuToggle,setSecurityMenuToggle] = useState(false);
    const [userMenuToggle,setUserMenuToggle] = useState(false);
    const [breadCrumbToggle,setBreadCrumbToggle] = useState(false);

    let activeStyle = {
        "background-color": "#7a0e9e"
    }

    function menuToggle(e,menuName,toggle){
        
            switch(menuName){
                case "setup":
                    setSetupMenuToggle(toggle);
                    setUserMenuToggle(false);
                    setSecurityMenuToggle(false);
                    break;
                case "security":
                    setSetupMenuToggle(false);
                    setUserMenuToggle(false);
                    setSecurityMenuToggle(toggle);
                    break;
                case "user":
                    setSetupMenuToggle(false);
                    setUserMenuToggle(toggle);
                    setSecurityMenuToggle(false);
                    break;
                case "breadCrumb":
                    setBreadCrumbToggle(toggle);
                case "document":
                    setBreadCrumbToggle(toggle);
                    setUserMenuToggle(toggle);
                    setSecurityMenuToggle(toggle);
                    setSetupMenuToggle(toggle);
                    break;
                     
            }
            e.stopPropagation();
        
    }
 
    useEffect(()=> {
        const listener = (e)=>{ menuToggle(e,"document",false);};
        
        document.addEventListener("click",listener);

        return ()=>  document.removeEventListener("click",listener);
    });
    function showMenuClass(toggleState) {
        if(toggleState){
            return "dropdown-menu show";
        }
        else{
            return "dropdown-menu";
        }
    }

    function showBreadCrumbClass(){
        if(breadCrumbToggle){
            return "collapse navbar-collapse d-flex-lg justify-content-end show";
        }
        else{
            return "collapse navbar-collapse d-flex-lg justify-content-end";
        }
    }

   

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-violet" >
            <div className="container-fluid ">
                <Link to="/" className="navbar-brand"><i className="bi bi-calendar-week"></i> TimeSheet</Link>
                <button className="navbar-toggler" onClick={(e)=>menuToggle(e,"breadCrumb",!breadCrumbToggle)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={showBreadCrumbClass()} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="mytimesheet">My Timesheet</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="teams" >Teams</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" href="#" onClick={(e)=> menuToggle(e,"setup",true)}>Setup</a>
                            <ul className={showMenuClass(setupMenuToggle)}>
                                <li>
                                    <NavLink className="dropdown-item" to="setup/accounts" style={({ isActive }) => isActive ? activeStyle : undefined } onClick={(e)=> menuToggle(e,"setup",false)} >Accounts</NavLink>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#" onClick={(e)=> menuToggle(e,"setup",false)}>Projects</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#" onClick={(e)=> menuToggle(e,"setup",false)}>Tasks</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" href="#" onClick={(e)=> menuToggle(e,"security",true)}>Security</a>
                            <ul className={showMenuClass(securityMenuToggle)}>
                                <li>
                                    <a className="dropdown-item" href="#" onClick={(e)=> menuToggle(e,"security",false)} >Roles</a>
                                   
                                </li>
                                <li>
                                     <a className="dropdown-item" href="#" onClick={(e)=> menuToggle(e,"security",false)} >Users</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle last-nav-menu" role="button" href="#" onClick={(e)=> menuToggle(e,"user",true)} ><i className="bi bi-person-circle"></i> User</a>
                            <ul className={showMenuClass(userMenuToggle)} >
                                <li>
                                    <a className="dropdown-item" href="#" onClick={(e)=> menuToggle(e,"user",false)} >View Profile</a>
                                    
                                    
                                </li>
                                <li>
                                <a className="dropdown-item" href="#" onClick={(e)=> menuToggle(e,"user",false)} >Change Password</a>
                                </li>
                                <li><hr className="dropdown-divider"/></li>

                                <li><a className="dropdown-item" href="#" onClick={(e)=> menuToggle(e,"user",false)} >Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
               
            </div>
        </nav>
        {props.children}
        </>
    )

};
export default Navigation;