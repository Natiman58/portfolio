import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faPython, faReact} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
          clearTimeout(timeoutId);
        };
      }, []);


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} />
                    </h1>
                    <p>
                    I am a highly skilled and dedicated full stack web developer
                    with a passion for creating innovative and user-friendly digital
                    experiences.
                    </p>
                    <p>
                    With a friendly and cooperative approach,
                    I thrive in collaborative environments,
                    fostering positive working relationships and contributing to successful outcomes.
                    </p>

                    <p>
                    If I were to define myself in one sentence,
                    I would say I'm an enthusiastic reader, music lover, and
                    tech-obsessed individual, always ready for new adventures and experiences.
                    </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#DD0031" />

                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />

                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />

                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />

                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />

                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faDatabase} color="#EC4D28" />

                    </div>
                </div>
            </div>
        </div>

            <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}

export default About;