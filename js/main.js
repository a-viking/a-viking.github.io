const chosenItemContainer = document.getElementById('chosen-item');
const itemTypesContainer = document.getElementById('item-types');
const images = {
    helicopter: './src/helicopter.svg',
    rocket: './src/missile.svg',
    drone: './src/drone.svg',
    plane: './src/plane.svg'
};

let mainButton = null;
let selectedItemType = null;

function handleMainButtonClick() {
    console.log(selectedItemType);
}

function renderImage() {
    const existingImage = document.getElementById('main-btn-image');
    if (existingImage) {
        existingImage.style.visibility = 'hidden';
    }

    const img = new Image();
    img.src = images[selectedItemType];
    img.id = 'main-btn-image';
    img.classList.add('main-btn-image');

    img.onload = () => {
        if (mainButton) {
            mainButton.append(img);
            if (existingImage) {
                existingImage.remove();
            }
        }
    };
}

itemTypesContainer.addEventListener('click', ({ target }) => {
    if (target.dataset.itemType && target.dataset.itemType !== selectedItemType) {
        if (!mainButton) {
            chosenItemContainer.classList.remove('hidden');
            mainButton = document.getElementById('main-button');
            mainButton.addEventListener('click', handleMainButtonClick);
            addSwipeListener(mainButton);
        }

        selectedItemType = target.dataset.itemType;
        renderImage();
    }
});

window.addEventListener("load", () => {
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./js/sw.js');
        } catch (e) {
            console.log(`SW registration failed`);
        }
    }
}
