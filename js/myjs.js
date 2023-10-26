let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})


BuildDataTable('#testTable');
function BuildDataTable(dt)
{
  var table = $(dt).DataTable({
    order: [[1, 'asc']],
    "scrollX": true,
    "ordering": true,
  }).buttons().container().appendTo(dt+'_wrapper .col-md-6:eq(0)');
}