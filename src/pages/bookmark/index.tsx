import CommonHeader from '@/components/common/header/CommonHeader'
import styles from './styles/index.module.scss'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import { CardDTO } from '../index/types/card'

function index() {
    const [data, setData] = useState([])
    const getData = () => {
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))
        if(getLocalStorage || getLocalStorage !== null) setData(getLocalStorage)
        else setData([])
    }

    //페이지가 로딩될 때 getData 실행
    useEffect(() => {
        getData()
    },[])
    return (
        <div className={styles.page}>
            <CommonHeader/>
            <main className={styles.page__contents}>
                {/* 데이터가 없을때 */}
                {data.length === 0 ? (<div className={styles.page__contents__noData}>조회 가능한 데이터가 없습니다.</div>) : 
                (
                    data.map((item : CardDTO)=>{
                       return <Card prop={item} key={item.id}/>
                    })

                )}
            </main>
        </div>
    )
}

export default index