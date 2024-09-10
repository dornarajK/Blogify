//* text 

function truncateArticles(selector, maxLength) {
  let articles = document.querySelectorAll(selector);

  articles.forEach(function (article) {
    let text = article.textContent.trim();
    if (text.length > maxLength) {
      article.textContent = text.substring(0, maxLength) + '...';
    }
  });
}

// Usage example:
truncateArticles('.titleContent', 30);
truncateArticles('.descriptionContent', 80);
truncateArticles('.articalContent', 100);


// * time 
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btn').addEventListener('click', timefu);

  function timefu() {
    let in_date = new Date();
    let formattedDate = in_date.getDate() + '/' + (in_date.getMonth() + 1) + '/' + in_date.getFullYear();
    let time = in_date.getHours() + ":" + in_date.getMinutes();

    let fullDateTime = formattedDate + ':' + time;
    document.querySelector('input[name="time"]').value = fullDateTime;


  }
});
