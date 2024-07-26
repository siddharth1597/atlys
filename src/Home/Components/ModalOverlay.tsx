const ModalOverlay = (props: any) => {
    return (
        <div className="backdrop-blur-sm w-full h-screen flex justify-center absolute top-0 left-0">
            {props.children}
        </div>
    )
}
export default ModalOverlay;