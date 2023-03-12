function textlen(self)
{
    let limit = self.value.slice(0,140);
    document.getElementById("tweet").value =limit;
    document.getElementById("inplen").innerHTML=limit.length;
    let space = self.value.match(/\S+/g);
    let word = space ? space.length : 0;
    document.getElementById("countword").innerHTML= word + " words"; 
}
