function updateUI(route) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.classList.remove("active");
  });
  const activeSection = document.querySelector(`[data-route=${route}]`);
  activeSection.classList.add("active");
}

export { updateUI };
