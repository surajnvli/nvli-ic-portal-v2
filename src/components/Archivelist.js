import React from 'react'
import Archives from './Archives'
import Loading from './Loading'
import { useGlobalContext } from '../Archivecontext'

const Archivelist = () => {
  const { archives, loading } = useGlobalContext()
  // console.log(cocktails)

  if (loading) {
    return <Loading />
  }

  if (archives.length < 1) {
    return (
      <h2 className='section-title'>
        no search criteria
      </h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Archives</h2>
      <div className='cocktails-center row'>
        {archives.map((item) => {
          return <Archives key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Archivelist
