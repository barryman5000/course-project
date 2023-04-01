import { NavLink } from "react-router-dom";

function CategoryLink(props) {
    return (
      <div className="cat-image">
        <NavLink to={props.to}>{props.children}</NavLink>
      </div>
    );
  }
  
export default CategoryLink;