
const SectionTitle = ({ children }) => {
    return (
        <div className="text-center">
            <h2 className="mt-10 mb-20 text-4xl font-semibold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block">
                <span className="relative text-white">{children}</span>
            </h2>
        </div>
    )
}

export default SectionTitle;