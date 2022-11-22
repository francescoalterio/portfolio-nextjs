import { filterProjectsByTech } from "../utils/filterProjectsByTech";
import { projectsDB } from "../projects";

describe("filterProjectsByTech", () => {

    test("si le pasamos como lenguaje all devuelve todos los proyectos", () => { 
        expect(filterProjectsByTech(projectsDB, 'all')).toStrictEqual(projectsDB)
    })

    test("si le pasamos como lenguaje favorites devuelve los favoritos", () => {
        const favorites = projectsDB.filter(x => x.isFavorite)
        expect(filterProjectsByTech(projectsDB, 'favorites')).toStrictEqual(favorites)
    })
    
    test("si le pasamos un lenguaje en lowercase devuelve correctamente", () => {
        const language = 'javascript'
        const filtered = projectsDB.filter(x => {
            const techsToLowerCase = x.coreTechs.map((x) => x.toLowerCase());
            return techsToLowerCase.includes(language);
        })
        expect(filterProjectsByTech(projectsDB, language)).toStrictEqual(filtered)
    })

    test("si le pasamos un lenguaje en pascal case devuelve correctamente", () => {
        const language = 'Javascript'
        const filtered = projectsDB.filter(x => {
            const techsToLowerCase = x.coreTechs.map((x) => x.toLowerCase());
            return techsToLowerCase.includes(language.toLowerCase());
        })
        const result = filterProjectsByTech(projectsDB, language)
        expect(result).toStrictEqual(filtered)
    })

    test("si le no le pasamos lenguaje devuelve todos los proyectos", () => {
        const result = filterProjectsByTech(projectsDB)
        expect(result).toStrictEqual(projectsDB)
    })

    test("si le pasamos un lenguaje que no esta, devuelve un array vacio", () => {
        const result = filterProjectsByTech(projectsDB, "Java")
        expect(result).toStrictEqual([])
    })
})