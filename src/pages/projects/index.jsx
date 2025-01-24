import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";
import img1 from '../../images/i1.jpg';
import img2 from '../../images/i2.jpg';
import img3 from '../../images/i6.jpg';
import img4 from '../../images/i4.jpg';
import img5 from '../../images/i5.jpg';
import './style.scss';

const portfolioData = [
    {
        id: 2,
        name: "Quiz Website",
        image: img1,
        link: '',
        github: 'https://github.com/Rahulreddy4444/quiz-wizz',
        demo: 'https://drive.google.com/file/d/1_FqbI6LnOTfLMIL7HIKhG-CME4vka3up/view?usp=sharing'
    },
    {
        id: 3,
        name: "Note App",
        image: img2,
        link: '',
        github: '',
        demo: ''
    },
    {
        id: 2,
        name: "Design",
        image: img3,
        link: '',
        github: '',
        demo: ''
    },
    {
        id: 3,
        name: "AI-bot",
        image: img4,
        link: '',
        github: '',
        demo: ''
    },
    {
        id: 3,
        name: "AI-fitness",
        image: img5,
        link: '',
        github: '',
        demo: ''
    }
];

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
];

const Projects = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    const filteredItems = filteredvalue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredvalue);

    return (
        <div>
            <section className="projects" id="projects">
                <PageHeaderContent headerText="My Projects" icon={<GrProjects size={40} />} />
                <div className="projects_content">
                    <ul className="projects_content_filter">
                        {filterData.map(item => (
                            <li
                                className={item.filterId === filteredvalue ? 'active' : ''}
                                onClick={() => handleFilter(item.filterId)}
                                key={item.filterId}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                    <div className="projects_content_cards">
                        {filteredItems.map((item, index) => (
                            <div
                                className="projects_content_cards_item"
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="projects_content_cards_item_img-wrapper">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} alt={item.name} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {index === hoveredValue && (
                                        <div>
                                            <p>{item.name}</p>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <button>Visit</button>
                                            </a>
                                            <a href={item.github} target="_blank" rel="noopener noreferrer">
                                                <button>GitHub</button>
                                            </a>
                                            <a href={item.demo} target="_blank" rel="noopener noreferrer">
                                                <button>Demo Video</button>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
