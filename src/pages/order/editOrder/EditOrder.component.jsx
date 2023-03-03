import React from 'react'
import styles from './EditOrder.module.styl'
import Button from '@/components/button/Button.component'
import {Product} from '@/pages/product/Product.component'

function EditOrder(props) {
  const {orderProducts, setOrderProducts} = props 
  const {client, setClient} = React.useState('')
  const {table, setTable} = React.useState('')

  <div className={styles.detailHeader}>
    <span>Customer Name:</span>
    <input type='text' value={client} onChange={(e) => setClient(e.target.value)} />
    <span>Table:</span>
    <input type='text', value={table} onChange={(e) => setTable(e.target.value)}/>
  </div>
}
