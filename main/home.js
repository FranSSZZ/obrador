document.addEventListener("mousemove", function(e) {
    var customCursor = document.getElementById("custom-cursor");
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
  });
  