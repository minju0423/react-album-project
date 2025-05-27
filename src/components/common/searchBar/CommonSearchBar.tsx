import { useState } from "react"
import styles from "./CommonSearchBar.module.scss"
import { useRecoilState } from "recoil"
import { searchState } from "@/recoil/atoms/searchState"
import { pageState } from "@/recoil/atoms/pageState"

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [page, setPage] = useRecoilState(pageState)
  const [text, setText] = useState<string>('')
  const onChange = (event) => {
    console.log(event.target.value)
    setText(event.target.value)
  }
  const onSearch = () => {
    if(text === ""){
      //input 태그 안에 빈 값을 검색하였을 때 -> default searching value : "Korea"
      setSearch('Korea')
    }else{
      setSearch(text) //작성한 Input value 값 전달
    }
    setPage(1)
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if(event.key === "Enter"){
      if(text === ""){
        //input 태그 안에 빈 값을 검색하였을 때 -> default searching value : "Korea"
        setSearch('Korea')
      }else{
        setSearch(text) //작성한 Input value 값 전달
      }
    }
  }
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type="text" placeholder="찾으실 이미지를 검색하세요" className={styles.searchBar__search__input} value={text} onKeyDown={handleKeyDown} onChange={onChange}/>
            <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
        </div>
    </div>
  )
}

export default CommonSearchBar