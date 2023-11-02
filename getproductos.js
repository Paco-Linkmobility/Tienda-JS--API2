$(document).ready(function() {
    // Hacer una solicitud AJAX para obtener los productos del API
    $.get('https://fakestoreapi.com/products?limit=8', function(data) {
      // Recorremos los datos obtenidos del API
      data.forEach(function(product) {
        // Crear un elemento 'div' con la clase 'item'
        var item = $('<div class="item"></div>');
  
        // Crear elementos 'span' para el título, precio y una imagen
        var title = $('<span class="titulo-item">' + product.title + '</span>');
        var price = $('<span class="precio-item">$' + product.price + '</span>');
        var image = $('<img src="' + product.image + '" alt="" class="img-item">');
  
        // Crear un botón "Agregar al Carrito"
        var button = $('<button class="boton-item">Agregar al Carrito</button>');
  
        // Agregar los elementos creados al elemento 'div' con la clase 'item'
        item.append(title);
        item.append(image);
        item.append(price);
        item.append(button);
  
        // Agregar el elemento 'div' al documento HTML
        $('#productos-container').append(item);
        // Agregar console.log para ver las variables
        console.log('Título: ' + product.title);
        console.log('Precio: $' + product.price);
        console.log('Imagen URL: ' + product.image);

      });
    });
  });
  