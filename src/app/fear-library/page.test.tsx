import FearLibraryPage from "./page"
import { render } from "@testing-library/react"

describe("FearLibraryPage", () => {
  it("renders without crashing", () => {
    render(<FearLibraryPage />)
  })
})
