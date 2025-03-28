window.closePopup = (id) => {
    console.log("Close "+id);
    localStorage.setItem("popup-closed-"+id, Date.now());

    document.getElementById(id).parentElement.classList -= "is-active"
}

window.onload = (event) => {
    var popups = document.getElementsByClassName("dropdown-autoshow");

    for (let i = 0; i < popups.length; i++) {
        const storage = localStorage.getItem("popup-closed-"+popups[i].id);
        if ( !storage || storage > Date.now() + 24*60*60*1000 )
            popups[i].parentElement.classList += " is-active";
    }
    
};