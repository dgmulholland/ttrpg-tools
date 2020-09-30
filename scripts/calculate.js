wolfstagramCalculateButton.onclick = () => {
    let curr_followers = parseInt(document.forms["wolfstagramCalculatorForm"]["curr_followers"].value);
    let cha = parseInt(document.forms["wolfstagramCalculatorForm"]["cha"].value);
    let d20 = parseInt(document.forms["wolfstagramCalculatorForm"]["d20"].value);
    let d4 = parseInt(document.forms["wolfstagramCalculatorForm"]["d4"].value);

    // alert(curr_followers + ", " + cha + ", " + d20 + ", " +  d4);
    let likes = Math.floor(((d20 + cha)/100) * curr_followers);
    let new_followers = Math.floor((1/d4) * likes);

    alert("Likes: " + likes + "\n" + "New Followers: " + new_followers + "\n" + "New Total Followers: " + (curr_followers + new_followers))
    // document.getElementById("calcOutput").innerHTML = ("Likes: " + likes + "\n" + "New Followers: " + new_followers + "\n" + "New Total Followers: " + (curr_followers + new_followers));

};