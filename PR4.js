    function myFunction(){
        let element = document.querySelector("ul");
        for ( let i = 1; i <= 5; i++){
            let liElement = document.createElement("li");
            liElement.innerText= 0 + i;
            element.appendChild(liElement);
        }
        console.log(element);

    }
    



