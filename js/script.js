failure = 0;
isLove = false;
niceTry = false;
counter = 0;

$("#nggakMau").on("click", function () {
  let id = $(this).attr("id");
  let randomX = Math.floor(Math.random() * ($(".button_wrapper").width() * 0.5 - 100));
  let randomY = Math.floor(Math.random() * $(".button_wrapper").height());
  playAudio(id);
  $(this).animate(
    {
      left: randomX + "px",
      top: randomY + "px",
    },
    "fast"
  );

  failure++;
  console.log(failure);

  if (failure == 9) {
    $(this).text("waduh jangan dimainin");
  }
  if (failure == 13) {
    $(this).text("Dibilangin jangan!!!");
  }
  if (failure == 17) {
    niceTry = true;
    $(this).text("hiks hiks hiks");
    if (niceTry == true) {
      $(this).on("click", function () {
        window.location.href = "https://www.youtube.com/watch?v=iz7hDDlW8yQ&t=64s";
      });
    }
  }
});

function playAudio(name) {
  let audio = new Audio("resource/" + name + ".mp3");
  audio.play();
}
