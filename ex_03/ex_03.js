const imagesData  = [['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
    ['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif', 'Happy sausage'],
    ['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif', 'Stripes'],
    ['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif', 'Tornadoes'],
    ['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif', 'Walking squares'],
    ['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif', 'Cubes'],
    ['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif', 'Hairy'],
    ['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif', 'The Beanstalk'],
    ['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif', 'Tiles'],
    ['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif', 'In and Out'],
    ['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif', 'Switching points']]

    generateCards(imagesData)

    document.addEventListener('DOMContentLoaded', () => {
        const cardsList = document.getElementById('cards-list');
    
        cardsList.addEventListener('wheel', (event) => {
            event.preventDefault();
            cardsList.scrollLeft += event.deltaY*3;
        });
    
        cardsList.addEventListener('click', (event) => {
            if (event.target.closest('.card')) {
                const zoomedCard = document.querySelector('.card.zoomed');
                if (zoomedCard) { zoomedCard.classList.remove('zoomed'); } // Pas nécéssaire mais quand on click ça reduit c'est mieux je trouve.
                const card = event.target.closest('.card');
                card.classList.toggle('zoomed');
                if (card.classList.contains('zoomed')) {
                    const cardRect = card.getBoundingClientRect();
                    const listRect = cardsList.getBoundingClientRect();
                    const scrollLeft = cardRect.left - listRect.left + cardsList.scrollLeft - (listRect.width / 2) + (cardRect.width / 2);
                    cardsList.scrollLeft = scrollLeft;
                }
            }
        });
    
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                const zoomedCard = document.querySelector('.card.zoomed');
                if (zoomedCard) { zoomedCard.classList.remove('zoomed'); }
            }});
    });
    