import SectionTitle from "../../UI/section-title/setion-title.component";
import Cards from "./cards/cards.component";

const Categories = () => {
    return (
        <div className="my-4 mb-10">
            <SectionTitle>Categories</SectionTitle>
            <div className="container mx-auto">
                <Cards />
            </div>
        </div>
    )
}

export default Categories;