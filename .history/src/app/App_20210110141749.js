
import generadeRandomQuestions from '../components/generateQuestion/generateQuestion.js';

export const App = ({options}) => {
    console
    const playGameButton = document.getElementById("play");
        playGameButton.addEventListener('click', () => {
            console.log('click')
            playGameButton.classList.add('display-none');
        generadeRandomQuestions();
        });
}


