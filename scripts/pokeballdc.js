pokeballCalculateButton.onclick = () => {
    let level = parseInt(document.forms["pokeballCalculatorForm"]["level"].value);
    let sr = parseInt(document.forms["pokeballCalculatorForm"]["sr"].value);
    let hp = parseInt(document.forms["pokeballCalculatorForm"]["hp"].value);



    // alert("Likes: " + likes + "\n" + "New Followers: " + new_followers + "\n" + "New Total Followers: " + (curr_followers + new_followers))
    document.getElementById("calcOutput").innerHTML = ("DC: " + (10 + Math.floor(sr) + level + Math.floor(hp/10)));

};