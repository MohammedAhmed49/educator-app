export const BUTTON_TYPES_CLASSES = {
    'purple': 'bg-secondary text-white hover:bg-white hover:text-secondary',
    'white-purple': 'bg-white text-secondary hover:bg-secondary hover:text-white',
    'turquoise': 'bg-primary text-white hover:bg-white hover:text-primary',
    'white-turquoise': 'bg-white text-primary hover:bg-primary hover:text-white',
}

const Button = (props) => {
    
    return (
        <button className={`${BUTTON_TYPES_CLASSES[props.type]} ${props.classnames ? props.classnames : ''} px-4 py-2 rounded transition duration-300`} {...props}>
            {props.children}
        </button>
    )
}

export default Button;