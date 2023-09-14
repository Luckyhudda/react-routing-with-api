export const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
};
export const getDetails = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(
    (res) => res.json()
  );
};
