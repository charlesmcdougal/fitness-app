import React from "react"
import Header from "./Header"
import Card from "../UI/Card"

const Loading = () => {
  return (
    <React.Fragment>
      <Header />
      <section>
        <Card>
          <div>Loading spinner goes here...</div>
        </Card>
      </section>
    </React.Fragment>
  )
}

export default Loading