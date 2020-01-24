document.addEventListener("DOMContentLoaded", function () {

    let btn = document.createElement("button");
    btn.innerHTML = "add square";
    document.body.appendChild(btn);
    let firstLine = document.createElement('div')
    let counter = 0

    btn.addEventListener('click', function () {
        firstLine.classList.add('test')
        counter++
        let blackSquare = document.createElement('div');
    firstLine.appendChild(blackSquare);
        document.body.appendChild(firstLine)
        blackSquare.classList.add('black-square');
        
        blackSquare.id = counter

        blackSquare.addEventListener('mouseover', function () {
            blackSquare.innerText = blackSquare.id
        })
        blackSquare.addEventListener('mouseout', function () {
            blackSquare.innerText = ''
        })

        let colors = ['#80B300', '#709900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66',]


        blackSquare.addEventListener("click", function () {

            blackSquare.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        })
        blackSquare.addEventListener('dblclick', function () {
            if (blackSquare % 2 === 0) {
                if (document.contains(blackSquare.nextSibling)) {
                    blackSquare.nextSibling.remove()
                }
                else { alert('noSquaretoDelete') }

            }
            else {
                if (document.contains(blackSquare.previousSibling)) {
                    blackSquare.previousSibling.remove()
                }
                else { alert('Nun ya') }
            }
        })


    })

})

