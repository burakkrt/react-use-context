import {useContext} from 'react'
import {Context} from '../Context/ContextProvider.jsx';
import {categories} from "../Context/data.jsx";

const Category = () => {

    const {categoryScore, setCategoryScore} = useContext(Context);
    
    const scoreHandler = (index) => {
        setCategoryScore(prevCategoryScore => {
            const newCategoryScore = [...prevCategoryScore];
            newCategoryScore[index] = {...prevCategoryScore[index], score: prevCategoryScore[index].score + 1}
            return newCategoryScore;
        })
    }

    return (
        <div className="d-inline-block p-3">
            {categoryScore.map((category, index) => (
                <div
                    className="category position-relative d-flex align-items-center justify-content-start gap-2 border border-2 my-3 px-3 py-1 shadow-sm rounded"
                    key={index}>
                    <img src={import.meta.env.VITE_PUBLIC_CATEGORIES_ICON_URL + category.icon}
                         alt={`${category.category} category icon`} className="category-icon"/>
                    <h3 className="font-monospace fw-bold m-0">{category.category}</h3>
                    <span className="fw-bold fs-5 ms-2">{category.score} / 100</span>
                    <button className="btn scoreBtn border-0 p-1 position-absolute"
                            disabled={category.score >= 100}
                            onClick={() => scoreHandler(index)}
                            style={{right: "-55px", top: "50%", transform: "translateY(-50%)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-emoji-heart-eyes-fill like-icon text-danger" viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Category;