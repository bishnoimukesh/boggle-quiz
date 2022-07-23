import { useState , useEffect } from 'react'
import axios from "axios"
import { Categorycard } from '../components/Categorycard'

const Categories = () => {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get("/api/quizzes")
                setCategories(resp.data.quizes)
            } catch(err) {
                console.log(err);
            }
        })()
    } ,[])

    return (
        <>
        <div className="container mx-auto">
            <h1 className="flex justify-center text-5xl mt-8 mb-4">Categories</h1>
            <div className="flex justify-center space-x-4 flex-wrap">
            {categories.map(category => <Categorycard key={category._id} category={category}/>)}
            </div>
        </div>
        </>
    )
}

export { Categories }