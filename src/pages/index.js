import * as React from "react"
import { Link } from "gatsby"

// markup
export default function Home() {
  return (
    <main style={{ width: '100%', height: '90%', margin: 0, padding: 0, top: 0 }}>
            <title>Sky-net</title>
            <div id='mainBar'>
                {/* <h1>Hello World</h1> */}
                <button id='first'>
                    OFFICAL INFORMATION
                </button>
                <button id='second'>
                    REQUEST HELP
                </button>
                <button id='third'>
                    CHAT WITH EMERGENCY SERVICES
                </button>
                {/* <p style={{margin: 0}}>hello</p> */}
            </div>
        </main>
  )
}
