import { useState, useEffect } from "react";
import { getData } from "../../services/getdata";
import { useNavigate } from "react-router-dom";
const List = () => {
  const [items, setItems] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    getData()
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  const uiList = items.map((picture) => {
    return (
      <ul key={picture.id}>
        <li>{picture.title}</li>
        <button onClick={() => navigation(`/photo/${picture.id}`)}>
          {" "}
          View
          {/* <Link to={`/photo/${picture.id}`}>View</Link> */}
        </button>
      </ul>
    );
  });

  return <div className={{ margin: "2rem" }}>{uiList}</div>;
};
export default List;
