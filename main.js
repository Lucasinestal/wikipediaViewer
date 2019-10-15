input = document.getElementById("wikipediaInput");
let submit = document.getElementById("submitButton");
submit.addEventListener("click", function(){
let search = input.value
let output = document.getElementById("output");


 $.ajax({
    type:"GET",
    dataType: "json",
    data:{name: name},
    url:`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}`,
    success:function(data){
    console.log(data);
    
    console.log(data[1][0]);
    console.log(data[2][0]);
    console.log(data[3][0]);
        
    
    
    //write out to output section
    function createListItem(){
        //creating Div
        let container = document.getElementById("container");
        let outputSection = document.createElement("div");
        outputSection.id = "output-section";
        container.append(outputSection);
        // creating ul
        let list = document.createElement("ul");
        outputSection.append(list);
        let item = document.createElement("li");
        list.append(item);
        // looping through Array
        for (let i = 0; i < data[2].length; i++ ){
            /*
            console.log(i);
            console.log(data[1][i],data[2][i],data[3][i]);
            */
            let outputArray = [i];
            outputArray.push(data[1][i],data[2][i],data[3][i]);
            console.log(outputArray);
            
        };
       
        

        
   
        
        

   } 
   
   createListItem()
    
    }
});

  

})