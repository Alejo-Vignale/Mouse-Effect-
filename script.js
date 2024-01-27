for (let i = 0; i < 350; i++) {
  let box = document.createElement("span");
  document.getElementById("container").appendChild(box);
}
let cursor = document.getElementById("cursor");
window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX - 250 + "px";
  cursor.style.top = e.clientY - 250 + "px";
});


document.querySelector('.aboutMe').addEventListener('click', function(){
  document.querySelector('.show').style.display =
          document.querySelector('.show').style.display === 'none'
            ? 'block'
            : 'none';
});

document.querySelector('.myProjects').addEventListener('click', function(){
  let showSection = document.querySelector('.show');
  showSection.style.display = showSection.style.display === 'none' ? 'block' : 'none';
});
