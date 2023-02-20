import { collection, getDocs } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { db } from "../../../firebase"

const projectsRef = collection(db, "projects")

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (_req.method) {
      case "GET":
        const snapshot = await getDocs(projectsRef)
        const projects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        res.status(200).json(projects)
        break
      default:
        res.setHeader("Allow", ["GET"])
        res.status(405).end(`Method ${_req.method} Not Allowed`)
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
