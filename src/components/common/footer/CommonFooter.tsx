import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import styles from './CommonFooter.module.scss'
import { imageData } from '@/recoil/seletors/imageSelector'
import { pageState } from '@/recoil/atoms/pageState'
import { useState } from 'react'

function CommonFooter() {
  const imgSelector = useRecoilValueLoadable(imageData)
  const [page, setPage] = useRecoilState(pageState)
  const [step, setStep] = useState<number>(0)

  //페이지 리스트 UI 생성
  const newArr : number[] = new Array()
  for(let i=1; i<= imgSelector.contents.total_pages; i++){
    newArr.push(i)
  }
  const length = newArr.length
  const divide = Math.floor(length/10) + (Math.floor(length%10) > 0 ? 1 : 0)
  const res = []

  for(let i=0; i<= divide; i++){
    //배열 0qnxj n개씩 잘라 새 배열에 넣기
    res.push(newArr.splice(0, 10))
  }



  const moveToPage = (selected : number) => {
    setPage(selected)
  }
  const moveToPrev =  () => {
    if(step === 0) return
    else {
      setStep(step - 1)
      setPage(res[step-1][0])
    }
  }

  const moveToNext = () => {
    if(step < res[step].length -2){
      setStep(step+1)
      setPage(res[step+1][0])
    }else return 
  }

  return (
    <footer className={styles.footer}>
        <div className={styles.pagination}>
            <button className={styles.pagination__button} onClick={moveToPrev}>
                <img src='src/assets/icons/icon-arrowLeft.svg'/>
            </button>
            {/* 변경될 UI 부분 */}
            {res[step] && res[step].map((page : number, index : number) => {
              if(page < 11){
                return (
                  <button className={index === page -1 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} 
                          key={page} onClick={()=> moveToPage(page)}>{page}</button>
                )
              }else{
                return (
                  <button className={index === page -1 - step * 10 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} 
                          key={page} onClick={()=> moveToPage(page)}>{page}</button>
                )
              }
            })}
            <button className={styles.pagination__button} onClick={moveToNext}>
                <img src='src/assets/icons/icon-arrowRight.svg'/>
            </button>
                
        </div>
    </footer>
  )
}

export default CommonFooter