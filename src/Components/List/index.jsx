import { FaRegTrashAlt } from "react-icons/fa";
export function List ({ index, elem, func })  {
  return (
    <ul key={index}>
      <li>
        <p>{elem.title}</p>
      </li>
      <li>
        <strong>{elem.status}</strong>
        <button onClick={() => func(elem)}>
          <FaRegTrashAlt />
        </button>
      </li>
    </ul>
  );
};


