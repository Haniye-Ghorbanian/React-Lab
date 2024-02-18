const PageWrapper = (props) => {
    return (
        <div className="w-full h-screen flex flex-row text-3xl font-bold justify-center align-center py-16 px-24">
            {props.children}
        </div>
    )
}

export default PageWrapper;