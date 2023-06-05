import * as React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Store from "./components/store"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Store />} />
    </Routes>
  </ChakraProvider>
)
