import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  return (
    <div className="card">
      {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}

      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Supplier Name: {item.supplierName}</p>
      <p>Price: Rs. {item.price}</p>
      <p>{item.description}</p>

      <div className="actions">
        <Link className="btn" to={`/edit-item/${item._id}`}>
          Edit
        </Link>

        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;