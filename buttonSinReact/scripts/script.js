//vanilla JavaScript

//recuperamos el boton
const buttons = document.querySelectorAll("button");
//para utilizar la funcion en cada botòn
buttons.forEach((button) => {
    //al hacer click en el boton tenemos que ejecutar una funcion
    button.addEventListener("click", function () {
        //recuperar la id del atributo html
        const id = button.getAttribute("data-id");

        //llamara a un servicio para actualizar si me gusta
        //ejemplo togglelike(id)

        if (button.classList.contains("liked")) {
            button.classList.remove("liked");
            button.innerText = "Me gusta";
        } else {
            button.classList.add("liked");
            button.innerText = "No me gusta";
        }
    });
});
