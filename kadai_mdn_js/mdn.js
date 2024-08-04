const today = new Date();
const dateName = () => {
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  console.log(year + '年' + month + '年' + date + '日');
}

dateName();