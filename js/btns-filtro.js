/** @format */
$(function () {
  // función que pone el btn filtro como activo o desactivado
  $(".filter").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    // función que hace el filtro de las casas o depas
    let valorBtn = $(this).attr("data-nombre");
    if (valorBtn === "vcasa") {
      $(".vcasa").show("1000");
      $(".vdepa").hide("1000");
      console.log(valorBtn);
    } else {
      $(".vdepa").show("1000");
      $(".vcasa").hide("1000");
      console.log(valorBtn);
    }
  });
});
