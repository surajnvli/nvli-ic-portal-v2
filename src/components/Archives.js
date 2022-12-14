import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const Archives = ({ name, id, pdffile, type, issuedate }) => {
  return (

<Card className="col-md-3">
<Card.Img variant="top" src={`https://indianculture.nvli.in${pdffile}`}/>
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>{type}<br/>{issuedate}
  </Card.Text>
  <Link to={`/archives/${id}`} className='btn btn-primary btn-detail'>
          {id}
        </Link>
</Card.Body>
</Card>



  )
}

export default Archives
