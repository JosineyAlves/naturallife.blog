// Função para capturar a cidade a partir do IP usando fetch
function getCity() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const cityName = data.city;
            const cityElements = document.querySelectorAll('.city-name');
            cityElements.forEach(element => {
                element.textContent = cityName;
            });
        })
        .catch(error => {
            console.error('Erro ao obter a cidade:', error);
        });
}

// Executa a função para pegar a cidade quando a página carrega
getCity();

// Contagem regressiva de estoque
let stockCount = 139;
const stockCountElement = document.getElementById('stock-count');

// Array de valores de redução
const reductionValues = [6, 3, 2];
let reductionIndex = 0;

function updateStockCount() {
    if (stockCount > 6) {
        const nextReduction = reductionValues[reductionIndex];
        // Verifica se a próxima redução levará o estoque abaixo de 6
        if (stockCount - nextReduction <= 6) {
            stockCount = 6;
        } else {
            stockCount -= nextReduction;
        }

        stockCountElement.textContent = stockCount;

        // Atualiza o índice para a próxima redução
        reductionIndex = (reductionIndex + 1) % reductionValues.length;
    }
}

function startStockCountdown() {
    setInterval(updateStockCount, 5000); // Diminui o estoque a cada 5 segundos
}




document.addEventListener("DOMContentLoaded", function() {
    var allStarsContainers = document.querySelectorAll('.stars');

    allStarsContainers.forEach(function(container) {
        const rating = parseFloat(container.getAttribute('data-rating'));
        container.innerHTML = ''; // Clear existing stars if any
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                container.innerHTML += '<span class="star">&#9733;</span>'; // filled star
            } else if (i > rating && i - 1 < rating) {
                container.innerHTML += '<span class="star">&#189;</span>'; // half star
            } else {
                container.innerHTML += '<span class="star">&#9734;</span>'; // empty star
            }
        }
    });
});
