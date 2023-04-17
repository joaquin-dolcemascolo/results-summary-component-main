import data from './data.json' assert { type: "json" };

const testItem = document.getElementsByClassName('test')[0];

const items = data.map(({ category, icon, score }) => {
    const newItem = testItem.cloneNode(true);
    newItem.classList.add(`test--${category.toLocaleLowerCase()}`);
    newItem.getElementsByClassName('test__image')[0].src = icon;
    newItem.getElementsByClassName('test__score')[0].innerHTML = score;

    const categoryElement = newItem.getElementsByClassName('test__category')[0];
    categoryElement.innerHTML = category;
    categoryElement.classList.add(`test__category--${category.toLocaleLowerCase()}`);

    return newItem;
});

const getTotalValue = (totalScore, currentValue) => totalScore += currentValue.score;
const totalScore = (data.reduce(getTotalValue, 0) / data.length).toFixed(0);


document.getElementsByClassName('total-score__result')[0].innerHTML = totalScore;
document.getElementsByClassName('summary-section__tests')[0].append(...items);
testItem.remove();