import { Project } from "../../types"
import List from "./components/List"

const getProjects = async () => {
  const response = await fetch("http://localhost:3000/api/projects", {
    cache: "force-cache",
  })
  const projects: Project[] = await response.json()
  return projects
}

const page = async () => {
  const projects = await getProjects()

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem 0rem",
      }}
    >
      <List items={projects}></List>
    </section>
  )
}

export default page
