const bodyLock = () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden"
}
const bodyUnlock = () => {
    document.body.style.overflow = "auto"
}

export {
    bodyLock,
    bodyUnlock
}