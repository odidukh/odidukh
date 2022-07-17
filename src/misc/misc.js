export function navigateTo(scrollToId) {
    const element = document.getElementById(scrollToId);
    element.scrollIntoView({
        behavior: "smooth",
    });
}
