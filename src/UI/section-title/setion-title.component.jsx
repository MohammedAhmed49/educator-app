const SectionTitle = ({ children, type = 'default' }) => {

    const TITLES_TYPES_CLASSES = {
        'default': 'before:bg-secondary',
        'reversed': 'before:bg-white'
    }

    const TEXT_TYPES_CLASSES = {
        'default': 'text-white',
        'reversed': 'text-secondary'
    }

    return (
        <div className="text-center">
            <h2 className={`mt-10 mb-20 text-4xl font-semibold before:block before:absolute before:-inset-1 before:-skew-y-3 ${TITLES_TYPES_CLASSES[type]} relative inline-block`}>
                <span className={`relative ${TEXT_TYPES_CLASSES[type]}`}>{children}</span>
            </h2>
        </div>
    )
}

export default SectionTitle;