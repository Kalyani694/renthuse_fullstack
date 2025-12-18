import './list.css'
import Card from"../card/Card"
import { listData } from '../../lib/dummyData'

function List(){
  const data= listData
  return (
    <div className='list'>
     {data.map(item=>(
              <Card key={item.id} item={item}/>
          ))}
    </div>
  )
}

export default List