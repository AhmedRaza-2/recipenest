import { Link } from "react-router-dom";
import chefs from "../data/chefs";
import '../styles/ChefList.css';

function ChefList() {
  return (
    <div className="chef-list">
      <h2>Chefs</h2>
      <div className="chef-cards">
        {chefs.map(chef => (
          <div key={chef.id} className="chef-card">
            <img src={chef.image} alt={chef.name} />
            <h3>{chef.name}</h3>
            <p>{chef.bio}</p>
            <p><strong>Specialty:</strong> {chef.specialty}</p>
            <p><strong>Rating:</strong> {chef.rating} ★</p>
            <Link to={`/profile/${chef.id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChefList;
