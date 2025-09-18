function calcula(form) {
    if (!form.IVA[0].checked && !form.IVA[1].checked) {
        let mensaje = "No has seleccionado el tipo de calculo";
        console.log(mensaje);
        alert(mensaje);
    } else {
        console.log("HA ENTRADO");
        let sumatorio = 0;
        if (document.getElementById("productoSeleccionado1").checked) sumatorio += parseFloat(document.getElementById("productoSeleccionado1").value);
        if (document.getElementById("productoSeleccionado2").checked) sumatorio += parseFloat(document.getElementById("productoSeleccionado2").value);
        if (document.getElementById("productoSeleccionado3").checked) sumatorio += parseFloat(document.getElementById("productoSeleccionado3").value);
        if (document.getElementById("productoSeleccionado4").checked) sumatorio += parseFloat(document.getElementById("productoSeleccionado4").value);
        if (document.getElementById("productoSeleccionado5").checked) sumatorio += parseFloat(document.getElementById("productoSeleccionado5").value);
        if (document.getElementById("productoSeleccionado6").checked) sumatorio += parseFloat(document.getElementById("productoSeleccionado6").value);
        console.log(sumatorio);
        if (form.IVA[0].checked) {
            //form.mostrarCalculo.value = sumatorio;
            alert("PRECIO: " + sumatorio);
        } else {
            //form.mostrarCalculo.value=(total*0.21);
            alert("PRECIO CON IVA: " + sumatorio * 0.21);
        }
    }
}