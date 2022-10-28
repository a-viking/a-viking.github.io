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
        existingImage.remove();
    }

    const img = new Image();
    img.src = images[selectedItemType];
    img.id = 'main-btn-image';
    img.classList.add('main-btn-image');

    img.onload = () => {
        if (mainButton) {
            mainButton.append(img);
        }
    };
}

itemTypesContainer.addEventListener('click', ({ target }) => {
    if (target.dataset.itemType && target.dataset.itemType !== selectedItemType) {
        if (!mainButton) {
            chosenItemContainer.classList.remove('hidden');
            mainButton = document.getElementById('main-button');
            mainButton.addEventListener('click', handleMainButtonClick);
        }

        selectedItemType = target.dataset.itemType;
        renderImage();
    }
});
