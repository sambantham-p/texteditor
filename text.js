function textlen(self)
{
    var len = self.value.length;
    var limit = self.value.slice(0,140);
    document.getElementById("tweet").value =limit;
    document.getElementById("inplen").innerHTML=limit.length;
    var space = self.value.match(/\S+/g);
    var word = space ? space.length : 0;
    document.getElementById("countword").innerHTML= word + " words"; 
}