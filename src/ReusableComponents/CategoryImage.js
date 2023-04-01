import { NavLink } from "react-router-dom";
function CategoryImage(props) {
    return (
      <div className="cat-image">
        <NavLink to={props.to}>
          <img alt={props.alt} width="500" height="300" src={props.src} />
        </NavLink>
      </div>
    );
  }

export default CategoryImage;

