const FormInputsWrapper = (props) => {
    return (
        <div className="w-full h-full mb-12">
            <h2 className="m-3">مشخصات فردی</h2>
            {props.children}
        </div>
    )
}

export default FormInputsWrapper;