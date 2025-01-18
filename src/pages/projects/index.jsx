import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import img1 from '../../images/i1.jpg';
import img2 from '../../images/i2.jpg';
import img3 from '../../images/i3.jpg';
import img4 from '../../images/i4.jpg';
import img5 from '../../images/i5.jpg';
import './style.scss';


const portfolioData = [
    {
        id: 2,
        name: "Ecommerce",
        image: img1,
        link: ''
    },
    {
        id: 3,
        name: "Note App",
        image: img2,
        link:''
    },
    {
        id: 2,
        name: "design",
        image: img3,
        link:''
    },
    {
        id: 3,
        name: "AI-bot",
        image: img4,
        link:''
    },
    {
        id: 3,
        name: "AI-fitness",
        image: img5,
        link:''
    }
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'web development'
    },
    {
        filterId: 3,
        label: 'AI'
    }
]

const Projects = () => {

const [filteredvalue,setFilteredValue] = useState(1);
const [hoveredValue, setHoveredValue] = useState(null);

function handleFilter(currentId){
    setFilteredValue(currentId)
};

function handleHover(index){
    setHoveredValue(index)
}

const filterdItems = filteredvalue === 1 ? portfolioData : portfolioData.filter(item=>item.id === filteredvalue)

    return (
        <div>
            <section className="projects" id="projects">
                <PageHeaderContent headerText="My Projects" icon={<BsInfoCircleFill size={40} />} />
                <div className="projects_content">

                    <ul className="projects_content_filter">
                        {
                            filterData.map(item => (
                                <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>

                                    {
                                        item.label
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    <div className="projects_content_cards">

                        {
                            filterdItems.map((item,index)=>(
                                <div className="projects_content_cards_item" key={`cardItem${item.name.trim()}`} onMouseEnter={()=>handleHover(index)} onMouseLeave={()=>handleHover(null)}>

                                    <div className="projects_content_cards_item_img-wrapper">
                                        <a>
                                            <img src={item.image} alt="img" />
                                        </a>
                                    </div>
                                    <div className="overlay">
                                        {
                                            index === hoveredValue && (
                                                <div>
                                                    <p>{item.name}</p>
                                                    <button>Visit</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;