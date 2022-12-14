import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://indianculture.nvli.in/rest/archive'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [archives, setArchives] = useState([])

  const fetchArchives = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      const { search_results } = data
      if (search_results) {
        const newArchives = search_results.map((item) => {
          const { nid, title, field_pdf_digital_file, field_dc_type, field_dc_date_issued } =
            item
          return {
            id: nid,
            name: title,
            pdffile: field_pdf_digital_file,
            type: field_dc_type,
            issuedate: field_dc_date_issued,
          }
        })
        setArchives(newArchives)
      } else {
        setArchives([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchArchives()
  }, [searchTerm, fetchArchives])

  return (
    <AppContext.Provider
      value={{
        loading,
        archives,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
