import React from 'react'
import Loading from '../components/Loading'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, Link } from 'react-router-dom'
const url = 'https://indianculture.nvli.in/rest/archive?nid='

const Archivedetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [archives, setArchives] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getArchives() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.search_results) {
          const {
            nid: nid,
            title: title,
            field_dc_contributor: field_dc_contributor,
            field_dc_type: field_dc_type,
            field_digital_image_file: field_digital_image_file, 
          } = data.search_results[0]
          
          const newArchives = {
            nid,
            title,
            field_dc_contributor,
            field_dc_type,
            field_digital_image_file,
          }
          setArchives(newArchives)
        } else {
          setArchives(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getArchives()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!archives) {
    return <h2 className='section-title'>no to display</h2>
  }

  const { nid, title, field_dc_contributor, field_dc_type, field_digital_image_file } =
  archives

  return (
    <section className='section cocktail-section'>
     
      <Container>
      <Row>
        <Col> </Col>
        <Col></Col>
        <Col> <Link to='/archives/' className='btn btn-primary'>
        back home
      </Link></Col>
      </Row>
      <Row>
        <Col> <img src={title} alt={title} /></Col>
        <Col> <h2 className='section-title'>{nid}</h2>
      <div className='drink'>
       
        <div className='drink-info'>
          <h2> 
            {title}
          </h2>
          <p>
            <span className='drink-data'>category: </span>
            {field_digital_image_file}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {field_dc_type}
          </p>
          
          <p>
            <span className='drink-data'>instructions: </span>
            {field_dc_contributor}
          </p>
          
        </div>
      </div></Col>
      </Row>
     
    </Container>
     
    </section>
  )
}

export default Archivedetails