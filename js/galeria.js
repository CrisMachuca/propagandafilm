<script>
  $(document).ready(function() {
    // Inicializar Lightbox
    $(".lightbox").lightbox();

    // Navegación entre imágenes con flechas del teclado
    $(document).on('keyup', function(e) {
      if (e.keyCode === 37) {
        $('.lightbox').lightbox('prev');
      } else if (e.keyCode === 39) {
        $('.lightbox').lightbox('next');
      }
    });
  });
</script>