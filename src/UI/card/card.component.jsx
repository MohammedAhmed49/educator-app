import {
    Card as TailwindCard,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const FloatedCard = (props) => {
    return (
        <div className="group">
            <TailwindCard className="w-96 h-full">
                <CardHeader className="relative h-56 transition ease-in-out transform group-hover:-translate-y-2">
                    <img
                        src={props.imageURL}
                        alt="img-blur-shadow"
                        className="h-full w-full transition ease-in-out"
                    />
                </CardHeader>
                <CardBody className="text-center flex-grow">
                    <Typography variant="h5" className="mb-2">
                        {props.title}
                    </Typography>
                    <Typography>
                        {props.details}
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <Link to={`categories/${props.subLink}`} className="text-secondary font-semibold">Check courses</Link>
                    <Link to={`info/${props.subLink}`} className="text-primary font-semibold">More details</Link>
                </CardFooter>
            </TailwindCard>
        </div>
    )
}

export const NonfloatedCard = (props) => {
    return (
        <TailwindCard className={`w-96 ${props.classname}`}>
            <CardHeader floated={false} className="h-40">
                <img src={props.imageURL} alt="course-picture" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {props.courseName}
                </Typography>
                <Typography className="font-medium text-primary" textGradient>
                    {props.courseInstructor}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Link to={`/course/${props.courseLink}`} className="text-secondary">Enroll to this course</Link>
            </CardFooter>
        </TailwindCard>
    )
}