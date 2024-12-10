/*
  Name: Utsav Patel
  Student ID: 100959365
  Date: 10 December 2024
  Description: JavaScript file for adding interactivity to the comments section.
*/

const commentWrapper = document.querySelector('.comment-wrapper');
const showHideBtn = document.querySelector('.show-hide');

showHideBtn.onclick = function () {
  let showHideText = showHideBtn.textContent;
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    commentWrapper.setAttribute('aria-hidden', 'false');
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    commentWrapper.setAttribute('aria-hidden', 'true');
  }
};
