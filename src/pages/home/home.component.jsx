import Banner from "../../components/banner/banner.component";
import Categories from "../../components/categories/categories.component";
import Courses from "../../components/courses/courses.component";

const Home = () => {
    return (
        <div className="home-page">
            <Banner />
            <Categories />
            <Courses />
        </div>
    )
}

export default Home;