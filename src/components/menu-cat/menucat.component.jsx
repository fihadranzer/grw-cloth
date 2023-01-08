import CategoryItem from "../category-item/category.components";
import "./menucat.style.scss";

const Menucat = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Menucat;
