class BoredActivity {

    content = "";



    getNewActivity() {
            let holder = this;
            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                let randomActivity = JSON.parse(this.responseText);
                document.getElementById("activity").innerHTML = randomActivity.activity;
                holder.content = randomActivity.activity;
                } else if (this.readyState != 4) {
                    document.getElementById("activity").innerHTML = "LOADING!";
                } else {
                        document.getElementById("activity").innerHTML = "SOMETHING WENT WRONG!";
                    }
                
                }
            
            ajax.open ("GET","http://www.boredapi.com/api/activity/", true);
            ajax.send();
            
    }


    getNewGroupActivity() {
        let holder = this;
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
            let randomActivity = JSON.parse(this.responseText);
            document.getElementById("activity").innerHTML = randomActivity.activity;
            holder.content = randomActivity.activity;
            } else if (this.readyState != 4) {
                document.getElementById("activity").innerHTML = "LOADING!";
            } else {
                    document.getElementById("activity").innerHTML = "SOMETHING WENT WRONG!";
                }
            
            }
        
        ajax.open ("GET","http://www.boredapi.com/api/activity?participants=4", true);
        ajax.send();
        
}

getNewRelaxActivity() {
    let holder = this;
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        let randomActivity = JSON.parse(this.responseText);
        document.getElementById("activity").innerHTML = randomActivity.activity;
        holder.content = randomActivity.activity;
        } else if (this.readyState != 4) {
            document.getElementById("activity").innerHTML = "LOADING!";
        } else {
                document.getElementById("activity").innerHTML = "SOMETHING WENT WRONG!";
            }
        
        }
    
    ajax.open ("GET","http://www.boredapi.com/api/activity?type=relaxation", true);
    ajax.send();
    
}
    

}


let bored = new BoredActivity();
let group = new BoredActivity();
let relax = new BoredActivity();

document.getElementById("randomactivity").addEventListener("click", bored.getNewActivity);
document.getElementById("groupactivity").addEventListener("click", group.getNewGroupActivity);
document.getElementById("relaxingactivity").addEventListener("click", relax.getNewRelaxActivity);
