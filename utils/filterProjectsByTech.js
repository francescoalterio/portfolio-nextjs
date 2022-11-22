export function filterProjectsByTech(projects, language) {
    return language === "all"
    ? [...projects]
    : language === "favorites"
    ? projects.filter((x) => x.isFavorite)
    : projects.filter((x) => {
        const techsToLowerCase = x.coreTechs.map((x) => x.toLowerCase());
        return techsToLowerCase.includes(language);
      });
}