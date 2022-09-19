import {
    Card as TailwindCard,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div class="group">
            <TailwindCard className="w-96 h-full">
                <CardHeader color="black-900" className="relative h-56 transition ease-in-out transform group-hover:-translate-y-2">
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

export default Card;