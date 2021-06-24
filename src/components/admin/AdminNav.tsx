import { Link } from "react-router-dom";

interface IAdminNavProps {}

export const AdminNav = ({}: IAdminNavProps) => {
  return (
    <nav>
      <Link to="/admin">Home</Link>
      <Link to="/admin/lessonBuilder">Lesson Builder</Link>
      <Link to="/signout">Sign Out</Link>
    </nav>
  );
};
