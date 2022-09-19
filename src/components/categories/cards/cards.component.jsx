import Card from "../../../UI/card/card.component";

const Cards = () => {
    return (
        <div>
            <div className="flex justify-between align-stretch">
                <Card
                    title="Front-end Development" 
                    details="Front end development is a style of computer programming that focuses on the coding and creation of elements and features of a website that will then be seen by the user." 
                    imageURL="https://assets.wpdeveloper.com/2022/04/Backend_vs_Frontend_Development_What_s_The_Difference_1280_720-1.jpeg"
                    subLink="front-end"
                />
                <Card
                    title="Back-end Development" 
                    details="Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers." 
                    imageURL="https://www.mooc.org/hubfs/web-programming-languages.jpg"
                    subLink="back-end"
                />
                <Card
                    title="Mobile Development" 
                    details="Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources." 
                    imageURL="http://stratycontechnologies.com/assets/img/blog/mb.jpg"
                    subLink="web-development"
                />
            </div>
        </div>
    )
}

export default Cards;