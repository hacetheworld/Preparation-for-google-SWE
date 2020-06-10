function shortenPath(path) {
  let startsWithSlash = path[0] === "/";
  let stk = [];
  path = path.split("/");
  path = path.filter((token) => token !== "" && token !== ".");
  if (startsWithSlash) {
    stk.push(" ");
  }

  for (let token = 0; token < path.length; token++) {
    if (path[token] == "..") {
      if (stk[stk.length - 1] == ".." || stk.length == 0) {
        stk.push(path[token]);
      } else if (stk[stk.length - 1] !== " ") {
        stk.pop();
      }
    } else {
      stk.push(path[token]);
    }
  }
  return stk.join("/");
}

console.log(shortenPath("/foo/../../../test/../test/../foo//bar/./baz"));
console.log(shortenPath("../../foo//bar/./baz"));
