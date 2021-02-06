
import './App.css';
import Profile from "./profile/Profile";
import avatar from "./assets/avatar.jpg";

function App() {
  const hundleName=(a)=> alert(`the profil user is ${a}`)
  return (
    <div style={{backgroundColor:"black",height:"1500px", display:"flex",justifyContent:"flex-end"}} >
        <div>
            <Profile fullName="Zid wassim"
             bio="Remplissez votre vie d'expériences afin d'avoir toujours une belle histoire à raconter" 
            proffesion="Ingenieur mécanique" 
            hundleName={hundleName}> 
            <img src={avatar}  alt= "emoji"  style={{width:"200px", borderRadius:"100px" }} />
            </Profile>
        </div>
    </div>
  );
}

export default App;
