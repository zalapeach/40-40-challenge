const inactivityTime = () => {
    let t; 
    window.onload = resetTimer; // DOM Events
    window.onmousemove = resetTimer;
    window.onkeypress = resetTimer; 

    function logout() { alert('¿Sigues trabajando?')} 
    function resetTimer() { clearTimeout(t); t = setTimeout(logout, 100000) // 1000 milisec = 1 sec
    }
   }
   export default inactivityTime

