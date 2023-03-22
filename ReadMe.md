This is solution to project Etch-a-sketch by [Odin project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

I found this challenge really great it helped me learn more about how event listeners work in JavaScript as well as CSS and JavaScript Interaction

proud of this
JavaScript :
``` 
function createGrid(length ) {
for (let i = 0; i < length ** 2; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    
    square.addEventListener("mouseover", function() {
       if (!isRandom) 
       
            {
             this.style.backgroundColor = sqColor;
            } 
         else {
                this.style.backgroundColor = generateRandomColor();
         }   
       },
            
             );
    container.appendChild(square)


}

} ```

Code : [github] (https://github.com/chiragchhabria2/Etch-a-sketch)
Live Site : [Live Site] (https://chiragchhabria2.github.io/Etch-a-sketch/)

Additional thanks to kind people of StackOverFlow and openAI 