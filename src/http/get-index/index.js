// learn more about HTTP functions here: https://arc.codes/http
exports.handler = async function http (req) {
  console.log("logging appears to provoke the issue");
  setTimeout(() => {}, 2000);
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `hello!`
  }
}