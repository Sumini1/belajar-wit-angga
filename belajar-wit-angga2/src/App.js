import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function Categories() {
  return (
    <>
      <h1>Categories</h1>;
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to="/categories/27777744"> Course </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
function CategoriesDetail() {
  let params = useParams();
  console.log("params >>");
  console.log(params);
  return <h1>Categories</h1>;
}

function About() {
  return <h1>About</h1>;
}

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/categories"}>Categories</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<CategoriesDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
