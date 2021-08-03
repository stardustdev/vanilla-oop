let pageNo = 1, numPerPage = 25;

function fetchData() {
  fetch(`https://api.github.com/repos/angular/angular/contributors?page=${pageNo}&per_page=${numPerPage}`)
    .then(res => res.json())
    .then(data => {
      const html = data.map(contributor => `
        <tr>
          <td>
            <img class="avatar" src="${contributor.avatar_url}" />
          </td>
          <td>${contributor.login}</td>
          <td>${contributor.contributions}</td>
        </tr>
      `).join('');
      document.getElementById('contributor-list').innerHTML = html;
      document.getElementById('page-no').innerHTML = `Page Number: ${pageNo}`;
    });
}

fetchData();

document.getElementById("prev-button").addEventListener("click", () => {
  if (pageNo > 1) {
    pageNo--;
    fetchData();
  }
});

document.getElementById("next-button").addEventListener("click", () => {
  pageNo++;
  fetchData();
});
