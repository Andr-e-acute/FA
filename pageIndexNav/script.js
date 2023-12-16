const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-butt");
const prevButton = document.getElementById("prev-butt");
let pagesButt;
const paginationLimit = 4;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

prevButton.addEventListener("click", () => {
  setCurrentPage(currentPage - 1);
});
nextButton.addEventListener("click", () => {
  setCurrentPage(currentPage + 1);
});
// page indicator navigation
const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  paginationNumbers.appendChild(pageNumber);
};

//   needs to get change for the empty spaces
const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
  refreshPageButtons();
};

// display items on screen functionality

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handleActivePageNumber();
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  listItems.forEach((item, index) => {
    item.classList.add("hidden");

    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");

    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};
function refreshPageButtons() {
  pagesButt = document.querySelectorAll(".pagination-number");
  pagesButt.forEach((butt) => {
    const pageIndex = Number(butt.getAttribute("page-index"));
    if (pageIndex) {
      butt.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
}
getPaginationNumbers();
setCurrentPage(1);
