import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetails } from "../../services/getdata";

const ItemDetails = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    getDetails(id).then((data) => {
      setPhoto(data);
      setNewTitle(data.title);
    });
  }, [id]);

  const updateHandler = () => {
    setIsUpdate(true);
    // console.log('update')
  };
  const saveHandler = () => {
    setIsUpdate(false);
    // console.log('save')
  };
  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    const tt = e.target.value;
    setNewTitle(tt);
  };

  return (
    <div>
      <h1> Photo Details</h1>
      <img src={photo.thumbnailUrl} alt="photo" />
      {!isUpdate && (
        <>
          <p>{newTitle}</p>
          <button onClick={updateHandler}>aUpdate</button>
        </>
      )}
      {isUpdate && (
        <>
          <input type="text" value={newTitle} onChange={onChangeHandler} />
          <button onClick={saveHandler}>Save</button>
        </>
      )}
    </div>
  );
};
export default ItemDetails;
