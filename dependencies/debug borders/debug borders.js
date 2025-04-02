// let debug_mode = true;

// show element borders (debug)
if (debug_mode) {
    let show_borders = false;
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'b') {
        show_borders = !show_borders;
  
        document.querySelectorAll("*").forEach((el) => {
          if (show_borders) {
            el.classList.add("show-borders");
          }else{
            el.classList.remove("show-borders");
          }
        })
      }
    });
  }